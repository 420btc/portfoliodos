import { ProjectData } from "./projects";

const threeDProjects: ProjectData[] = [
  {
    id: 'fight-pinillo-3d',
    title: "Fight in Pinillo City",
    description: "Juego retro pixel art basado en los años 90 ubicado en España Andalucía estilo Tekken de peleas. Una experiencia nostálgica que combina la estética clásica de los juegos de lucha con la cultura andaluza, ofreciendo combates intensos y personajes únicos inspirados en la región.",
    image: "images/fight.png",
    icon: "images/project-icons/logofight.png",
    tags: ["Game Development", "Pixel Art", "Fighting Game", "Retro", "Unity", "2D / 3D"],
    demoUrl: "https://pinillo-city-fight.vercel.app/",
    codeUrl: "https://github.com/420btc/PinilloCityFight",
    status: "Trabajando",
    date: new Date("2026-01-01"),
    blocked: true
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