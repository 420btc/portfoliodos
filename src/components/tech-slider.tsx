import React, { useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

const technologies: TechItem[] = [
  { name: "React", icon: "logos:react", color: "#61DAFB" },
  { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6" },
  { name: "Node.js", icon: "logos:nodejs-icon", color: "#339933" },
  { name: "Python", icon: "logos:python", color: "#3776AB" },
  { name: "JavaScript", icon: "logos:javascript", color: "#F7DF1E" },
  { name: "HTML", icon: "logos:html-5", color: "#E34F26" },
  { name: "C++", icon: "logos:c-plusplus", color: "#00599C" },
  { name: "Next.js", icon: "logos:nextjs-icon", color: "#000000" },
  { name: "Vue.js", icon: "logos:vue", color: "#4FC08D" },
  { name: "Angular", icon: "logos:angular-icon", color: "#DD0031" },
  { name: "Docker", icon: "logos:docker-icon", color: "#2496ED" },
  { name: "AWS", icon: "logos:aws", color: "#FF9900" },
  { name: "MongoDB", icon: "logos:mongodb-icon", color: "#47A248" },
  { name: "PostgreSQL", icon: "logos:postgresql", color: "#336791" },
  { name: "Redis", icon: "logos:redis", color: "#DC382D" },
  { name: "GraphQL", icon: "logos:graphql", color: "#E10098" },
  { name: "Tailwind", icon: "logos:tailwindcss-icon", color: "#06B6D4" },
  { name: "Sass", icon: "logos:sass", color: "#CC6699" },
  { name: "Git", icon: "logos:git-icon", color: "#F05032" },
  { name: "GitHub", icon: "logos:github-icon", color: "#181717" },
  { name: "VS Code", icon: "logos:visual-studio-code", color: "#007ACC" },
  { name: "Figma", icon: "logos:figma", color: "#F24E1E" },
  { name: "Adobe XD", icon: "logos:adobe-xd", color: "#FF61F6" },
  { name: "Photoshop", icon: "logos:adobe-photoshop", color: "#31A8FF" },
  { name: "Vercel", icon: "logos:vercel-icon", color: "#000000" },
  { name: "Netlify", icon: "logos:netlify", color: "#00C7B7" },
  { name: "Firebase", icon: "logos:firebase", color: "#FFCA28" },
  { name: "Supabase", icon: "logos:supabase-icon", color: "#3ECF8E" },
  { name: "Stripe", icon: "logos:stripe", color: "#635BFF" },
  { name: "OpenAI", icon: "simple-icons:openai", color: "#412991" },
  { name: "Anthropic", icon: "simple-icons:anthropic", color: "#D4A574" },
  { name: "TensorFlow", icon: "logos:tensorflow", color: "#FF6F00" },
  { name: "Unity", icon: "logos:unity", color: "#000000" },
  { name: "Blender", icon: "logos:blender", color: "#F5792A" },
  { name: "Linux", icon: "logos:linux-tux", color: "#FCC624" },
  { name: "Ubuntu", icon: "logos:ubuntu", color: "#E95420" },
  { name: "Windows", icon: "logos:microsoft-windows", color: "#0078D4" },
  { name: "macOS", icon: "logos:apple", color: "#000000" },
];

// Duplicar el array para crear el efecto infinito
const duplicatedTechs = [...technologies, ...technologies];

interface TechSliderProps {
  className?: string;
}

export const TechSlider: React.FC<TechSliderProps> = ({ className = "" }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [hasBeenDragged, setHasBeenDragged] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calcular el ancho total del contenido
  const totalWidth = duplicatedTechs.length * 172; // 160px + 12px gap aproximadamente
  
  const handleDragStart = () => {
    setIsDragging(true);
    setHasBeenDragged(true); // Marcar que el usuario ha interactuado
  };
  
  const handleDragEnd = () => {
    setIsDragging(false);
    // Ya no hay lógica de retorno automático
    // El slider se queda donde el usuario lo deje
  };

  return (
    <div className={`overflow-hidden py-2 ${className}`}>
      <div className="relative" ref={containerRef}>
        {/* Gradientes para fade effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        
        {/* Slider container */}
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          style={{ x }}
          animate={isDragging || hasBeenDragged ? {} : {
            x: ["0%", "-50%"],
          }}
          transition={isDragging || hasBeenDragged ? {} : {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 80,
              ease: "linear",
            },
          }}
          drag="x"
           dragConstraints={{
             left: -totalWidth,
             right: totalWidth,
           }}
          dragElastic={0.1}
          dragMomentum={true}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          whileDrag={{ scale: 0.98 }}
        >
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
              style={{ minWidth: "160px" }}
            >
              <div className="flex items-center justify-center w-8 h-8">
                <img
                  src={`https://api.iconify.design/${tech.icon}.svg`}
                  alt={tech.name}
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: tech.name === "GitHub" || tech.name === "Next.js" || tech.name === "Unity" || tech.name === "Vercel" || tech.name === "macOS" ? 'invert(0)' : 'none' }}
                />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};