// API endpoint para el chat con OpenAI
// Este archivo maneja las llamadas a OpenAI de forma segura en el servidor

import { generateProjectContext } from '../src/utils/project-context-provider.js';

export default async function handler(req, res) {
  // Solo permitir métodos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { messages, systemPrompt } = req.body;

    // Validar que se envíen mensajes
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Se requieren mensajes válidos' });
    }

    // Obtener la API key del servidor
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key no configurada en el servidor' });
    }

    // Generar contexto de proyectos dinámicamente
    const projectContext = generateProjectContext();

    // Preparar los mensajes para OpenAI incluyendo el contexto de proyectos
    const openAIMessages = [
      {
        role: 'system',
        content: `${systemPrompt || 'Eres un asistente útil.'}\n\n${projectContext}`
      },
      ...messages
    ];

    // Llamar a la API de OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: openAIMessages,
        max_tokens: 6000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error de OpenAI:', errorData);
      return res.status(400).json({ error: 'Error en la API de OpenAI' });
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    // Detectar si la respuesta contiene información de banner de proyecto
    let projectBanner = null;
    const bannerRegex = /\{"showProjectBanner":\s*true[^}]*\}/;
    const bannerMatch = aiResponse.match(bannerRegex);
    
    if (bannerMatch) {
      try {
        projectBanner = JSON.parse(bannerMatch[0]);
      } catch (e) {
        console.error('Error parsing project banner JSON:', e);
      }
    }

    // Limpiar la respuesta removiendo el JSON del banner si existe
    const cleanResponse = aiResponse.replace(bannerRegex, '').trim();

    return res.status(200).json({ 
      response: cleanResponse,
      projectBanner: projectBanner
    });

  } catch (error) {
    console.error('Error en el chat:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}