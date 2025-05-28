import { ProjectData } from "./projects";

const photographyProjects: ProjectData[] = [
  {
    title: "Tienda Fotográfica",
    description: "Explora mi colección de fotografías en Redbubble. Impresiones de alta calidad en una variedad de productos.",
    image: "images/Tienda.png",
    tags: ["Fotografía", "Tienda", "Redbubble"],
    demoUrl: "https://www.redbubble.com/es/people/carlosfreire/shop",
    status: "Finalizado",
    date: new Date("2019-01-05")
  },
  {
    title: "Instagram",
    description: "Sígueme en Instagram para ver mis últimas fotografías y proyectos creativos.",
    image: "images/instagram.png",
    tags: ["Fotografía", "Redes Sociales", "Instagram"],
    demoUrl: "https://www.instagram.com/carlosfreire1/",
    status: "Trabajando",
    date: new Date("2010-10-10")
  }
];

export default photographyProjects;
