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
}

// Mapear los proyectos a ProjectData con IDs únicos
const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Local AI",
    description: "Aplicación de chat AI avanzada con asistente de voz integrado que permite conversaciones naturales en tiempo real. Ofrece la flexibilidad de conectar tanto modelos de IA locales a través de LMStudio como servicios en la nube. Incluye funcionalidades de reconocimiento de voz, síntesis de texto a voz, y una interfaz intuitiva para gestionar diferentes agentes.",
    image: "images/localllm.png",
    icon: "images/fondo.png",
    tags: ["AI", "Chat", "Voice Assistant", "LMStudio", "OpenAI"],
    demoUrl: "https://voicechat-ebon.vercel.app/",
    codeUrl: "https://github.com/420btc/voicechat",
    status: "Trabajando",
    date: new Date("2025-06-30")
  },
  {
    id: 2,
    title: "Logs de Psicología",
    description: "Juego interactivo basado en el concepto de la mente humana como sistema computacional, donde explorarás la psicología a través de un prisma diferente. ¿Y si acudir al psicólogo es como activar los logs de depuración? Tu rol será el de un Ingeniero de sistemas mentales.",
    image: "images/Depurador.png",
    icon: "images/project-icons/depuracion.png",
    tags: ["React", "Next.js", "Educación", "TypeScript"],
    demoUrl: "https://v0-juego-interactivo-psicologia.vercel.app/",
    codeUrl: "https://github.com/420btc/Psicolog-acomoLogsDepuracion",
    status: "Trabajando",
    date: new Date("2025-06-15")
  },
  {
    id: 3,
    title: "Facetime Tracker",
    description: "Aplicación web PC que utiliza TensorFlow para detectar y registrar el tiempo que pasas frente a tu PC. Especialmente útil para medir la exposición a videollamadas, clases virtuales o cualquier actividad que requiera el uso de cámara web.",
    image: "images/facetime.png",
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
    image: "images/bookcreator.png",
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
    image: "images/yourdayin.png",
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
    featured: true,
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
    description: "Segunda versión de CandleRush, una plataforma mejorada de simulación y juego de trading de criptomonedas. Análisis profundo en sección Mi Perfil. Selección de par y temporalidad. Apuestas automáticas inteligentes con resolución integrada.",
    image: "images/rush2.png",
    icon: "images/project-icons/candleicono.png",
    tags: ["Next.js", "TypeScript", "Trading", "Blockchain"],
    demoUrl: "https://candlerush.es",
    codeUrl: "https://github.com/420btc/CandleRush2",
    status: "Finalizado",
    featured: true,
    date: new Date("2025-04-28")
  },
  {
    id: 9,
    title: "Horizon Creative",
    description: "Horizon Creative es una página web de portafolio profesional para agencias creativas, freelancers y estudios de diseño. Permite mostrar proyectos, servicios, equipo y datos de contacto, incluido mapa de ubicación.",
    image: "images/Horizonf.png",
    icon: "images/project-icons/logobueno.png",
    tags: ["Next.js", "TypeScript", "Diseño", "Branding"],
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
    image: "images/freirefpv.png",
    icon: "images/project-icons/iconofpv.png",
    tags: ["Web", "Fotografía", "Portfolio", "Diseño"],
    demoUrl: "https://carlosfpv.es",
    codeUrl: "https://github.com/420btc/freirefpv",
    status: "Finalizado",
    date: new Date("2025-03-20")
  },
  {
    id: 11,
    title: "MeteoMálaga",
    description: "Aplicación de apuestas sobre pronósticos meteorológicos para Málaga con datos en tiempo real, análisis de predicciones y estadísticas. Apuestas con resolución automática en el momento del pronóstico.",
    image: "images/metemalaga.png",
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
    description: "Una plataforma de juego y simulación de trading de criptomonedas en una versión temprana con datos en tiempo real y apuestas ficticias basadas en las velas japonesas y las temporalidades, con resolución automática.",
    image: "images/candlerush1.png",
    icon: "images/project-icons/iconocandlerush.png",
    tags: ["React", "Node.js", "Trading", "Blockchain"],
    demoUrl: "https://btcer.fun",
    codeUrl: "https://github.com/420btc/cndle",
    status: "Finalizado",
    date: new Date("2025-03-03")
  }
];

// Sort projects by date in ascending order (oldest first)
const sortedProjects = [...projectsData].sort((a, b) => a.date.getTime() - b.date.getTime());

export const projects: ProjectProps[] = sortedProjects as ProjectProps[];

export const featuredProjects = projects.filter(project => project.featured);