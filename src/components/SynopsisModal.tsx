import React, { useEffect, useState } from 'react';
import { Modal, ModalContent } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from 'framer-motion';

interface SynopsisModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
}

const synopsisText = {
  es: "En un pueblo donde nada es lo que parece, un grupo de jóvenes descubre un secreto ancestral oculto bajo la aparente normalidad. A medida que profundizan en su investigación, se ven envueltos en una trama de misterio y peligro que desafía todo lo que creían saber sobre su hogar. Estructuras imposibles, sonidos que no deberían existir y secretos familiares salen a la luz, poniendo a prueba su amistad y cordura. ¿Hasta dónde llegarán para descubrir la verdad que se esconde bajo la superficie de su realidad?",
  en: "In a town where nothing is as it seems, a group of young people discovers an ancient secret hidden beneath the surface of apparent normality. As they delve deeper into their investigation, they become entangled in a web of mystery and danger that challenges everything they thought they knew about their home. Impossible structures, sounds that shouldn't exist, and family secrets come to light, testing their friendship and sanity. How far will they go to uncover the truth hidden beneath the surface of their reality?"
};

const titleText = {
  es: "Bajo la Normalidad",
  en: "Under the Normality"
};

const authorText = {
  es: "Por Carlos Freire",
  en: "By Carlos Freire"
};

export const SynopsisModal: React.FC<SynopsisModalProps> = ({ isOpen, onClose, language }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const textToType = synopsisText[language as keyof typeof synopsisText] || synopsisText.es;
  
  useEffect(() => {
    if (!isOpen) {
      setDisplayText('');
      setCurrentIndex(0);
      setIsTyping(true);
      return;
    }
    
    if (currentIndex < textToType.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + textToType[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 20); // Velocidad de escritura
      
      return () => clearTimeout(timeout);
    } else if (currentIndex >= textToType.length) {
      setIsTyping(false);
    }
  }, [currentIndex, isOpen, isTyping, textToType]);
  
  const handleClose = () => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsTyping(true);
    onClose();
  };

  return (
    <AnimatePresence>
      <Modal 
        isOpen={isOpen} 
        onClose={handleClose}
        size="4xl"
        backdrop="blur"
        hideCloseButton
        classNames={{
          base: "bg-transparent",
          wrapper: "p-4",
          body: "p-0"
        }}
      >
        <ModalContent className="overflow-hidden border-0 bg-black/60 backdrop-blur-sm">
          {/* Contenido principal */}
          <div className="relative p-8 min-h-[70vh] flex flex-col items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              {/* Título */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                  {titleText[language as keyof typeof titleText]}
                </h2>
                <p className="text-blue-200 text-xl">
                  {authorText[language as keyof typeof authorText]}
                </p>
              </motion.div>
              
              {/* Separador */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="w-32 h-0.5 bg-white mx-auto my-8"
              />
              
              {/* Subtítulo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-8"
              >
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
                  {language === 'es' ? 'Sinopsis' : 'Synopsis'}
                </h3>
              </motion.div>
              
              {/* Texto de sinopsis */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="relative"
              >
                <p className="text-lg md:text-2xl text-white leading-relaxed font-light tracking-wide">
                  {displayText}
                  <span className={`inline-block w-1 h-8 bg-white ml-1 align-middle rounded-full ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
                </p>
              </motion.div>
            </div>
            
            {/* Botón de cierre - Estilo igual a "Leer muestra" */}
            <motion.div
              className="mt-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={handleClose}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
                aria-label={language === 'es' ? 'Cerrar' : 'Close'}
              >
                <span>{language === 'es' ? 'Cerrar' : 'Close'}</span>
                <Icon icon="lucide:x" className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </ModalContent>
      </Modal>
    </AnimatePresence>
  );
};
