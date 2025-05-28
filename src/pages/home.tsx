import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { HeroSection } from "../components/hero-section";
import { ProjectCard } from "../components/project-card";
import { featuredProjects } from "../data/projects";
import { WorkTogether } from "../components/work-together";

export const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      
      {/* Featured Projects */}
      <section className="pt-1 pb-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Proyectos Destacados</h2>
              <p className="text-default-500 max-w-3xl">
                Una selección de mis mejores trabajos en desarrollo web, fotografía y proyectos creativos.
              </p>
            </div>
            <Button
              as={RouterLink}
              to="/projects"
              color="primary"
              variant="solid"
              size="lg"
              endContent={<Icon icon="lucide:arrow-right" />}
              className="mt-4 sm:mt-0 px-8 w-full sm:w-auto text-center"
            >
              Ver Todos los Proyectos
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 px-6 bg-content1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">Sobre Mí</h2>
              <p className="text-default-600 mb-4">
                Soy Carlos Freire, un desarrollador full-stack apasionado por crear proyectos innovadores y funcionales. 
                Con experiencia en tecnologías modernas como React, Next.js, Node.js y bases de datos tanto SQL como NoSQL.
              </p>
              <p className="text-default-600 mb-6">
                Mi enfoque se centra en los LLMs como herramienta para resolver problemas complejos y la creación de mis 
                propios proyectos acelerandose con los ultimos modelos y editores de código.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="font-semibold mb-2">Habilidades Técnicas</h3>
                  <ul className="space-y-1 text-default-500">
                    <li className="flex items-center gap-2">
                      <Icon icon="lucide:check" className="text-primary" width={16} />
                      <span>React & Next.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="lucide:check" className="text-primary" width={16} />
                      <span>JavaScript & TypeScript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="lucide:check" className="text-primary" width={16} />
                      <span>Node.js & Express</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="lucide:check" className="text-primary" width={16} />
                      <span>Python & Vue.js</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Habilidades Creativas</h3>
                  <ul className="space-y-1 text-default-500">
                    <li className="flex items-center gap-2">
                      <Icon icon="lucide:check" className="text-secondary" width={16} />
                      <span>Fotografía</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="lucide:check" className="text-secondary" width={16} />
                      <span>Pilotaje de Drones</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="lucide:check" className="text-secondary" width={16} />
                      <span>Escritura Creativa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="lucide:check" className="text-secondary" width={16} />
                      <span>LLMs & AI</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button
                as={RouterLink}
                to="/about"
                color="primary"
                variant="flat"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Más Sobre Mí
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img 
                  src="images/yop2.jpeg" 
                  alt="Developer portrait" 
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold">2+</span>
                      <span className="text-default-500 text-sm">Años de Experiencia</span>
                    </div>
                    <Divider orientation="vertical" />
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold">15+</span>
                      <span className="text-default-500 text-sm">Proyectos Realizados</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Novel Preview */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="images/portada1.png" 
                alt="Novel cover" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-2">Mi Novela</h2>
              <p className="text-default-500 mb-6">
                "Bajo la normalidad" — Una novela de misterio y aventuras doonde desucubrirás quienes son Kurt y Bob.
              </p>
              
              <Card className="mb-8">
                <CardBody>
                  <p className="italic text-default-600">
                    "El descubrimiento de un secreto profundo y antiguo bajo la superficie de un pueblo aparentemente normal. Este secreto, ligado a estructuras ocultas y fenómenos inexplicables, desafía la comprensión de los jóvenes protagonistas y los arrastra a una peligrosa investigación que pone a prueba su amistad, enfrentándolos a las acciones encubiertas de aquellos en quienes confiaban y revelando una historia oculta que envuelve a todo su pueblo."
                  </p>
                </CardBody>
              </Card>
              
              <Button
                as={RouterLink}
                to="/novel"
                color="primary"
                variant="flat"
                endContent={<Icon icon="lucide:book-open" />}
              >
                Leer Más
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Work Together CTA */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-3xl mx-auto">
          <WorkTogether />
        </div>
      </section>
    </div>
  );
};