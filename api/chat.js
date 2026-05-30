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

    // Generar contexto de proyectos con información real y detallada
    const projectContext = `
Contexto de Proyectos Reales:

1. Salvatore Repair (ID: salvatore-repair): Página web para una tienda tradicional de reparación de zapatos ubicada en Torremolinos. Un negocio familiar que ofrece servicios especializados de reparación y restauración de calzado con técnicas artesanales y años de experiencia. Incluye información sobre servicios, ubicación y contacto. Demo: https://salvatorerepair.es

2. SVC Moto (ID: scv-moto): Página web tienda especializada en alquiler de motos eléctricas ubicada en Málaga centro. Plataforma completa que ofrece servicios de movilidad urbana sostenible con una flota moderna de vehículos eléctricos. Incluye sistema de reservas, descuentos, logros y puntos, información detallada de la flota y servicios de reparación y mantenimiento. Demo: https://svcmoto.es

3. Free Air Street (ID: free-air-street): Tienda online especializada en alquiler de patinetes eléctricos, fat bikes, motos, coches y tours. Una plataforma completa que ofrece servicios de movilidad urbana y experiencias turísticas, conectando a los usuarios con opciones de transporte sostenible y aventuras únicas en la ciudad. Demo: https://freeairstreet.com

4. Geo Law Empire (ID: geo-law-empire): Un juego de estrategia geopolítica donde las decisiones legales y las conspiraciones moldean el destino de las naciones. Gestiona recursos, establece alianzas y desenreda intrigas mientras expandes tu imperio en un mundo dinámico donde cada decisión tiene consecuencias globales. Demo: https://empirelaw.vercel.app

5. AgeEvents AI (ID: 0): Aplicación web inteligente que te permite descubrir qué eventos históricos mundiales ocurrieron cuando tenías una edad específica. Explora la historia de manera personalizada y descubre cómo el mundo cambió mientras crecías. Una experiencia única que conecta tu vida personal con los grandes momentos de la humanidad. Demo: https://agevents.vercel.app/

6. Local AI (ID: 1): Aplicación de chat AI avanzada con asistente de voz integrado que permite conversaciones naturales en tiempo real. Ofrece la flexibilidad de conectar tanto modelos de IA locales a través de LMStudio como servicios en la nube. Incluye funcionalidades de reconocimiento de voz, síntesis de texto a voz, y una interfaz intuitiva para gestionar diferentes agentes. Demo: https://voicechat-ebon.vercel.app/

7. Logs de Psicología (ID: 2): Juego interactivo basado en el concepto de la mente humana como sistema computacional, donde explorarás la psicología a través de un prisma diferente. ¿Y si acudir al psicólogo es como activar los logs de depuración? Tu rol será el de un Ingeniero de sistemas mentales. Demo: https://v0-juego-interactivo-psicologia.vercel.app/

8. Facetime Tracker (ID: 3): Aplicación web PC que utiliza TensorFlow para detectar y registrar el tiempo que pasas frente a tu PC. Especialmente útil para medir la exposición a videollamadas, clases virtuales o cualquier actividad que requiera el uso de cámara web. Demo: https://facedetection-wine.vercel.app/

9. Book Binder PDF (ID: 4): Aplicación web y móvil para ordenar linealmente PDFs con contenido personalizado y en línea. Soporta PDFs ilimitados y permite su ordenación. Integración con OpenAI para obtener información sobre los libros que quieras en un chat integrado. Demo: https://bookcreatorr.netlify.app/

10. YourDayIn (ID: 5): Aplicación web y móvil con Agente IA integrado para ayudarte a planificar tu día con los 5 lugares para visitar en función de tu búsqueda. Integración con OpenAI para obtener información sobre los lugares. Demo: https://tudiaen.vercel.app/game

11. AI Dreamer (ID: 6): Aplicación y web diseñada para registrar, analizar y explorar los sueños desde una perspectiva inspirada en las teorías psicoanalíticas de Sigmund Freud. Incluye un diccionario de símbolos oníricos y la capacidad de llevar un historial detallado con IA personal. Demo: https://dreamsfreud.vercel.app/

12. NotfoundInk (ID: 7): Portfolio web para NotfoundInk de Ana Maria DCG, una colección de arte digital, con integración de acuñado de NFTs en la página web, conexión con billetera y sistema de ventas por formulario en sección de contacto. Demo: https://notfoundink.art

13. CandleRush 2 (ID: 8): Segunda versión de CandleRush, una plataforma mejorada de simulación y juego de trading de criptomonedas. Análisis profundo en sección Mi Perfil. Selección de par y temporalidad. Operaciones automáticas inteligentes con resolución integrada. Demo: https://candlerush.es

14. Horizon Creative (ID: 9): Horizon Creative es una página web de portafolio profesional para agencias creativas, freelancers y estudios de diseño. Permite mostrar proyectos, servicios, equipo y datos de contacto, incluido mapa de ubicación. Demo: https://horizoncreative.es

15. Carlos Freire FPV (ID: 10): Mi web personal para la venta de servicios de grabación con drones FPV en la Costa del Sol, Málaga. Secciones de contacto, meteorología con datos reales, servicios, proyectos y equipo disponible. Demo: https://carlosfpv.es

16. MeteoMálaga (ID: 11): Aplicación de pronósticos meteorológicos para Málaga con datos en tiempo real, análisis de predicciones y estadísticas. Predicciones con resolución automática en el momento del pronóstico. Demo: https://meteomalaga.fun

17. CandleRush 1 (ID: 12): Una plataforma de juego y simulación de trading de criptomonedas en una versión temprana con datos en tiempo real y operaciones ficticias basadas en las velas japonesas y las temporalidades, con resolución automática. Demo: https://btcer.fun

18. Bot Trading IA (ID: 13): Bot de trading automatizado con inteligencia artificial que opera con precios reales del mercado de criptomonedas. Conectado a APIs de exchanges para analizar tendencias, patrones técnicos y tomar decisiones de compra/venta en tiempo real. Incluye algoritmos de machine learning para optimizar estrategias y gestión de riesgo avanzada. Demo: https://aibotrading.vercel.app

19. CityVox (ID: 14): Juego de gestión de ciudades 3D inspirado en SimCity con gran potencial de desarrollo. Un simulador urbano completo donde puedes construir, gestionar y expandir tu propia metrópolis. Incluye sistema económico dinámico, planificación estratégica RCI (Residencial, Comercial, Industrial) y consideraciones ESG (Ambientales, Sociales y de Gobernanza) para un desarrollo urbano sostenible. Demo: https://cityvox.vercel.app

20. Wolty Agency (ID: 15): Sitio web desarrollado para una agencia digital canadiense especializada en transformar la presencia online de empresas. La plataforma presenta sus servicios de desarrollo web, aplicaciones móviles, SEO, diseño UI/UX y soluciones e-commerce. Incluye secciones de servicios, proceso de trabajo y formularios de contacto con diseño moderno y responsive. Demo: https://woltyx.vercel.app

21. Nimbus App (ID: 16): Juego plataforma multijugador online donde puedes consultar el clima en tiempo real y participar en predicciones meteorológicas con dinero real. Incluye geoposicionamiento para datos locales precisos, pronósticos sobre temperatura, velocidad del viento y otros parámetros climáticos con integración de Stripe para pagos seguros. Demo: https://www.nimbusapp.es

22. BTC VS LLMs (ID: 17): Plataforma innovadora donde cinco modelos de inteligencia artificial (Gemini, Grok, OpenAI, Anthropic y Qwen) compiten en trading de Bitcoin las 24 horas del día, los 7 días de la semana. Cada modelo opera con $1000 USD en tiempo real, permitiendo observar sus estrategias, rendimiento y decisiones de inversión en vivo. Demo: https://btcvsgpt.vercel.app

23. Biblia Viva (ID: 18): Plataforma interactiva diseñada para redescubrir las escrituras mediante tecnología moderna. Ofrece acceso a múltiples versiones bíblicas y mapas históricos detallados para un estudio inmersivo. Integra inteligencia artificial avanzada para asistir en la investigación y chats comunitarios vibrantes para compartir reflexiones. Una experiencia espiritual completa que une fe, historia y comunidad. Demo: https://vivabiblia.vercel.app

24. ATC Radar AGP (ID: 19): Aplicación interactiva de ATC (Air Traffic Control) en vivo alimentada por tecnología SDR. Incluye un mapa interactivo en tiempo real para el seguimiento de aviones en vuelo y ofrece la oportunidad única de escuchar las comunicaciones de la torre de control de Málaga en directo. Además, cuenta con un sistema de transcripciones en tiempo real. Demo: https://agp-malaga.vercel.app
**IMPORTANTE: Nimbus App también cuenta con un archivo APK disponible que es la aplicación móvil nativa del juego, permitiendo a los usuarios acceder a todas las funcionalidades desde sus dispositivos móviles Android.**

Si mencionas algún proyecto específico, incluye al final de tu respuesta este JSON:
{"showProjectBanner": true, "projectId": "id_del_proyecto", "projectTitle": "Título del Proyecto", "projectImage": "/images/imagen.png", "projectIcon": "/images/icono.png", "demoUrl": "url_demo", "codeUrl": "url_codigo"}
`;

    // Preparar los mensajes para OpenAI incluyendo el contexto de proyectos
    const openAIMessages = [
      {
        role: 'system',
        content: `${systemPrompt || 'Eres un asistente de Carlos Freire útil y amable que informa de todo lo referente a los proyectos de Carlos y su web, su información de contacto que tipo de tecnolofías usa Typescript, Javascript etc ( estan en los proyectos cada tecnología usada) (es Fotografo, piloto de drones, y desarrollador web) Nunca menciones nada que no sea referente a la web a los proyectos y a todo lo referente de carlosfr.es.'}\n\n${projectContext}`
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
    let cleanResponse = aiResponse;
    
    // Función para encontrar y extraer JSON válido que contenga showProjectBanner
    function extractProjectBanner(text) {
      // Buscar todas las posiciones donde aparece "showProjectBanner"
      const matches = [];
      let index = 0;
      
      while ((index = text.indexOf('"showProjectBanner"', index)) !== -1) {
        // Buscar hacia atrás para encontrar el inicio del objeto JSON
        let start = index;
        let braceCount = 0;
        let foundStart = false;
        
        // Buscar hacia atrás hasta encontrar la llave de apertura
        while (start >= 0) {
          if (text[start] === '}') braceCount++;
          if (text[start] === '{') {
            braceCount--;
            if (braceCount === -1) {
              foundStart = true;
              break;
            }
          }
          start--;
        }
        
        if (foundStart) {
          // Buscar hacia adelante para encontrar el final del objeto JSON
          let end = start + 1;
          braceCount = 1;
          
          while (end < text.length && braceCount > 0) {
            if (text[end] === '{') braceCount++;
            if (text[end] === '}') braceCount--;
            end++;
          }
          
          if (braceCount === 0) {
            const jsonStr = text.substring(start, end);
            try {
              const parsed = JSON.parse(jsonStr);
              if (parsed.showProjectBanner) {
                matches.push({ start, end, json: parsed, text: jsonStr });
              }
            } catch (e) {
              // Ignorar JSON inválido
            }
          }
        }
        
        index++;
      }
      
      return matches;
    }
    
    const bannerMatches = extractProjectBanner(aiResponse);
    
    if (bannerMatches.length > 0) {
      // Tomar el primer banner válido encontrado
      projectBanner = bannerMatches[0].json;
      
      // Remover todos los JSONs de banner encontrados del texto
      let offset = 0;
      bannerMatches.forEach(match => {
        const adjustedStart = match.start - offset;
        const adjustedEnd = match.end - offset;
        cleanResponse = cleanResponse.substring(0, adjustedStart) + cleanResponse.substring(adjustedEnd);
        offset += (match.end - match.start);
      });
    }
    
    // Limpiar espacios extra, saltos de línea y caracteres residuales
    cleanResponse = cleanResponse
      .replace(/\n\s*\n/g, '\n')
      .replace(/^\s+|\s+$/g, '')
      .trim();

    return res.status(200).json({ 
      message: cleanResponse,
      projectBanner: projectBanner
    });

  } catch (error) {
    console.error('Error en el chat:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}