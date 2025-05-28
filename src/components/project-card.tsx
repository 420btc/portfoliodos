import React from "react";
import { Card, CardBody, CardFooter, Chip, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export interface ProjectProps {
  id: number | string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  status?: "Finalizado" | "Trabajando";
  date: Date;
}

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

// Función para formatear la fecha en español
const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    timeZone: 'UTC'
  };
  return new Date(date).toLocaleDateString('es-ES', options);
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const renderChips = () => (
    <>
      {project.featured && (
        <div className="hidden">
          <Chip 
            className="text-xs sm:text-sm whitespace-nowrap" 
            color="primary" 
            variant="flat" 
            size="sm"
          >
            Destacado
          </Chip>
        </div>
      )}
      {project.status && (
        <Chip 
          className="text-xs sm:text-sm whitespace-nowrap"
          color={project.status === "Finalizado" ? "success" : "warning"} 
          variant="flat" 
          size="sm"
        >
          {project.status}
        </Chip>
      )}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardBody className="p-0 overflow-hidden flex-1 flex flex-col">
          <div className="h-56 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">{project.title}</h3>
                  <p className="text-2xl text-default-400 mb-1 font-sans">
                    {(() => {
                      try {
                        return project.demoUrl && project.demoUrl !== '#' 
                          ? new URL(project.demoUrl.includes('://') ? project.demoUrl : `https://${project.demoUrl}`).hostname.replace('www.', '')
                          : 'paginaweb.es';
                      } catch (e) {
                        return 'paginaweb.es';
                      }
                    })()}
                  </p>
                  <div className="text-sm text-default-500">
                    {formatDate(project.date)}
                  </div>
                </div>
                {/* Desktop Chips */}
                <div className="hidden sm:flex flex-wrap justify-end gap-2 flex-shrink-0 ml-2">
                  {renderChips()}
                </div>
              </div>
              {/* Mobile Chips */}
              <div className="sm:hidden flex justify-end mt-3">
                <div className="flex gap-2">
                  {renderChips()}
                </div>
              </div>
            </div>
            
            <p className="text-default-600 mb-4 flex-1">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <Chip 
                  key={i} 
                  size="sm" 
                  variant="flat" 
                  color="default"
                  className="text-xs"
                >
                  {tag}
                </Chip>
              ))}
            </div>
            
            {/* Espacio para el icono del proyecto - Solo se muestra si hay un icono definido */}
            {project.icon && (
              <div className="h-[120px] w-full mb-4 flex items-center justify-center bg-transparent rounded-lg overflow-hidden">
                <img 
                  src={project.icon} 
                  alt={`${project.title} icon`}
                  className="h-full w-full object-contain"
                  style={{ imageRendering: 'auto' as const }}
                />
              </div>
            )}
          </div>
        </CardBody>
        <CardFooter className="bg-default-50 p-4 border-t border-default-200">
          <div className="w-full flex gap-3">
            {project.demoUrl && project.demoUrl !== '#' && (
              <Button 
                as={Link} 
                href={project.demoUrl} 
                target="_blank" 
                color="primary" 
                variant="solid" 
                size="md"
                className="flex-1"
                startContent={<Icon icon="lucide:external-link" width={16} />}
              >
                Ver Proyecto
              </Button>
            )}
            {project.codeUrl && project.codeUrl !== '#' && (
              <Button 
                as={Link} 
                href={project.codeUrl} 
                target="_blank" 
                color={project.demoUrl === '#' ? 'primary' : 'default'}
                variant={project.demoUrl === '#' ? 'solid' : 'flat'}
                size="md"
                className={`flex-1 ${project.demoUrl === '#' ? '' : 'bg-default-100'}`}
                startContent={<Icon icon="lucide:github" width={16} />}
              >
                Ver Código
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};