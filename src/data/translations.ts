import { ProjectProps } from "../components/project-card";

// English translations for project titles and descriptions
export const projectTranslations: Record<string, { title: string; description: string; status?: string; buttonText?: { viewProject: string; viewCode: string } }> = {
  // First 5 projects
  "AgeEvents AI": {
    title: "AgeEvents AI",
    description: "Intelligent web application that allows you to discover what global historical events occurred when you were a specific age. Explore history in a personalized way and discover how the world changed as you grew up. A unique experience that connects your personal life with the great moments of humanity.",
    status: "Completed"
  },
  "Local AI": {
    title: "Local AI",
    description: "Advanced AI chat application with integrated voice assistant that enables natural real-time conversations. Offers the flexibility to connect both local AI models through LMStudio and cloud services. Includes voice recognition, text-to-speech synthesis, and an intuitive interface for managing different agents.",
    status: "Completed"
  },
  "Logs de Psicología": {
    title: "Psychology Logs",
    description: "Interactive game based on the concept of the human mind as a computational system, where you'll explore psychology through a different prism. What if going to a psychologist is like activating debugging logs? Your role will be that of a Mental Systems Engineer.",
    status: "Completed"
  },
  "Facetime Tracker": {
    title: "Facetime Tracker",
    description: "PC web application that uses TensorFlow to detect and record the time you spend in front of your PC. Especially useful for measuring exposure to video calls, virtual classes, or any activity that requires the use of a webcam.",
    status: "Completed"
  },
  "Book Binder PDF": {
    title: "Book Binder PDF",
    description: "Web and mobile application for linearly ordering PDFs with personalized and online content. Supports unlimited PDFs and allows for their ordering. Integration with OpenAI to get information about the books you want in an integrated chat.",
    status: "Completed"
  },
  // Next 5 projects
  "YourDayIn": {
    title: "YourDayIn",
    description: "Web and mobile application with integrated AI Agent to help you plan your day with the 5 places to visit based on your search. Integration with OpenAI to get information about the places.",
    status: "Completed"
  },
  "AI Dreamer": {
    title: "AI Dreamer",
    description: "AI-powered art generation platform that transforms text descriptions into unique visual creations. Explore the intersection of technology and creativity with this intuitive tool that allows you to materialize your imagination through advanced algorithms.",
    status: "Completed"
  },
  "CandleRush 2": {
    title: "CandleRush 2",
    description: "Second version of CandleRush, an improved cryptocurrency trading simulation and gaming platform. Deep analysis in My Profile section. Pair and timeframe selection. Smart automatic operations with integrated resolution.",
    status: "In Progress"
  },
  "Horizon Creative": {
    title: "Horizon Creative",
    description: "Digital marketing and creative agency website showcasing services, portfolio, and client testimonials. Features a modern, responsive design with interactive elements and a streamlined contact system for potential clients.",
    status: "Completed"
  },
  "Carlos Freire FPV": {
    title: "Carlos Freire FPV",
    description: "Professional portfolio showcasing drone photography and FPV (First Person View) flying experiences. A visual journey through aerial perspectives, featuring stunning landscapes, dynamic videos, and technical information about equipment and flying techniques.",
    status: "Completed"
  },
  "MeteoMálaga": {
    title: "MeteoMálaga",
    description: "Weather forecast application for Málaga with real-time data, prediction analysis, and statistics. Predictions with automatic resolution at the time of the forecast.",
    status: "Completed"
  },
  // Final 5 projects
  "CandleRush 1": {
    title: "CandleRush 1",
    description: "A cryptocurrency trading gaming and simulation platform in an early version with real-time data and fictional operations based on Japanese candlesticks and timeframes, with automatic resolution.",
    status: "Completed"
  },
  "Bot Trading IA": {
    title: "AI Trading Bot",
    description: "Automated trading bot with artificial intelligence that operates with real cryptocurrency market prices. Connected to exchange APIs to analyze trends, technical patterns, and make real-time buy/sell decisions. Includes machine learning algorithms to optimize strategies and advanced risk management.",
    status: "In Progress"
  },
  "Fight in Pinillo City": {
    title: "Fight in Pinillo City",
    description: "90s-style retro pixel art fighting game set in Andalusia, Spain, similar to Tekken. A nostalgic experience that combines the classic aesthetics of fighting games with Andalusian culture, offering intense combat and unique characters inspired by the region.",
    status: "In Progress"
  },
  "AI Video Editor": {
    title: "AI Video Editor",
    description: "AI-powered and managed web video editor to request changes from a specialized agent. A revolutionary tool that allows you to edit videos through text commands, automating complex tasks and offering intelligent suggestions to improve content quality.",
    status: "In Progress"
  },
  // New projects translations
  "Salvatore Repair": {
    title: "Salvatore Repair",
    description: "Website for a traditional shoe repair shop located in Torremolinos. A family business that offers specialized footwear repair and restoration services with artisanal techniques and years of experience. Includes information about services, location, and contact.",
    status: "Completed"
  },
  "SVC Moto": {
    title: "SVC Moto",
    description: "Website for a store specialized in electric motorcycle rental located in Málaga center. Complete platform offering sustainable urban mobility services with a modern fleet of electric vehicles. Includes reservation system, discounts, achievements and points, detailed fleet information, and repair and maintenance services.",
    status: "Completed"
  },
  "Free Air Street": {
    title: "Free Air Street",
    description: "Online store specialized in electric scooter, fat bike, motorcycle, car rental, and tours. A complete platform offering urban mobility services and tourist experiences, connecting users with sustainable transportation options and unique city adventures.",
    status: "Completed"
  },
  "Geo Law Empire": {
    title: "Geo Law Empire",
    description: "A geopolitical strategy game where legal decisions and conspiracies shape the destiny of nations. Manage resources, establish alliances, and unravel intrigues while expanding your empire in a dynamic world where every decision has global consequences. Do you have what it takes to rule with cunning in this game of power and strategy?",
    status: "Completed"
  },
  "NotfoundInk": {
    title: "NotfoundInk",
    description: "Web portfolio for NotfoundInk by Ana Maria DCG, a digital art collection, with NFT minting integration on the website, wallet connection, and sales system through contact form.",
    status: "Completed"
  },
  "CityVox": {
    title: "CityVox",
    description: "3D city management game inspired by SimCity with great development potential. A complete urban simulator where you can build, manage, and expand your own metropolis. Includes dynamic economic system, strategic RCI planning (Residential, Commercial, Industrial), and ESG considerations (Environmental, Social, and Governance) for sustainable urban development.",
    status: "Completed"
  },
  "Wolty Agency": {
    title: "Wolty Agency",
    description: "Website developed for a Canadian digital agency specialized in transforming companies' online presence. The platform showcases their web development, mobile applications, SEO, UI/UX design, and e-commerce solutions services. Includes service sections, work process, and contact forms with modern and responsive design.",
    status: "Completed"
  },
  "Nimbus App": {
    title: "Nimbus App",
    description: "Multiplayer online platform game where you can check real-time weather and participate in meteorological predictions with real money. Features geolocation for precise local data, forecasting on temperature, wind speed, and other weather parameters. A unique experience that combines gaming, meteorology, and real-time predictions.",
    status: "Completed"
  },
  "BTC VS LLMs": {
    title: "BTC VS LLMs",
    description: "Innovative platform where four artificial intelligence models (Gemini, Grok, OpenAI, and Anthropic) compete in Bitcoin trading 24 hours a day, 7 days a week. Each model operates with $1000 USD in real-time, allowing you to observe their strategies, performance, and investment decisions live. A fascinating demonstration of how different AIs approach cryptocurrency trading.",
    status: "Completed"
  },
  "Biblia Viva": {
    title: "Biblia Viva",
    description: "Interactive platform designed to rediscover the scriptures through modern technology. Offers access to multiple biblical versions and detailed historical maps for immersive study. Integrates advanced artificial intelligence to assist in research and vibrant community chats to share reflections. A complete spiritual experience that unites faith, history, and community.",
    status: "Completed"
  },
  "ATC Radar AGP": {
    title: "ATC Radar AGP",
    description: "Interactive live ATC (Air Traffic Control) application powered by SDR technology. Includes a real-time interactive map for detailed tracking of flights and offers the unique opportunity to listen to live communications from the Málaga control tower. Furthermore, it features an advanced AI-powered transcription system and comprehensive flight data analysis for an immersive aviation experience.",
    status: "Completed"
  },
  "Eclisolar Web": {
    title: "Eclisolar Web",
    description: "Comprehensive platform designed to plan, study, and get detailed information about the upcoming total solar eclipses visible in Spain. The website offers interactive tools, totality path maps, precise timers, and safe observation guides. Ideal for both astronomy enthusiasts and the general public who want to prepare for these historic astronomical events.",
    status: "Completed"
  },
  "Kinema TV": {
    title: "Kinema TV",
    description: "Interactive platform dedicated to film lovers to explore a vast catalog of classic and contemporary movies. It allows discovering, comparing, and studying cinematic works using advanced artificial intelligence to analyze plots, directors, and historical contexts. The ultimate tool for cinephiles looking to delve into the history of cinema with modern technology and highly accurate data.",
    status: "Completed"
  }
};

