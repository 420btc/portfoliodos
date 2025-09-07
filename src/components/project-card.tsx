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
  blocked?: boolean;
  hot?: boolean;
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
  const translatedProject: ProjectProps = getProjectTranslation(project, language);
  
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
      <Card className={`h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative ${translatedProject.blocked && translatedProject.id === 'scv-moto' ? 'opacity-50 blur-sm' : ''}`}>
        {/* HOT Badge */}
        {translatedProject.hot && (
          <div className="absolute top-2 right-2 z-10">
            <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg transform rotate-12 animate-pulse">
              HOT!
            </div>
          </div>
        )}
        <CardBody className="p-0 overflow-hidden flex-1 flex flex-col">
          <div className={`h-56 w-full overflow-hidden ${
            project.title === 'CandleRush 1' ? 'bg-black' : ''
          }`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              style={{
                objectPosition: project.title === 'CandleRush 2' ? 'center -10px' : 
                               project.title === 'CandleRush 1' ? 'center 10px' : 'center center'
              }}
            />
          </div>
          <div className="p-5 flex-1 flex flex-col h-full">
            {/* Fila 1: Título */}
            <div className="mb-3">
              <h3 className="text-3xl font-bold text-foreground mb-1">{translatedProject.title}</h3>
              <p className="text-2xl text-default-400 mb-2 font-sans">
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
              {/* Chips de estado - en línea separada para mejor visibilidad en móvil */}
              <div className="flex flex-wrap gap-2 mt-2">
                {renderChips()}
              </div>
            </div>

            {/* Fila 2: Fecha */}
            <div className="mb-3">
              <Chip 
                size="sm" 
                variant="flat" 
                color="default"
                className="text-xs bg-default-100 dark:bg-default-800 text-default-600 dark:text-default-400 border border-default-200 dark:border-default-700"
              >
                {formatDate(translatedProject.date, language)}
              </Chip>
            </div>
            
            {/* Fila 3: Descripción en badge */}
            <div className="mb-3">
              <div className="bg-gradient-to-r from-blue-100 to-white dark:from-blue-900/30 dark:to-slate-800/30 border border-blue-200 dark:border-blue-700 rounded-lg p-3">
                <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">{translatedProject.description}</p>
              </div>
            </div>
            
            {/* Fila 4: Tags de tecnología */}
            <div className="flex flex-wrap gap-2 mb-3">
              {translatedProject.tags.map((tag, i) => (
                <Chip 
                  key={i} 
                  size="sm" 
                  variant="flat" 
                  color="primary"
                  className="text-xs"
                >
                  {tag}
                </Chip>
              ))}
            </div>
            
            {/* Fila 5: Icono del proyecto - Espacio reservado para mantener consistencia */}
            <div className="mt-auto h-[100px] w-full flex items-center justify-center">
              {translatedProject.icon && (
                <img 
                  src={translatedProject.icon} 
                  alt={`${translatedProject.title} icon`}
                  className={`object-contain ${
                    translatedProject.title === 'Nimbus App' ? 'h-20 w20' : 'h-24 w-24'
                  }`}
                  style={{ imageRendering: 'auto' as const }}
                />
              )}
            </div>
          </div>
        </CardBody>
        <CardFooter className="bg-default-50 p-4 border-t border-default-200">
          <div className="w-full flex gap-3">
            {translatedProject.demoUrl && translatedProject.demoUrl !== '#' && (
              <Button 
                as={translatedProject.blocked ? undefined : Link}
                href={translatedProject.blocked ? undefined : translatedProject.demoUrl} 
                target={translatedProject.blocked ? undefined : "_blank"}
                color="primary" 
                variant="solid" 
                size="md"
                className={`flex-1 ${translatedProject.blocked ? 'opacity-50 blur-sm cursor-not-allowed' : ''}`}
                startContent={<Icon icon="mdi:open-in-new" width={16} />}
                disabled={translatedProject.blocked}
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