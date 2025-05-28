import { ProjectProps } from "../components/project-card";

interface ProjectData extends Omit<ProjectProps, 'id'> {
  date: Date;
}

const projectsData: ProjectData[] = [
  {
    title: "GeoQuizzer",
    description: "Aplicación y web juego de preguntas geográficas con preguntas aleatorias y respuesta correcta. Potenciado con IA y amCharts5. Realidad mixta en desarrollo junto con camara virtual en dispositivos móviles.",
    image: "images/geoquizzer.png",
    tags: ["React Native", "Firebase", "UI/UX", "Productividad"],
    demoUrl: "https://geoquizzer.es",
    codeUrl: "https://github.com/420btc/geoquizzer",
    status: "Trabajando",
    date: new Date("2025-06-25")
  },
  {
    title: "Logs de Psicología",
    description: "Juego interactivo basado en el concepto de la mente humana como sistema computacional, donde explorarás la psicología a través de un prisma diferente. ¿Y si acudir al psicólogo es como activar los logs de depuración? Tu rol será el de un Ingeniero de sistemas mentales.",
    image: "images/Depurador.png",
    tags: ["React", "Next.js", "Educación", "TypeScript"],
    demoUrl: "https://v0-juego-interactivo-psicologia.vercel.app/",
    codeUrl: "https://github.com/420btc/Psicolog-acomoLogsDepuracion",
    status: "Trabajando",
    date: new Date("2025-06-15")
  },
  {
    title: "Facetime Tracker",
    description: "Aplicación web PC que utiliza TensorFlow para detectar y registrar el tiempo que pasas frente a tu PC. Especialmente útil para medir la exposición a videollamadas, clases virtuales o cualquier actividad que requiera el uso de cámara web.",
    image: "images/facetime.png",
    tags: ["Next.js", "TypeScript", "TensorFlow", "OpenCV"],
    demoUrl: "https://facedetection-wine.vercel.app/",
    codeUrl: "https://github.com/420btc/FacetimeTracker",
    status: "Finalizado",
    date: new Date("2025-06-01")
  },
  {
    title: "Book Binder PDF",
    description: "Aplicación web para unir y organizar archivos PDF de manera sencilla.",
    image: "images/bookcreator.png",
    tags: ["Next.js", "TypeScript", "PDF", "Utilidades"],
    demoUrl: "https://bookcreatorr.netlify.app/",
    codeUrl: "https://github.com/usuario/recipes",
    status: "Finalizado",
    date: new Date("2025-05-23")
  },
  {
    title: "YourDayIn",
    description: "Aplicación web para planificar tu día con sugerencias personalizadas de actividades.",
    image: "images/yourdayin.png",
    tags: ["Next.js", "TypeScript", "JavaScript", "OpenAI"],
    demoUrl: "https://tudiaen.vercel.app/game",
    codeUrl: "https://github.com/420btc/Tud-aen",
    status: "Finalizado",
    date: new Date("2025-05-18")
  },
  {
    title: "AI Dreamer",
    description: "Plataforma de generación de imágenes con inteligencia artificial para artistas digitales.",
    image: "images/aidreamer.png",
    tags: ["Next.js", "TypeScript", "OpenAI", "Machine Learning"],
    demoUrl: "https://dreamsfreud.vercel.app/",
    codeUrl: "https://github.com/420btc/DreamFreud",
    status: "Finalizado",
    featured: true,
    date: new Date("2025-05-12")
  },
  {
    title: "NotfoundInk",
    description: "Plataforma de arte digital y tatuajes personalizados con galería de artistas.",
    image: "images/notfound.png",
    tags: ["Next.js", "TypeScript", "Arte", "Diseño"],
    demoUrl: "https://notfoundink.art",
    codeUrl: "https://github.com/420btc/notfoundink",
    status: "Finalizado",
    date: new Date("2025-05-05")
  },
  {
    title: "CandleRush 2",
    description: "Segunda versión mejorada de la plataforma de trading con nuevas funcionalidades y mejor rendimiento.",
    image: "images/rush2.png",
    tags: ["Next.js", "TypeScript", "Trading", "Blockchain"],
    demoUrl: "https://candlerush.es",
    codeUrl: "https://github.com/420btc/CandleRush2",
    status: "Finalizado",
    featured: true,
    date: new Date("2025-04-28")
  },
  {
    title: "Horizon Creative",
    description: "Agencia creativa especializada en diseño web y desarrollo de marcas innovadoras.",
    image: "images/Horizonf.png",
    tags: ["Next.js", "TypeScript", "Diseño", "Branding"],
    demoUrl: "https://horizoncreative.es",
    codeUrl: "https://github.com/420btc/horizoncreative",
    status: "Finalizado",
    featured: true,
    date: new Date("2025-04-10")
  },
  {
    title: "Carlos Freire FPV",
    description: "Portafolio personal y galería de trabajos de fotografía y vuelos FPV.",
    image: "images/freirefpv.png",
    tags: ["Web", "Fotografía", "Portfolio", "Diseño"],
    demoUrl: "https://carlosfpv.es",
    codeUrl: "https://github.com/420btc/freirefpv",
    status: "Finalizado",
    date: new Date("2025-03-20")
  },
  {
    title: "MeteoMálaga",
    description: "Aplicación meteorológica específica para la provincia de Málaga con pronósticos detallados y alertas en tiempo real.",
    image: "images/metemalaga.png",
    tags: ["React", "API", "Meteorología", "UI/UX"],
    demoUrl: "https://meteomalaga.fun",
    codeUrl: "https://github.com/420btc/meteomalaga",
    status: "Finalizado",
    date: new Date("2025-03-12")
  },
  {
    title: "CandleRush 1",
    description: "Plataforma de trading de criptomonedas con simulación en tiempo real y herramientas de análisis avanzadas.",
    image: "images/candlerush1.png",
    tags: ["React", "Node.js", "Trading", "Blockchain"],
    demoUrl: "https://btcer.fun",
    codeUrl: "https://github.com/420btc/cndle",
    status: "Finalizado",
    date: new Date("2025-03-03")
  }
];

// Sort projects by date in ascending order (oldest first)
const sortedProjects = [...projectsData].sort((a, b) => a.date.getTime() - b.date.getTime());

export const projects: ProjectProps[] = sortedProjects.map((project, index) => ({
  ...project,
  id: index + 1
}));

export const featuredProjects = projects.filter(project => project.featured);