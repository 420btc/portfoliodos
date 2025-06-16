import React from "react";
import { Card, CardBody, CardFooter, Chip, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useLanguage } from "./language-switcher";
import { getProjectTranslation, formatDateByLanguage } from "../data/translations";

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

// Función para formatear la fecha según el idioma (ahora se usa desde translations.ts)
const formatDate = (date: Date, language: string): string => {
  return formatDateByLanguage(date, language);
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Get current language from context
  const { language } = useLanguage();
  
  // Get translated project data
  const translatedProject = getProjectTranslation(project, language);
  const renderChips = () => (
    <>
      {translatedProject.featured && (
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
      {translatedProject.status && (
        <Chip 
          className="text-xs sm:text-sm whitespace-nowrap"
          color={
            translatedProject.status === "Finalizado"
              ? "success" 
              : "warning"
          } 
          variant="flat" 
          size="sm"
        >
          <div className="flex items-center gap-2">
            <span 
              className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${
                translatedProject.status === "Finalizado"
                  ? "bg-green-500" 
                  : "bg-orange-500"
              }`}
            />
            <span>
              {language === "es" 
                ? translatedProject.status 
                : translatedProject.status === "Finalizado" 
                  ? "Completed" 
                  : translatedProject.status === "Trabajando" 
                    ? "In Progress" 
                    : translatedProject.status
              }
            </span>
          </div>
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
                  <h3 className="text-3xl font-bold text-foreground mb-1">{translatedProject.title}</h3>
                  <p className="text-2xl text-default-400 mb-1 font-sans">
                    {(() => {
                      try {
                        return translatedProject.demoUrl && translatedProject.demoUrl !== '#' 
                          ? new URL(translatedProject.demoUrl.includes('://') ? translatedProject.demoUrl : `https://${translatedProject.demoUrl}`).hostname.replace('www.', '')
                          : language === 'es' ? 'paginaweb.es' : 'website.com';
                      } catch (e) {
                        return language === 'es' ? 'paginaweb.es' : 'website.com';
                      }
                    })()}
                  </p>
                  <Chip 
                    size="sm" 
                    variant="flat" 
                    color="default"
                    className="text-xs bg-default-100 dark:bg-default-800 text-default-600 dark:text-default-400 border border-default-200 dark:border-default-700"
                  >
                    {formatDate(translatedProject.date, language)}
                  </Chip>
                </div>
                {/* Desktop Chips */}
                <div className="hidden sm:flex flex-wrap justify-end gap-2 flex-shrink-0 ml-2">
                  {renderChips()}
                </div>
              </div>
                {/* Mobile Chips */}
              <div className="sm:hidden flex justify-end -mt-5 mb-1">
                <div className="flex gap-2">
                  {renderChips()}
                </div>
              </div>
            </div>
            
            <p className="text-default-600 mb-4 flex-1">{translatedProject.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {translatedProject.tags.map((tag, i) => (
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
            {translatedProject.icon && (
              <div className="h-[120px] w-full mb-4 flex items-center justify-center bg-transparent rounded-lg overflow-hidden">
                <img 
                  src={translatedProject.icon} 
                  alt={`${translatedProject.title} icon`}
                  className="h-full w-full object-contain"
                  style={{ imageRendering: 'auto' as const }}
                />
              </div>
            )}
          </div>
        </CardBody>
        <CardFooter className="bg-default-50 p-4 border-t border-default-200">
          <div className="w-full flex gap-3">
            {translatedProject.demoUrl && translatedProject.demoUrl !== '#' && (
              <Button 
                as={Link} 
                href={translatedProject.demoUrl} 
                target="_blank" 
                color="primary" 
                variant="solid" 
                size="md"
                className="flex-1"
                startContent={<Icon icon="mdi:open-in-new" width={16} />}
              >
                {language === "es" ? "Ver Proyecto" : "View Project"}
              </Button>
            )}
            {translatedProject.codeUrl && translatedProject.codeUrl !== '#' && (
              <Button 
                as={Link} 
                href={translatedProject.codeUrl} 
                target="_blank" 
                color={translatedProject.demoUrl === '#' ? 'primary' : 'default'}
                variant={translatedProject.demoUrl === '#' ? 'solid' : 'flat'}
                size="md"
                className={`flex-1 ${translatedProject.demoUrl === '#' ? '' : 'bg-default-100'}`}
                startContent={<Icon icon="mdi:github" width={16} />}
              >
                {language === "es" ? "Ver Código" : "View Code"}
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};