// Common UI translations
export const uiTranslations = {
  es: {
    projectsTitle: "Mis Proyectos",
    projectsDescription: "Una colección de mi trabajo abarcando desarrollo web, fotografía, proyectos con drones y emprendimientos creativos.",
    searchPlaceholder: "Buscar proyectos...",
    allProjects: "Todos",
    featuredProjects: "Destacados",
    mostRecent: "Más Recientes",
    oldest: "Más Antiguos",
    noProjectsFound: "No se encontraron proyectos",
    tryAdjusting: "Intenta ajustar tu búsqueda o filtro para encontrar lo que estás buscando.",
    showing: "Mostrando",
    of: "de",
    projects: "proyectos",
    viewProject: "Ver Proyecto",
    viewCode: "Ver Código",
    workingOnTitle: "Proyectos en los que estoy trabajando",
    workingOnDescription: "Estos proyectos están actualmente en desarrollo y evolucionando constantemente."
  },
  en: {
    projectsTitle: "My Projects",
    projectsDescription: "A collection of my work spanning web development, photography, drone projects, and creative ventures.",
    searchPlaceholder: "Search projects...",
    allProjects: "All",
    featuredProjects: "Featured",
    mostRecent: "Most Recent",
    oldest: "Oldest",
    noProjectsFound: "No projects found",
    tryAdjusting: "Try adjusting your search or filter to find what you're looking for.",
    showing: "Showing",
    of: "of",
    projects: "projects",
    viewProject: "View Project",
    viewCode: "View Code",
    workingOnTitle: "Projects I'm currently working on",
    workingOnDescription: "These projects are currently in development and constantly evolving."
  }
};

// Helper function to get project translation
export const getProjectTranslation = (project: ProjectProps, language: string): ProjectProps => {
  if (language === "en" && projectTranslations[project.title]) {
    // Map English status to Spanish status for type compatibility
    let translatedStatus = project.status;
    if (projectTranslations[project.title].status === "Completed") {
      translatedStatus = "Finalizado" as "Finalizado";
    } else if (projectTranslations[project.title].status === "In Progress") {
      translatedStatus = "Trabajando" as "Trabajando";
    }
    
    return {
      ...project,
      title: projectTranslations[project.title].title,
      description: projectTranslations[project.title].description,
      status: translatedStatus
    };
  }
  return project;
};

// Helper function to format date based on language
export const formatDateByLanguage = (date: Date, language: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    timeZone: 'UTC'
  };
  return new Date(date).toLocaleDateString(language === "es" ? 'es-ES' : 'en-US', options);
};
