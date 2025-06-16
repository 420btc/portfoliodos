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
    description: "Advanced cryptocurrency trading simulation platform with real-time data, Japanese candlestick analysis, and multiple timeframes. Features automatic resolution of simulated trades, detailed analytics, and a comprehensive learning section for trading strategies.",
    status: "Completed"
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
    description: "Weather forecast betting application for Málaga with real-time data, prediction analysis, and statistics. Bets with automatic resolution at the time of the forecast.",
    status: "Completed"
  },
  // Final 5 projects
  "CandleRush 1": {
    title: "CandleRush 1",
    description: "An early version cryptocurrency trading platform and simulation game with real-time data and fictional bets based on Japanese candlesticks and timeframes, with automatic resolution.",
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
    viewCode: "Ver Código"
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
    viewCode: "View Code"
  }
};

// Helper function to get project translation
export const getProjectTranslation = (project: ProjectProps, language: string) => {
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
