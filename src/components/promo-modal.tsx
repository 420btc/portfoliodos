import React from "react";
import { Modal, ModalContent, ModalBody, ModalHeader, Button } from "@heroui/react";
import { motion } from "framer-motion";

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromoModal: React.FC<PromoModalProps> = ({ isOpen, onClose }) => {
  const handleContact = () => {
    window.location.href = "mailto:carlospfreire1@gmail.com?subject=Interesado en crear una página web";
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="2xl"
      placement="center"
      scrollBehavior="inside"
      classNames={{
        base: "bg-blue-500/80 backdrop-blur-xl border border-blue-500/30 max-h-[85vh] sm:max-h-[90vh]",
        closeButton: "text-white hover:bg-white/20 transition-colors z-50",
        body: "max-h-[calc(85vh-80px)] sm:max-h-[calc(90vh-80px)] overflow-y-auto",
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-white text-center pb-2 pt-3 sm:pt-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              🚀 ¡Oferta Especial!
            </h2>
          </motion.div>
        </ModalHeader>
        <ModalBody className="pb-4 sm:pb-6 px-4 sm:px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="text-center space-y-2 sm:space-y-3">
              <p className="text-base sm:text-lg text-white/90 font-medium">
                ¿Necesitas una página web profesional?
              </p>
              <p className="text-sm sm:text-base text-white/80">
                Creo páginas web modernas, rápidas y personalizadas que impulsan tu negocio. 
                Con años de experiencia en desarrollo web, te ofrezco:
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-green-400 text-lg sm:text-xl flex-shrink-0">✓</span>
                <p className="text-sm sm:text-base text-white/90">
                  <strong>Diseño moderno y responsive</strong> - Se adapta a todos los dispositivos
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-green-400 text-lg sm:text-xl flex-shrink-0">✓</span>
                <p className="text-sm sm:text-base text-white/90">
                  <strong>Desarrollo rápido</strong> - Tu web lista en tiempo récord
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-green-400 text-lg sm:text-xl flex-shrink-0">✓</span>
                <p className="text-sm sm:text-base text-white/90">
                  <strong>Tecnologías de última generación</strong> - React, Next.js, TypeScript
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-green-400 text-lg sm:text-xl flex-shrink-0">✓</span>
                <p className="text-sm sm:text-base text-white/90">
                  <strong>SEO optimizado</strong> - Mayor visibilidad en buscadores
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-green-400 text-lg sm:text-xl flex-shrink-0">✓</span>
                <p className="text-sm sm:text-base text-white/90">
                  <strong>Soporte post-lanzamiento</strong> - Te acompaño después del lanzamiento
                </p>
              </div>
            </div>

            <div className="text-center space-y-3 sm:space-y-4 pt-2">
              <p className="text-white/80 text-sm">
                Ya he creado más de 15 proyectos exitosos. ¡Tu proyecto puede ser el siguiente!
              </p>
              
              <Button
                onClick={handleContact}
                size="lg"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-base sm:text-lg shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/70 hover:scale-105 transition-all"
              >
                📧 Contactar ahora
              </Button>
              
              <Button
                onClick={onClose}
                size="md"
                variant="bordered"
                className="w-full sm:hidden border-white/30 text-white hover:bg-white/10 transition-all"
              >
                Cerrar
              </Button>
              
              <p className="text-white/60 text-xs">
                carlospfreire1@gmail.com
              </p>
            </div>
          </motion.div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
