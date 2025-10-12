// API endpoint para el chat con OpenAI
// Este archivo maneja las llamadas a OpenAI de forma segura en el servidor

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

    // Generar contexto de proyectos básico
    const projectContext = `
Contexto de Proyectos:
- Salvatore Repair: Aplicación de gestión de reparaciones
- SVC Moto: Sistema de gestión para talleres de motos
- Free Air Street: Plataforma de eventos urbanos
- Nimbus: Aplicación meteorológica
- Geoma: Herramienta de geolocalización
- CityVox: Plataforma de comunicación urbana
- Wolty: Sistema de gestión energética
- AI Dreamer: Generador de imágenes con IA
- Book Creator: Editor de libros digitales
- Candle Rush: Juego de estrategia
- Cryptoia: Plataforma de criptomonedas
- Depurador: Herramienta de debugging
- Horizon: Dashboard de análisis
- Tienda: E-commerce personalizado
- Age Events: Gestión de eventos
- Bot Trading: Bot de trading automatizado
- CPF 3D: Visualizador 3D
- Creax: Plataforma creativa
- Drones K: Control de drones
- FaceTime Clone: Videollamadas
- Fight Game: Juego de lucha
- Foto X: Editor de fotos
- Freire FPV: Control de drones FPV
- GeoLaw: Herramientas legales geográficas
- GeoQuizzer: Quiz geográfico
- Hero P: Plataforma de héroes
- Local LLM: Modelo de lenguaje local
- Meteo Málaga: Meteorología local
- Navegador: Navegador web personalizado
- PDF Book: Lector de PDF
- Piscolo: Gestión de piscinas
- Tracker: Sistema de seguimiento
- Your Day In: Diario personal

Si mencionas algún proyecto específico, incluye al final de tu respuesta este JSON:
{"showProjectBanner": true, "projectId": "id_del_proyecto", "projectTitle": "Título del Proyecto", "projectImage": "/images/imagen.png", "projectIcon": "/images/icono.png", "demoUrl": "url_demo", "codeUrl": "url_codigo"}
`;

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
      message: cleanResponse,
      projectBanner: projectBanner
    });

  } catch (error) {
    console.error('Error en el chat:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}