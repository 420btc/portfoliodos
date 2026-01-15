import { useState, useEffect } from "react";
import { ContributionDay } from "@/lib/github";

const getLevelColor = (level: number): string => {
  // Tailwind classes para diferentes niveles de contribución
  // Ajustado para coincidir con el tema del sitio
  switch (level) {
    case 0:
      return "bg-gray-100 dark:bg-gray-800"; // Sin contribuciones
    case 1:
      return "bg-green-200 dark:bg-green-900"; // Bajo
    case 2:
      return "bg-green-400 dark:bg-green-700"; // Medio
    case 3:
      return "bg-green-600 dark:bg-green-500"; // Alto
    case 4:
      return "bg-green-800 dark:bg-green-300"; // Muy alto
    default:
      return "bg-gray-100 dark:bg-gray-800";
  }
};

interface ContributionGraphProps {
  className?: string;
}

export function ContributionGraph({ className = "" }: ContributionGraphProps) {
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [data, setData] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setIsLoading(true);
        
        // Llamada directa a la función de GitHub
        const { fetchGitHubContributions } = await import('@/lib/github');
        
        const fromDate = `${selectedYear}-01-01`;
        const toDate = `${selectedYear}-12-31`;
        
        const { contributions, totalContributions } = await fetchGitHubContributions(fromDate, toDate);
        
        setData(contributions);
        setTotalContributions(totalContributions);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err);
        setError('Could not load contribution data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContributions();
  }, [selectedYear]);

  // Calcular posiciones de los meses
  const getMonthLabels = () => {
    if (!data || data.length === 0) return [];
    
    const months = [];
    let currentMonth = -1;
    let weekIndex = 0;
    
    // Agrupar por semanas (7 días)
    for (let i = 0; i < data.length; i += 7) {
      const date = new Date(data[i].date);
      const month = date.getMonth();
      
      if (month !== currentMonth) {
        const monthNames = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
        months.push({
          name: monthNames[month],
          position: weekIndex
        });
        currentMonth = month;
      }
      weekIndex++;
    }
    
    return months;
  };

  const monthLabels = getMonthLabels();

  if (isLoading) {
    return (
      <div className={`p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-4"></div>
          <div 
        className="grid grid-flow-col grid-rows-7 gap-1 p-4 border rounded-lg dark:border-gray-700 overflow-x-auto bg-white dark:bg-gray-900/50"
        ref={(el) => {
          if (el && window.innerWidth < 768) {
            // En móvil, hacer scroll hacia la derecha para mostrar las contribuciones más recientes
            setTimeout(() => {
              el.scrollLeft = el.scrollWidth - el.clientWidth;
            }, 100);
          }
        }}
      >
            {Array.from({ length: 371 }).map((_, i) => (
              <div key={i} className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-sm" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !data || data.length === 0) {
    return (
      <div className={`p-6 ${className}`}>
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">
            {error || "Could not load contribution data"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 ${className}`}>
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2 flex items-center gap-2">
            GitHub Activity
            <svg 
              className="w-5 h-5 fill-gray-700 dark:fill-gray-300" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="text-lg font-bold text-blue-500">
              {totalContributions.toLocaleString()}
            </span>
            {` contributions in ${selectedYear}`}
          </p>
        </div>

        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5 sm:p-1 self-start sm:self-center">
          {[2025, 2026].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-2 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm font-medium rounded-md transition-all ${
                selectedYear === year
                  ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      
      <div className="relative">
        {/* Etiquetas de meses - Desktop */}
        <div className="hidden md:grid grid-flow-col gap-1 mb-1 px-4" style={{ gridTemplateColumns: `repeat(${Math.ceil(data.length / 7)}, 1fr)` }}>
          {monthLabels.map((month, index) => (
            <div
              key={`${month.name}-${index}`}
              className="text-xs text-gray-500 dark:text-gray-400 text-left"
              style={{ gridColumnStart: month.position + 1 }}
            >
              {month.name}
            </div>
          ))}
        </div>
        
        <div className="border rounded-lg dark:border-gray-700 bg-white dark:bg-gray-900/50 overflow-hidden">
          {/* Etiquetas de meses - Móvil (dentro del scroll) */}
          <div 
            className="md:hidden grid grid-flow-col gap-1 px-4 pt-2 pb-1 overflow-x-auto scrollbar-hide"
            style={{ gridTemplateColumns: `repeat(${Math.ceil(data.length / 7)}, 12px)` }}
            ref={(el) => {
              if (el && window.innerWidth < 768) {
                setTimeout(() => {
                  el.scrollLeft = el.scrollWidth - el.clientWidth;
                }, 100);
              }
            }}
          >
            {monthLabels.map((month, index) => (
              <div
                key={`${month.name}-mobile-${index}`}
                className="text-xs text-gray-500 dark:text-gray-400 text-left whitespace-nowrap"
                style={{ gridColumnStart: month.position + 1 }}
              >
                {month.name}
              </div>
            ))}
          </div>
          
          <div 
            className="grid grid-flow-col grid-rows-7 gap-1 p-4 overflow-x-auto scrollbar-hide"
            style={{ gridTemplateColumns: `repeat(${Math.ceil(data.length / 7)}, 12px)` }}
            ref={(el) => {
              if (el && window.innerWidth < 768) {
                // En móvil, hacer scroll hacia la derecha para mostrar las contribuciones más recientes
                setTimeout(() => {
                  el.scrollLeft = el.scrollWidth - el.clientWidth;
                  // Sincronizar el scroll de las etiquetas de meses
                  const monthsContainer = el.parentElement?.querySelector('.md\\:hidden');
                  if (monthsContainer) {
                    monthsContainer.scrollLeft = el.scrollLeft;
                  }
                }, 100);
                
                // Sincronizar scroll entre gráfico y etiquetas
                el.addEventListener('scroll', () => {
                  const monthsContainer = el.parentElement?.querySelector('.md\\:hidden');
                  if (monthsContainer) {
                    monthsContainer.scrollLeft = el.scrollLeft;
                  }
                });
              }
            }}
          >
            {data.map((day, index) => (
              <div
                key={`${day.date}-${index}`}
                className={`w-3 h-3 rounded-sm transition-all duration-200 hover:scale-110 ${getLevelColor(day.level)}`}
                title={`${day.count} contribution${day.count !== 1 ? "s" : ""} on ${new Date(day.date).toLocaleDateString()}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
        <span>Less</span>
        <div className="flex items-center gap-1">
          {[0, 1, 2, 3, 4].map(level => (
            <div
              key={level}
              className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}