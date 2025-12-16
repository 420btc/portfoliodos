import { ProjectProps } from "../components/project-card";

export interface ProjectData {
  id: number | string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  status?: "Finalizado" | "Trabajando";
  date: Date;
  blocked?: boolean;
  hot?: boolean;
}

// Mapear los proyectos a ProjectData con IDs únicos
const projectsData: ProjectData[] = [
  {
    id: 'salvatore-repair',
    title: 'Salvatore Repair',
    description: 'Página web para una tienda tradicional de reparación de zapatos ubicada en Torremolinos. Un negocio familiar que ofrece servicios especializados de reparación y restauración de calzado con técnicas artesanales y años de experiencia. Incluye información sobre servicios, ubicación y contacto.',
    image: 'images/herop.png',
    icon: 'images/salvatore.png',
    tags: ['Negocio Local', 'Reparación', 'Artesanía', 'Tradicional', 'Next.js', 'TypeScript'],
    demoUrl: 'https://salvatorerepair.es',
    codeUrl: 'https://github.com/420btc/salvatore',
    status: 'Finalizado',
    date: new Date('2025-09-15')
  },
  {
    id: 'scv-moto',
    title: 'SVC Moto',
    description: 'Página web tienda especializada en alquiler de motos eléctricas ubicada en Málaga centro. Plataforma completa que ofrece servicios de movilidad urbana sostenible con una flota moderna de vehículos eléctricos. Incluye sistema de reservas, descuentos, logros y puntos, información detallada de la flota y servicios de reparación y mantenimiento.',
    image: 'images/svcportada.png',
    icon: 'images/project-icons/svcmoto.png',
    tags: ['E-commerce', 'Movilidad', 'Alquiler', 'OpenAI', 'TypeScript', 'Next.js'],
    demoUrl: 'https://svcmoto.es',
    codeUrl: 'https://github.com/420btc/svcmoto',
    status: 'Finalizado',
    hot: true,
    date: new Date('2025-09-01')
  },
  {
    id: 'free-air-street',
    title: 'Free Air Street',
    description: 'Tienda online especializada en alquiler de patinetes eléctricos, fat bikes, motos, coches y tours. Una plataforma completa que ofrece servicios de movilidad urbana y experiencias turísticas, conectando a los usuarios con opciones de transporte sostenible y aventuras únicas en la ciudad.',
    image: 'images/icono.png',
    icon: 'images/project-icons/iconofree.png',
    tags: ['E-commerce', 'Movilidad', 'Alquiler', 'Tours', 'Next.js', 'TypeScript'],
    demoUrl: 'https://freeairstreet.com',
    codeUrl: 'https://github.com/420btc/freeairstreet',
    status: 'Finalizado',
    featured: true,
    date: new Date('2025-08-10')
  },
  {
    id: 'geo-law-empire',
    title: 'Geo Law Empire',
    description: 'Un juego de estrategia geopolítica donde las decisiones legales y las conspiraciones moldean el destino de las naciones. Gestiona recursos, establece alianzas y desenreda intrigas mientras expandes tu imperio en un mundo dinámico donde cada decisión tiene consecuencias globales. ¿Tienes lo que se necesita para gobernar con astucia en este juego de poder y estrategia?',
    image: 'images/geoma.png',
    icon: 'images/geolawicon.png',
    tags: ['Estrategia', 'Geopolítica', 'Next.js', 'TypeScript', 'Juego'],
    demoUrl: 'https://empirelaw.vercel.app',
    codeUrl: 'https://github.com/420btc/Empirelaw',
    status: 'Finalizado',
    date: new Date('2025-08-15')
  },
  {
    id: 0,
    title: "AgeEvents AI",
    description: "Aplicación web inteligente que te permite descubrir qué eventos históricos mundiales ocurrieron cuando tenías una edad específica. Explora la historia de manera personalizada y descubre cómo el mundo cambió mientras crecías. Una experiencia única que conecta tu vida personal con los grandes momentos de la humanidad.",
    image: "images/agee.png",
    icon: "images/navegador.png",
    tags: ["React", "AI", "Historia", "Educación", "TypeScript", "OpenAI"],
    demoUrl: "https://agevents.vercel.app/",
    codeUrl: "https://github.com/420btc/AgeEvents",
    status: "Finalizado",
    date: new Date("2025-06-20")
  },
  {
    id: 1,
    title: "Local AI",
    description: "Aplicación de chat AI avanzada con asistente de voz integrado que permite conversaciones naturales en tiempo real. Ofrece la flexibilidad de conectar tanto modelos de IA locales a través de LMStudio como servicios en la nube. Incluye funcionalidades de reconocimiento de voz, síntesis de texto a voz, y una interfaz intuitiva para gestionar diferentes agentes.",
    image: "images/locaaal.png",
    icon: "images/fondo.png",
    tags: ["AI", "Chat", "Voice Assistant", "LMStudio", "OpenAI"],
    demoUrl: "https://voicechat-ebon.vercel.app/",
    codeUrl: "https://github.com/420btc/voicechat",
    status: "Finalizado",
    date: new Date("2025-06-15")
  },
  {
    id: 2,
    title: "Logs de Psicología",
    description: "Juego interactivo basado en el concepto de la mente humana como sistema computacional, donde explorarás la psicología a través de un prisma diferente. ¿Y si acudir al psicólogo es como activar los logs de depuración? Tu rol será el de un Ingeniero de sistemas mentales.",
    image: "images/piscolo.png",
    icon: "images/project-icons/depuracion.png",
    tags: ["React", "Next.js", "Educación", "TypeScript"],
    demoUrl: "https://logspsicologo.vercel.app",
    codeUrl: "https://github.com/420btc/Psicolog-acomoLogsDepuracion",
    status: "Finalizado",
    date: new Date("2025-06-7")
  },
  {
    id: 3,
    title: "Facetime Tracker",
    description: "Aplicación web PC que utiliza TensorFlow para detectar y registrar el tiempo que pasas frente a tu PC. Especialmente útil para medir la exposición a videollamadas, clases virtuales o cualquier actividad que requiera el uso de cámara web.",
    image: "images/trackerr.png",
    icon: "images/project-icons/trackericono.png",
    tags: ["Next.js", "TypeScript", "TensorFlow", "OpenCV"],
    demoUrl: "https://facedetection-wine.vercel.app/",
    codeUrl: "https://github.com/420btc/FacetimeTracker",
    status: "Finalizado",
    date: new Date("2025-06-01")
  },
  {
    id: 4,
    title: "Book Binder PDF",
    description: "Aplicación web y móvil para ordenar linealmente PDFs con contenido personalizado y en línea. Soporta PDFs ilimitados y permite su ordenación. Integración con OpenAI para obtener información sobre los libros que quieras en un chat integrado.",
    image: "images/pdfbook.png",
    icon: "images/project-icons/bookcreatord.png",
    tags: ["Next.js", "TypeScript", "PDF", "Utilidades"],
    demoUrl: "https://bookcreatorr.netlify.app/",
    codeUrl: "https://github.com/usuario/recipes",
    status: "Finalizado",
    date: new Date("2025-05-23")
  },
  {
    id: 5,
    title: "YourDayIn",
    description: "Aplicación web y móvil con Agente IA integrado para ayudarte a planificar tu día con los 5 lugares para visitar en función de tu búsqueda. Integración con OpenAI para obtener información sobre los lugares.",
    image: "images/yourrr.png",
    icon: "images/project-icons/dayinlogo.png",
    tags: ["Next.js", "TypeScript", "JavaScript", "OpenAI"],
    demoUrl: "https://tudiaen.vercel.app/game",
    codeUrl: "https://github.com/420btc/Tud-aen",
    status: "Finalizado",
    date: new Date("2025-05-18")
  },
  {
    id: 6,
    title: "AI Dreamer",
    description: "Aplicación y web diseñada para registrar, analizar y explorar los sueños desde una perspectiva inspirada en las teorías psicoanalíticas de Sigmund Freud. Incluye un diccionario de símbolos oníricos y la capacidad de llevar un historial detallado con IA personal.",
    image: "images/aidreamer.png",
    icon: "images/project-icons/aidreamerx.png",
    tags: ["Next.js", "TypeScript", "OpenAI", "Machine Learning"],
    demoUrl: "https://dreamsfreud.vercel.app/",
    codeUrl: "https://github.com/420btc/DreamFreud",
    status: "Finalizado",
    date: new Date("2025-05-12")
  },
  {
    id: 7,
    title: "NotfoundInk",
    description: "Portfolio web para NotfoundInk de Ana Maria DCG, una colección de arte digital, con integración de acuñado de NFTs en la página web, conexión con billetera y sistema de ventas por formulario en sección de contacto.",
    image: "images/notfound.png",
    icon: "images/project-icons/foundicon2.png",
    tags: ["Next.js", "TypeScript", "Arte", "Diseño"],
    demoUrl: "https://notfoundink.art",
    codeUrl: "https://github.com/420btc/notfoundink",
    status: "Finalizado",
    date: new Date("2025-05-05")
  },
  {
    id: 8,
    title: "CandleRush 2",
    description: "Segunda versión de CandleRush, una plataforma mejorada de simulación y juego de trading de criptomonedas. Análisis profundo en sección Mi Perfil. Selección de par y temporalidad. Operaciones automáticas inteligentes con resolución integrada.",
    image: "images/candles.png",
    icon: "images/project-icons/candleicono.png",
    tags: ["Next.js", "TypeScript", "Trading", "Blockchain"],
    demoUrl: "https://candlerush.es",
    codeUrl: "https://github.com/420btc/CandleRush2",
    status: "Finalizado",
    date: new Date("2025-04-28")
  },
  {
    id: 9,
    title: "Horizon Creative",
    description: "Horizon Creative es una página web de portafolio profesional para agencias creativas, freelancers y estudios de diseño. Permite mostrar proyectos, servicios, equipo y datos de contacto, incluido mapa de ubicación.",
    image: "images/Horizonf.png",
    icon: "images/project-icons/logobueno.png",
    tags: ["Next.js", "TypeScript", "Diseño", "Branding", "Portfolios"],
    demoUrl: "https://horizoncreative.es",
    codeUrl: "https://github.com/420btc/horizoncreative",
    status: "Finalizado",
    featured: true,
    date: new Date("2025-04-10")
  },
  {
    id: 10,
    title: "Carlos Freire FPV",
    description: "Mi web personal para la venta de servicios de grabación con drones FPV en la Costa del Sol, Málaga. Secciones de contacto, meteorología con datos reales, servicios, proyectos y equipo disponible. No dudes en contactarme!",
    image: "images/cpfpv.png",
    icon: "images/project-icons/iconofpv.png",
    tags: ["Next.js", "Web", "Fotografía", "Diseño", "Portfolios"],
    demoUrl: "https://carlosfpv.es",
    codeUrl: "https://github.com/420btc/freirefpv",
    status: "Finalizado",
    date: new Date("2025-03-20")
  },
  {
    id: 11,
    title: "MeteoMálaga",
    description: "Aplicación de pronósticos meteorológicos para Málaga con datos en tiempo real, análisis de predicciones y estadísticas. Predicciones con resolución automática en el momento del pronóstico.",
    image: "images/meteom.png",
    icon: "images/project-icons/meteo2png.png",
    tags: ["React", "API", "Meteorología", "UI/UX"],
    demoUrl: "https://meteomalaga.fun",
    codeUrl: "https://github.com/420btc/meteomalaga",
    status: "Finalizado",
    date: new Date("2025-03-12")
  },
  {
    id: 12,
    title: "CandleRush 1",
    description: "Una plataforma de juego y simulación de trading de criptomonedas en una versión temprana con datos en tiempo real y operaciones ficticias basadas en las velas japonesas y las temporalidades, con resolución automática.",
    image: "images/candlex.png",
    icon: "images/project-icons/iconocandlerush.png",
    tags: ["React", "Node.js", "Trading", "Blockchain"],
    demoUrl: "https://btcer.fun",
    codeUrl: "https://github.com/420btc/cndle",
    status: "Finalizado",
    date: new Date("2025-03-03")
  },
  {
    id: 13,
    title: "Bot Trading IA",
    description: "Bot de trading automatizado con inteligencia artificial que opera con precios reales del mercado de criptomonedas. Conectado a APIs de exchanges para analizar tendencias, patrones técnicos y tomar decisiones de compra/venta en tiempo real. Incluye algoritmos de machine learning para optimizar estrategias y gestión de riesgo avanzada.",
    image: "images/bottradingg.png",
    icon: "images/project-icons/icontrading.png",
    tags: ["AI", "Trading", "Cryptocurrency", "Machine Learning", "API Integration", "Python", "OpenAI"],
    status: "Finalizado",
    date: new Date("2025-07-22"),
    demoUrl: "https://aibotrading.vercel.app",
    codeUrl: "https://github.com/420btc/AiBotTrading",
    blocked: true
  },
  {
    id: 14,
    title: "CityVox",
    description: "Juego de gestión de ciudades 3D inspirado en SimCity con gran potencial de desarrollo. Un simulador urbano completo donde puedes construir, gestionar y expandir tu propia metrópolis. Incluye sistema económico dinámico, planificación estratégica RCI (Residencial, Comercial, Industrial) y consideraciones ESG (Ambientales, Sociales y de Gobernanza) para un desarrollo urbano sostenible.",
    image: "images/cityvoxlogo.png",
    icon: "images/project-icons/cityvox.png",
    tags: ["Game Development", "City Simulation", "3D", "Three.js", "Vue", "Management"],
    demoUrl: "https://cityvox.vercel.app",
    codeUrl: "https://github.com/420btc/CityVox",
    status: "Finalizado",
    date: new Date("2025-07-30")
  },
  {
    id: 15,
    title: "Wolty Agency",
    description: "Sitio web desarrollado para una agencia digital canadiense especializada en transformar la presencia online de empresas. La plataforma presenta sus servicios de desarrollo web, aplicaciones móviles, SEO, diseño UI/UX y soluciones e-commerce. Incluye secciones de servicios, proceso de trabajo y formularios de contacto con diseño moderno y responsive.",
    image: "images/wolty.png",
    icon: "images/logowolty.png",
    tags: ["Agencia Digital", "Web Development", "Mobile Apps", "SEO", "UI/UX", "E-commerce"],
    demoUrl: "https://woltyx.vercel.app",
    codeUrl: "https://github.com/420btc/wolty",
    status: "Finalizado",
    date: new Date("2025-11-01")
  },
  {
    id: 17,
    title: "BTC VS LLMs",
    description: "Plataforma innovadora donde cinco modelos de inteligencia artificial (Gemini, Grok, OpenAI, Anthropic y Qwen) compiten en trading de Bitcoin las 24 horas del día, los 7 días de la semana. Cada modelo opera con $1000 USD en tiempo real, permitiendo observar sus estrategias, rendimiento y decisiones de inversión en vivo. Una fascinante demostración de cómo diferentes IAs abordan el trading de criptomonedas.",
    image: "images/btcvsgpt.png",
    icon: "images/btcvsgptt.png",
    tags: ["AI", "Trading", "Bitcoin", "Machine Learning", "Real-time", "Competition"],
    demoUrl: "https://btcvsgpt.vercel.app",
    codeUrl: "https://github.com/420btc/tradingbattle",
    status: "Finalizado",
    date: new Date("2025-12-01")
  },
  {
    id: 18,
    title: "Biblia Viva",
    description: "Plataforma interactiva diseñada para redescubrir las escrituras mediante tecnología moderna. Ofrece acceso a múltiples versiones bíblicas y mapas históricos detallados para un estudio inmersivo. Integra inteligencia artificial avanzada para asistir en la investigación y chats comunitarios vibrantes para compartir reflexiones. Una experiencia espiritual completa que une fe, historia y comunidad.",
    image: "images/portadabiblia.jpeg",
    icon: "images/bibliapngg.png",
    tags: ["OpenAI", "React", "Next.js", "Interactive", "Education"],
    demoUrl: "https://vivabiblia.vercel.app",
    codeUrl: "https://github.com/420btc/bibliaviva",
    status: "Finalizado",
    date: new Date("2025-12-16")
  },
  {
    id: 16,
    title: "Nimbus App",
    description: "Juego plataforma multijugador online donde puedes consultar el clima en tiempo real y participar en predicciones meteorológicas con dinero real. Incluye geoposicionamiento para datos locales precisos, pronósticos sobre temperatura, velocidad del viento y otros parámetros climáticos con integración de Stripe para pagos seguros.",
    image: "images/nimbuss.png",
    icon: "images/nimbusslogo.png",
    tags: ["Juego", "Stripe", "Meteorología", "JavaScript", "OpenWeather", "UI/UX"],
    demoUrl: "https://www.nimbusapp.es",
    codeUrl: "#",
    status: "Finalizado",
    featured: true,
    hot: true,
    date: new Date("2025-10-15")
  }
];

// Sort projects by date in ascending order (oldest first)
const sortedProjects = [...projectsData].sort((a, b) => a.date.getTime() - b.date.getTime());

export const projects: ProjectProps[] = sortedProjects as ProjectProps[];

export const featuredProjects = projects.filter(project => project.featured);