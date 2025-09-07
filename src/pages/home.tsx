import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { HeroSection } from "../components/hero-section";
import { ProjectCard } from "../components/project-card";
import { featuredProjects, projects } from "../data/projects";
import { WorkTogether } from "../components/work-together";
import { useLanguage } from "../components/language-switcher";
import { NewsletterSection } from "../components/newsletter-section";
export const Home: React.FC = () => {
  const { language } = useLanguage();
  
  // Filter store projects
  const storeProjects = projects.filter(project => 
    project.id === 'free-air-street' || project.id === 'scv-moto' || project.id === 'salvatore-repair'
  );
  
  return (
    <div>
      <HeroSection />
      
      {/* Featured Projects */}
      <section className="pt-1 pb-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {language === "es" ? "Proyectos Destacados" : "Featured Projects"}
              </h2>
              <p className="text-default-500 max-w-3xl">
                {language === "es" ? 
                  "Una selección de mis mejores trabajos en desarrollo web, fotografía y proyectos creativos." :
                  "A selection of my best work in web development, photography, and creative projects."
                }
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
              {language === "es" ? "Ver Todos los Proyectos" : "View All Projects"}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(() => {
              const orderedProjects = [
                featuredProjects.find(p => p.title === 'Horizon Creative'),
                featuredProjects.find(p => p.title === 'Nimbus App'),
                featuredProjects.find(p => p.title === 'Free Air Street'),
                ...featuredProjects.filter(p => !['Horizon Creative', 'Nimbus App', 'Free Air Street'].includes(p.title))
              ].filter((project): project is NonNullable<typeof project> => project !== undefined);
              
              return orderedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ));
            })()} 
          </div>
        </div>
      </section>
      
      {/* Store Projects Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {language === "es" ? "Tiendas" : "Stores"}
              </h2>
              <p className="text-default-500 max-w-3xl">
                {language === "es" ? 
                  "Proyectos de comercio electrónico, plataformas de alquiler y negocios locales tradicionales." :
                  "E-commerce projects, rental platforms and traditional local businesses."
                }
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {storeProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">
                {language === "es" ? "Sobre Mí" : "About Me"}
              </h2>
              <p className="text-default-600 mb-4">
                {language === "es" ? 
                  "Soy Carlos Freire, un desarrollador full-stack apasionado por crear proyectos innovadores y funcionales. Con experiencia en tecnologías modernas como React, Next.js, Node.js y bases de datos tanto SQL como NoSQL." :
                  "I'm Carlos Freire, a full-stack developer passionate about creating innovative and functional projects. With experience in modern technologies like React, Next.js, Node.js and both SQL and NoSQL databases."
                }
              </p>
              <p className="text-default-600 mb-6">
                {language === "es" ? 
                  "Mi enfoque se centra en los LLMs como herramienta para resolver problemas complejos y la creación de mis propios proyectos acelerandose con los ultimos modelos y editores de código." :
                  "My focus centers on LLMs as a tool for solving complex problems and creating my own projects, accelerating development with the latest models and code editors."
                }
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="font-semibold mb-2">
                    {language === "es" ? "Habilidades Técnicas" : "Technical Skills"}
                  </h3>
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
                  <h3 className="font-semibold mb-2">
                    {language === "es" ? "Habilidades Creativas" : "Creative Skills"}
                  </h3>
                  <ul className="space-y-1 text-default-500">
                    <li className="flex items-center gap-2">
                      <Icon icon="lucide:check" className="text-secondary" width={16} />
                      <span>{language === "es" ? "Fotografía" : "Photography"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="lucide:check" className="text-secondary" width={16} />
                      <span>{language === "es" ? "Pilotaje de Drones" : "Drone Piloting"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="lucide:check" className="text-secondary" width={16} />
                      <span>{language === "es" ? "Escritura Creativa" : "Creative Writing"}</span>
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
                {language === "es" ? "Más Sobre Mí" : "More About Me"}
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
                      <span className="text-default-500 text-sm">
                        {language === "es" ? "Años de Experiencia" : "Years Experience"}
                      </span>
                    </div>
                    <Divider orientation="vertical" />
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold">15+</span>
                      <span className="text-default-500 text-sm">
                        {language === "es" ? "Proyectos Realizados" : "Projects Completed"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSection />
      
      {/* Work Together CTA */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-3xl mx-auto">
          <WorkTogether />
        </div>
      </section>
    </div>
  );
};