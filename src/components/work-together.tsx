import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';

const TYPING_SPEED = 100; // ms per character

export const WorkTogether: React.FC = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [showWorking, setShowWorking] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [workingText, setWorkingText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const fullText = 'npm run dev...';
  const workingFullText = 'Trabajando';

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation sequence
  useEffect(() => {
    if (!isVisible) return;
    
    let isMounted = true;
    
    const sequence = async () => {
      while (isMounted) {
        // Show "¿Trabajamos juntos?" for 10 seconds
        await new Promise(resolve => setTimeout(resolve, 10000));
        
        // Typing effect for "npm run dev..."
        if (!isMounted) return;
        setIsTyping(true);
        for (let i = 0; i <= fullText.length; i++) {
          if (!isMounted) return;
          setTypedText(fullText.substring(0, i));
          await new Promise(resolve => setTimeout(resolve, TYPING_SPEED));
        }
        
        // Pause for 1.5 seconds with the typed text visible
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsTyping(false);
        
        // Show "Trabajando..." with typing effect
        if (!isMounted) return;
        setShowWorking(true);
        setWorkingText('');
        
        // Type "Trabajando"
        for (let i = 0; i <= workingFullText.length; i++) {
          if (!isMounted) return;
          setWorkingText(workingFullText.substring(0, i));
          await new Promise(resolve => setTimeout(resolve, TYPING_SPEED));
        }
        
        // Type dots one by one
        for (let i = 0; i < 3; i++) {
          if (!isMounted) return;
          setWorkingText(workingFullText + '.'.repeat(i + 1));
          await new Promise(resolve => setTimeout(resolve, TYPING_SPEED * 2));
        }
        
        // Keep showing for the remaining time (total 3 seconds)
        const typingDuration = (workingFullText.length + 3) * TYPING_SPEED * 1.5;
        const remainingTime = 3000 - typingDuration;
        if (remainingTime > 0) {
          await new Promise(resolve => setTimeout(resolve, remainingTime));
        }
        
        setShowWorking(false);
      }
    };
    
    sequence();
    
    return () => {
      isMounted = false;
      setTypedText('');
      setIsTyping(false);
      setShowWorking(false);
    };
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center min-h-[300px] relative">
      <AnimatePresence mode="wait">
        {!showWorking ? (
          <motion.h2
            key="typing"
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: -90 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold min-w-[300px] text-center"
          >
            {isTyping ? (
              <span className="font-mono">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            ) : (
              '¿Trabajamos juntos?'
            )}
          </motion.h2>
        ) : (
          <motion.div
            key="working"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold min-w-[300px] text-center"
          >
            <span>
              {workingText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.p 
        className="text-default-600 mt-8 max-w-xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Estoy siempre abierto a nuevos proyectos y oportunidades. Si tienes una idea o necesitas ayuda con tu próximo{' '}
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/10 text-warning">
          <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mr-1.5"></span>
          Trabajo
        </span>{' '}
        no dudes en contactarme.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8"
      >
        <Button
          as={RouterLink}
          to="/contact"
          color="primary"
          size="lg"
          endContent={<Icon icon="lucide:send" />}
        >
          Contactar
        </Button>
      </motion.div>
    </div>
  );
};
