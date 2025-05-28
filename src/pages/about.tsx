import React from "react";
import { Card, CardBody, Divider, Progress, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useLanguage } from "../components/language-switcher";

export const About: React.FC = () => {
  const { language } = useLanguage();
  
  const skills = [
    { name: "JavaScript/TypeScript", level: 75 },
    { name: "React & Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 65 },
    { name: "Vue.js", level: 75 },
    { name: language === "es" ? "Fotografía" : "Photography", level: 95 },
    { name: language === "es" ? "Pilotaje de Drones" : "Drone Piloting", level: 80 },
    { name: "LLMs & AI", level: 75 }
  ];
  
  const experiences = [
    {
      title: language === "es" ? "Desarrollador Full Stack Autónomo" : "Full Stack Developer",
      company: "TechVision Inc.",
      period: "2022 - Present",
      description: language === "es" ? 
        "Desarrollador autónomo con experiencia en desarrollo de aplicaciones web y móviles." :
        "Lead developer for enterprise web applications, managing a team of 5 developers and implementing modern React architectures."
    },
    {
      title: language === "es" ? "Desarrollador Frontend" : "Frontend Developer",
      company: "Creative Solutions",
      period: "2020 - 2022",
      description: language === "es" ? 
        "Desarrollo de aplicaciones web responsivas y apps móviles usando React y React Native para clientes de diversas industrias." :
        "Developed responsive web applications and mobile apps using React and React Native for clients across various industries."
    },
    {
      title: language === "es" ? "Desarrollador Web" : "Web Developer",
      company: "Freire Labs",
      period: "2019 - 2020",
      description: language === "es" ? 
        "Creación de sitios web personalizados y soluciones de comercio electrónico para pequeñas y medianas empresas usando JavaScript y PHP." :
        "Created custom websites and e-commerce solutions for small to medium businesses using JavaScript and PHP."
    }
  ];
  
  const education = [
    {
      degree: language === "es" ? "Licenciatura en Ingeniería Informática" : "Bachelor of Science in Computer Science",
      institution: "Universidad de Málaga",
      year: "2015",
      description: language === "es" ? 
        "Licenciatura en Ingeniería Informática." :
        "Bachelor of Science in Computer Science."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Sobre Mí</h1>
          <p className="text-default-600 max-w-2xl mx-auto">
            {language === "es" ? 
              "Desarrollador full-stack, fotógrafo, entusiasta de drones, y autor con pasión por crear experiencias digitales innovadoras." :
              "Full stack developer, photographer, drone enthusiast, and author with a passion for creating beautiful digital experiences."
            }
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-24">
              <CardBody className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img 
                    src="images/iconoweb.png" 
                    alt="Profile" 
                    className="rounded-full object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2">
                    <Icon icon="lucide:code" width={16} height={16} />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-1">Carlos Freire</h2>
                <p className="text-default-500 mb-4">Full Stack Developer</p>
                
                <div className="flex justify-center gap-4 mb-6">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-default-500 hover:text-primary transition-colors">
                    <Icon icon="lucide:github" width={20} height={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-default-500 hover:text-primary transition-colors">
                    <Icon icon="lucide:linkedin" width={20} height={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-default-500 hover:text-primary transition-colors">
                    <Icon icon="lucide:twitter" width={20} height={20} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-default-500 hover:text-primary transition-colors">
                    <Icon icon="lucide:instagram" width={20} height={20} />
                  </a>
                </div>
                
                <Divider className="my-4" />
                
                <div className="text-left space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:mail" className="text-default-500" width={16} />
                    <span>carlosfreireph@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:map-pin" className="text-default-500" width={16} />
                    <span>Málaga, España</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:briefcase" className="text-default-500" width={16} />
                    <span>{language === "es" ? "2+ Años de Experiencia" : "8+ Years Experience"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:globe" className="text-default-500" width={16} />
                    <span>www.carlospastorfreire.com</span>
                  </div>
                </div>
                
                <Divider className="my-4" />
                
                <div className="text-left">
                  <h3 className="font-semibold mb-2">{language === "es" ? "Intereses" : "Interests"}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Chip size="sm" variant="flat">{language === "es" ? "Fotografía" : "Photography"}</Chip>
                    <Chip size="sm" variant="flat">{language === "es" ? "Drones" : "Drone Flying"}</Chip>
                    <Chip size="sm" variant="flat">{language === "es" ? "Escritura" : "Writing"}</Chip>
                    <Chip size="sm" variant="flat">{language === "es" ? "Senderismo" : "Hiking"}</Chip>
                    <Chip size="sm" variant="flat">{language === "es" ? "Tecnología" : "Technology"}</Chip>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <Card>
              <CardBody>
                <h2 className="text-2xl font-semibold mb-4">Sobre Mí</h2>
                <p className="text-default-600 mb-4">
                  Soy Carlos Freire, un desarrollador full-stack apasionado por crear proyectos innovadores y funcionales. 
                  Con experiencia en tecnologías modernas como React, Next.js, Node.js y bases de datos tanto SQL como NoSQL.
                </p>
                <p className="text-default-600 mb-4">
                  Mi enfoque se centra en los LLMs como herramienta para resolver problemas complejos y la creación de mis 
                  propios proyectos acelerandose con los ultimos modelos y editores de código.
                </p>
                <p className="text-default-600">
                  Cuando no estoy programando, disfruto aprendiendo nuevas tecnologías, contribuyendo a proyectos de código 
                  abierto y compartiendo conocimientos con la comunidad de desarrolladores.
                </p>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody>
                <h2 className="text-2xl font-semibold mb-6">Skills</h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        color={index < 5 ? "primary" : "secondary"}
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody>
                <h2 className="text-2xl font-semibold mb-6">Experience</h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-6 pb-6 border-l border-default-200 last:pb-0">
                      <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary"></div>
                      <h3 className="font-semibold">{exp.title}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-default-500">{exp.company}</span>
                        <span className="text-xs bg-default-100 px-2 py-0.5 rounded-full">{exp.period}</span>
                      </div>
                      <p className="text-default-600">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody>
                <h2 className="text-2xl font-semibold mb-6">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 pb-6 border-l border-default-200 last:pb-0">
                      <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-secondary"></div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-default-500">{edu.institution}</span>
                        <span className="text-xs bg-default-100 px-2 py-0.5 rounded-full">{edu.year}</span>
                      </div>
                      <p className="text-default-600">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody>
                <h2 className="text-2xl font-semibold mb-4">Creative Pursuits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div>
                    <img 
                      src="https://img.heroui.chat/image/landscape?w=400&h=300&u=50" 
                      alt="Photography" 
                      className="rounded-lg object-cover w-full h-40 mb-2"
                    />
                    <h3 className="font-semibold">Photography</h3>
                    <p className="text-default-500 text-sm">Landscape and urban photography</p>
                  </div>
                  <div>
                    <img 
                      src="https://img.heroui.chat/image/landscape?w=400&h=300&u=51" 
                      alt="Drone Photography" 
                      className="rounded-lg object-cover w-full h-40 mb-2"
                    />
                    <h3 className="font-semibold">Drone Videography</h3>
                    <p className="text-default-500 text-sm">Aerial perspectives and cinematography</p>
                  </div>
                  <div>
                    <img 
                      src="https://img.heroui.chat/image/book?w=400&h=300&u=52" 
                      alt="Writing" 
                      className="rounded-lg object-cover w-full h-40 mb-2"
                    />
                    <h3 className="font-semibold">Creative Writing</h3>
                    <p className="text-default-500 text-sm">Science fiction and tech essays</p>
                  </div>
                </div>
                <p className="text-default-600">
                  These creative pursuits inform my development work by enhancing my visual thinking, attention to detail, and ability to craft compelling narratives around user experiences.
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};