import { ProjectData } from "./projects";

const threeDProjects: ProjectData[] = [
  {
    id: 'cityvox-3d',
    title: "CityVox",
    description: "Juego de gestión de ciudades 3D inspirado en SimCity con gran potencial de desarrollo. Un simulador urbano completo donde puedes construir, gestionar y expandir tu propia metrópolis. Incluye sistema económico dinámico, planificación estratégica RCI (Residencial, Comercial, Industrial) y consideraciones ESG (Ambientales, Sociales y de Gobernanza) para un desarrollo urbano sostenible.",
    image: "images/cityvoxlogo.png",
    icon: "images/project-icons/cityvox.png",
    tags: ["Game Development", "City Simulation", "3D", "Three.js", "Vue", "2D / 3D"],
    demoUrl: "https://cityvox.vercel.app",
    codeUrl: "https://github.com/420btc/CityVox",
    status: "Trabajando",
    date: new Date("2026-01-01")
  },
  {
    id: 'carlos-freire-3d',
    title: "Carlos Freire 3D",
    description: "Portfolio especializado en fotogrametría 3D y modelado tridimensional. Explora mis trabajos de captura y reconstrucción 3D de objetos, espacios y escenarios utilizando técnicas avanzadas de fotogrametría y software especializado.",
    image: "images/cpf3d.png",
    icon: "images/icono3dcpf.png",
    tags: ["Fotogrametría", "Redes Sociales", "Instagram", "Adobe", "Substance", "2D / 3D"],
    demoUrl: "https://instagram.com/cpf3d",
    status: "Trabajando",
    date: new Date("2021-11-04")
  }
];

export default threeDProjects;