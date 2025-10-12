import { projects } from '../data/projects';

/**
 * Generates a context object with project information for the AI chat
 * This allows the AI to access project details dynamically without requiring
 * a large system prompt
 */
export function generateProjectContext() {
  // Create a simplified version of projects data for the AI
  const projectsContext = projects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    technologies: project.tags.join(', '),
    status: project.status || 'No especificado',
    demoUrl: project.demoUrl || 'No disponible',
    codeUrl: project.codeUrl || 'No disponible',
    date: project.date.toISOString().split('T')[0],
    image: project.image,
    icon: project.icon
  }));

  // Create a formatted string with project information
  const projectsContextString = projectsContext.map((project: any) => {
    return `
Proyecto: ${project.title}
ID: ${project.id}
Descripción: ${project.description}
Tecnologías: ${project.technologies}
Estado: ${project.status}
Demo URL: ${project.demoUrl}
Código URL: ${project.codeUrl}
Fecha: ${project.date}
Imagen: ${project.image}
Icono: ${project.icon}
`;
  }).join('\n---\n');

  return `
INFORMACIÓN DE PROYECTOS DEL PORTFOLIO:
${projectsContextString}

Utiliza esta información para responder preguntas sobre los proyectos. Si te preguntan sobre un proyecto específico, busca su información en este contexto.

IMPORTANTE: Cuando respondas sobre un proyecto específico, incluye al final de tu respuesta el siguiente formato JSON para mostrar el banner del proyecto:
{"showProjectBanner": true, "projectId": "ID_DEL_PROYECTO", "projectTitle": "TÍTULO_DEL_PROYECTO", "projectImage": "RUTA_DE_LA_IMAGEN", "projectIcon": "RUTA_DEL_ICONO", "demoUrl": "URL_DE_DEMO"}
`;
}
