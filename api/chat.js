// API endpoint para el chat con OpenAI
// Este archivo maneja las llamadas a OpenAI de forma segura en el servidor

export default async function handler(req, res) {
  // Solo permitir métodos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { messages, systemPrompt } = req.body;

    // Validar que se envíen los mensajes
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Mensajes requeridos' });
    }

    // Obtener la API key del entorno del servidor
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('OPENAI_API_KEY no está configurada');
      return res.status(500).json({ error: 'Configuración del servidor incompleta' });
    }

    // Preparar los mensajes para OpenAI
    const openAIMessages = [
      { role: 'system', content: systemPrompt || 'Eres un asistente útil.' },
      ...messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    ];

    // Llamada a OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4.1-nano-2025-04-14',
        messages: openAIMessages,
        max_tokens: 6000,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Error de OpenAI:', errorData);
      return res.status(response.status).json({ 
        error: 'Error en la API de OpenAI',
        details: errorData.error?.message || 'Error desconocido'
      });
    }

    const data = await response.json();
    
    // Devolver solo la respuesta necesaria
    return res.status(200).json({
      message: data.choices[0].message.content,
      usage: data.usage
    });

  } catch (error) {
    console.error('Error en el endpoint de chat:', error);
    return res.status(500).json({ 
      error: 'Error interno del servidor',
      details: error.message 
    });
  }
}