import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from "@iconify/react";
import { TbPhotoDollar } from "react-icons/tb";
import { Link } from "@heroui/react";
import { useLanguage } from "./language-switcher";
import { TechSlider } from "./tech-slider";

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profileImage, setProfileImage] = useState('/images/yop2.jpeg');
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const jobTitles = [
    { 
      parts: [
        { text: language === "es" ? "Desarrollador " : "Full Stack ", color: "text-foreground dark:text-white" },
        { text: language === "es" ? "Full Stack" : "Developer", color: "text-primary" }
      ]
    },
    { 
      parts: [
        { text: language === "es" ? "Fotógrafo " : "Astronomical ", color: "text-primary" },
        { text: language === "es" ? "Astronómico" : "Photographer", color: "text-foreground dark:text-white" }
      ]
    },
    { 
      parts: [
        { text: language === "es" ? "Piloto de " : "FPV Drone ", color: "text-foreground dark:text-white" },
        { text: language === "es" ? "Drones FPV" : "Pilot", color: "text-primary" }
      ]
    },
    { 
      parts: [
        { text: language === "es" ? "Diseñador " : "Web ", color: "text-primary" },
        { text: language === "es" ? "Web" : "Designer", color: "text-foreground dark:text-white" }
      ]
    }
  ];

  const toggleProfileImage = () => {
    setProfileImage(prev => prev === '/images/yop2.jpeg' ? '/images/yop.jpeg' : '/images/yop2.jpeg');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentJob = jobTitles[currentIndex];

  const handleProjectsClick = () => {
    setIsClicked(true);
    // Usar requestAnimationFrame para asegurar que la animación se complete
    requestAnimationFrame(() => {
      setTimeout(() => {
        window.location.href = '/projects';
      }, 500);
    });
  };

  return (
    <>
      {/* CSS for animations */}
      <style>{`
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #3b82f6;
          border-radius: 50%;
          pointer-events: none;
        }
        
        @keyframes particleFloat {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-30px) scale(0);
            opacity: 0;
          }
        }
        
        .particle-animation {
          animation: particleFloat 1s ease-out forwards;
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        .ripple-effect {
          animation: ripple 0.6s ease-out;
        }
      `}</style>
      
      <div className="relative overflow-hidden bg-background">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
          
          {/* Additional floating images */}
          <motion.div 
            className="absolute top-1/4 -left-20 w-[17.4rem] h-[17.4rem] md:w-[19.2rem] md:h-[19.2rem] rounded-xl z-0 group"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-black/10 -rotate-2 group-hover:rotate-0 transition-all duration-500" />
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-black group-hover:border-black/70 transition-all duration-300">
              <img 
                src="/images/portada1.png" 
                alt={language === "es" ? "Proyecto creativo" : "Creative project"}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            className="absolute top-1/6 -right-20 w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-xl z-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src="/images/aidreamer.png" 
              alt="AI Dreamer Project"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-secondary/5 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-18 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start lg:pt-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-4xl mx-auto text-center mb-10">
                {/* Profile Picture */}
                <div className="flex justify-center mb-7">
                  <div className="relative">
                    <div className="relative w-[15.4rem] h-[15.4rem] md:w-[17.9rem] md:h-[17.9rem] rounded-full border-4 border-primary overflow-hidden">
                      <img 
                        src={profileImage} 
                        alt="Carlos Freire"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      onClick={toggleProfileImage}
                      className="absolute -bottom-1 -right-5 md:-right-1 bg-blue-600 hover:bg-blue-700 text-white p-1 md:p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                      aria-label={language === "es" ? "Cambiar foto de perfil" : "Change profile picture"}
                    >
                      <Icon icon="mdi:refresh" className="text-xl" />
                    </button>
                  </div>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-bold mb-5">
                  {language === "es" ? "Hola, soy " : "Hello, I'm "}<span className="text-primary">Carlos Freire</span>
                </h1>
                <div className="h-15">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={JSON.stringify(currentJob.parts)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-xl md:text-2xl font-semibold"
                    >
                      {currentJob.parts.map((part, index) => (
                        <span key={index} className={part.color}>
                          {part.text}
                        </span>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <p className="text-lg text-default-600 mt-5 max-w-2xl">
                  {language === "es" ? 
                    "Creo experiencias web modernas y funcionales. Especializado en React, Next.js y TypeScript para construir aplicaciones que me permiten demostrar mis habilidades." :
                    "I create modern and functional web experiences. Specialized in React, Next.js and TypeScript to build applications that showcase my skills."
                  }
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full mt-6">
                  {/* Contact Button - Same exact structure as projects button */}
                  <div className="relative overflow-hidden rounded-xl w-full sm:w-auto max-w-xs sm:max-w-none">
                    <motion.button
                      onClick={() => window.location.href = '/contact'}
                      className="relative px-8 py-4 text-lg font-medium bg-primary text-white hover:bg-primary/90 transition-all duration-300 rounded-xl overflow-hidden w-full border-2 border-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Button content */}
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {language === "es" ? "Contáctame" : "Contact Me"}
                        <Icon icon="lucide:message-circle" />
                      </span>
                    </motion.button>
                  </div>
                  
                  {/* Projects Button with Particle Animation */}
                  <div className="relative overflow-hidden rounded-xl w-full sm:w-auto max-w-xs sm:max-w-none">
                    <motion.button
                      onClick={handleProjectsClick}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="relative px-8 py-4 text-lg font-medium bg-transparent border-2 border-primary text-primary hover:text-white transition-all duration-300 rounded-xl overflow-hidden w-full"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Background fill effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600"
                        initial={{ x: "-100%" }}
                        animate={{ x: isHovering ? "0%" : "-100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                      
                      {/* Ripple effect on click */}
                      {isClicked && (
                        <div className="absolute inset-0 bg-primary/30 rounded-xl ripple-effect" />
                      )}
                      
                      {/* Button content */}
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {language === "es" ? "Ver Proyectos" : "View Projects"}
                        <motion.div
                          animate={{ rotate: isHovering ? 360 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon icon="lucide:folder-kanban" />
                        </motion.div>
                      </span>
                      
                      {/* Particle effects on hover */}
                      {isHovering && (
                        <>
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="particle particle-animation"
                              style={{
                                left: `${20 + i * 15}%`,
                                bottom: '10px',
                                animationDelay: `${i * 0.1}s`
                              }}
                            />
                          ))}
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex items-center gap-4 mt-12">
                <p className="text-default-500">
                  {language === "es" ? "Encuéntrame en:" : "Find me on:"}
                </p>
                <div className="flex gap-4">
                  <Link href="https://github.com/420btc" isExternal aria-label="GitHub">
                    <Icon icon="lucide:github" width={20} height={20} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/carlos-pastor-freire-89790a27a/" isExternal aria-label="LinkedIn">
                    <Icon icon="lucide:linkedin" width={20} height={20} />
                  </Link>
                  <Link href="https://x.com/CarlosFreire0" isExternal aria-label="Twitter">
                    <Icon icon="lucide:twitter" width={20} height={20} />
                  </Link>
                  <Link href="https://www.instagram.com/carlosfreire1/" isExternal aria-label="Instagram">
                    <Icon icon="lucide:instagram" width={20} height={20} />
                  </Link>
                  <Link href="https://www.redbubble.com/es/people/carlosfreire/shop" isExternal aria-label="Redbubble">
                    <TbPhotoDollar size={20} className="text-primary hover:text-default-500 transition-colors" />
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-16 lg:mt-6 lg:ml-12"
            >
              <div className="grid grid-cols-2 gap-6 mx-auto px-4 lg:px-0">
                <div className="space-y-6">
                  <motion.div 
                    className="relative h-48 group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-black/10 -rotate-2 group-hover:rotate-0 transition-all duration-500" />
                    <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-black group-hover:border-black/70 transition-all duration-300">
                      <img 
                        src="/images/aidreamer.png"
                        alt="AI Dreamer Project" 
                        className="w-full h-full object-cover"
                        style={{ objectPosition: '53% center' }}
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative h-48 group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-black/10 rotate-2 group-hover:rotate-0 transition-all duration-500" />
                    <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-black group-hover:border-black/70 transition-all duration-300">
                      <img 
                        src="/images/yourrr.png"
                        alt="Your Day In App" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative h-48 group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-black/10 -rotate-1 group-hover:rotate-0 transition-all duration-500" />
                    <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-black group-hover:border-black/70 transition-all duration-300">
                      <img 
                        src="/images/svcportada.png"
                        alt="SVC Moto" 
                        className="w-full h-full object-cover"
                        style={{ objectPosition: '49% center' }}
                      />
                    </div>
                  </motion.div>
                </div>
                
                <div className="space-y-6">
                  <motion.div 
                    className="relative h-48 group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-black/10 rotate-1 group-hover:rotate-0 transition-all duration-500" />
                    <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-black group-hover:border-black/70 transition-all duration-300">
                      <img 
                        src="/images/wolty.png"
                        alt="Wolty Agency" 
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: window.innerWidth < 768 ? '46% center' : 'center center'
                        }}
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative h-48 group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-black/10 -rotate-3 group-hover:rotate-0 transition-all duration-500" />
                    <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-black group-hover:border-black/70 transition-all duration-300">
                      <div className="relative w-full h-full overflow-hidden">
                        <div className="absolute inset-0">
                          <img 
                            src="/images/candles.png"
                            alt="Candle Rush Game" 
                            className="w-[103%] h-[103%] object-cover -translate-x-[1.%] -translate-y-[1.5%]"
                            style={{ filter: 'brightness(1.1)' }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="relative h-48 group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-black/10 rotate-3 group-hover:rotate-0 transition-all duration-500" />
                    <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-black group-hover:border-black/70 transition-all duration-300">
                      <img 
                        src="/images/trackerr.png"
                        alt="Candle Rush Gameplay" 
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: window.innerWidth < 768 ? '30% center' : 'center center'
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Tech Slider */}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 1.2 }}
           className="mt-0 mb-12"
         >
           <TechSlider />
         </motion.div>
    </>
  );
};