import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Link } from "@heroui/react";

const jobTitles = [
  { 
    parts: [
      { text: "Desarrollador ", color: "text-white" },
      { text: "Full Stack", color: "text-primary" }
    ]
  },
  { 
    parts: [
      { text: "Fotógrafo ", color: "text-primary" },
      { text: "Astronómico", color: "text-white" }
    ]
  },
  { 
    parts: [
      { text: "Piloto de ", color: "text-white" },
      { text: "Drones FPV", color: "text-primary" }
    ]
  },
  { 
    parts: [
      { text: "Diseñador ", color: "text-primary" },
      { text: "Web", color: "text-white" }
    ]
  }
];

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentJob = jobTitles[currentIndex];

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        
        {/* Additional floating images */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden shadow-xl z-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.9, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="/images/portada1.png" 
            alt="Proyecto creativo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          className="absolute top-1/6 -right-20 w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-xl z-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.9, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img 
            src="/images/aidreamer.png" 
            alt="Proyecto AI Dreamer"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto text-center mb-12">
              {/* Profile Picture */}
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary overflow-hidden">
                  <img 
                    src="/images/yop2.jpeg" 
                    alt="Carlos Freire"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hola, soy <span className="text-primary">Carlos Freire</span>
              </h1>
              <div className="h-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={JSON.stringify(currentJob.parts)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-semibold"
                  >
                    {currentJob.parts.map((part, index) => (
                      <span key={index} className={part.color}>
                        {part.text}
                      </span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="text-xl text-default-600 mt-6 max-w-2xl mx-auto">
                Creando experiencias digitales únicas y soluciones innovadoras
              </p>
              

            </div>
            
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 w-full">
              <Button
                as={RouterLink}
                to="/contact"
                color="primary"
                size="lg"
                className="px-8 w-full sm:w-auto text-center"
                endContent={<Icon icon="lucide:message-circle" />}
              >
                Contáctame
              </Button>
              <Button
                as={RouterLink}
                to="/projects"
                variant="flat"
                size="lg"
                className="px-8 w-full sm:w-auto text-center"
                endContent={<Icon icon="lucide:folder-kanban" />}
              >
                Ver Proyectos
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-12">
              <p className="text-default-500">Find me on:</p>
              <div className="flex gap-4">
                <Link href="https://github.com" isExternal aria-label="GitHub">
                  <Icon icon="lucide:github" width={20} height={20} />
                </Link>
                <Link href="https://linkedin.com" isExternal aria-label="LinkedIn">
                  <Icon icon="lucide:linkedin" width={20} height={20} />
                </Link>
                <Link href="https://twitter.com" isExternal aria-label="Twitter">
                  <Icon icon="lucide:twitter" width={20} height={20} />
                </Link>
                <Link href="https://instagram.com" isExternal aria-label="Instagram">
                  <Icon icon="lucide:instagram" width={20} height={20} />
                </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/images/aidreamer.png"
                  alt="Landscape photography" 
                  className="rounded-lg shadow-lg object-cover w-full h-48"
                />
                <img 
                  src="/images/yourdayin.png"
                  alt="AI generated art" 
                  className="rounded-lg shadow-lg object-cover w-full h-64"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="/images/notfound.png"
                  alt="Drone photography" 
                  className="rounded-lg shadow-lg object-cover w-full h-64"
                />
                <img 
                  src="/images/rush2.png"
                  alt="Novel" 
                  className="rounded-lg shadow-lg object-cover w-full h-40"
                />
              </div>
            </div>
            
            {/* Floating icons */}
            <motion.div 
              className="absolute -top-4 -left-4 bg-content1 p-2 rounded-full shadow-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Icon icon="lucide:camera" width={24} height={24} className="text-primary" />
            </motion.div>
            <motion.div 
              className="absolute top-1/2 -right-4 bg-content1 p-2 rounded-full shadow-md"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            >
              <Icon icon="lucide:drone" width={24} height={24} className="text-secondary" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 left-1/2 bg-content1 p-2 rounded-full shadow-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
            >
              <Icon icon="lucide:book" width={24} height={24} className="text-default-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};