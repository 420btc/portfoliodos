import React from 'react';
import { Icon } from '@iconify/react';

interface ProjectBannerProps {
  projectId: string;
  projectTitle: string;
  projectImage: string;
  projectIcon?: string;
  demoUrl?: string;
  codeUrl?: string;
}

export const ProjectBanner: React.FC<ProjectBannerProps> = ({
  projectTitle,
  projectImage,
  projectIcon,
  demoUrl,
  codeUrl
}) => {
  const handleDemoClick = () => {
    if (demoUrl && demoUrl !== 'No disponible') {
      window.open(demoUrl, '_blank');
    }
  };

  const handleCodeClick = () => {
    if (codeUrl && codeUrl !== 'No disponible') {
      window.open(codeUrl, '_blank');
    }
  };

  return (
    <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm">
      <div className="flex items-center gap-3">
        {/* Mini foto del proyecto */}
        <div className="flex-shrink-0">
          <img
            src={projectIcon || projectImage}
            alt={projectTitle}
            className="w-12 h-12 rounded-lg object-cover shadow-sm"
            onError={(e) => {
              // Fallback si la imagen no carga
              const target = e.target as HTMLImageElement;
              target.src = '/images/icono.png';
            }}
          />
        </div>

        {/* Información del proyecto */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
            {projectTitle}
          </h4>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Proyecto relacionado
          </p>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-2">
          {demoUrl && demoUrl !== 'No disponible' && (
            <button
              onClick={handleDemoClick}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 shadow-sm"
              title="Ver demo"
            >
              <Icon icon="mdi:external-link" className="w-3 h-3" />
              Ver
            </button>
          )}
          
          {codeUrl && codeUrl !== 'No disponible' && codeUrl !== '#' && (
            <button
              onClick={handleCodeClick}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors duration-200 shadow-sm"
              title="Ver código"
            >
              <Icon icon="mdi:code-tags" className="w-3 h-3" />
              Código
            </button>
          )}
        </div>
      </div>
    </div>
  );
};