import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";
import { motion } from "framer-motion";

export const NewYearModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkDate = () => {
      const now = new Date();
      // Año actual para que funcione dinámicamente o fijado al 2025 como pide el usuario
      // const currentYear = now.getFullYear();
      
      // Fecha de inicio: 31 de diciembre a las 16:00
      // Usamos el año actual si es diciembre, o el anterior si es enero para la lógica de rango
      // Pero el usuario especificó "mañana dia 31", asumiendo 2025.
      
      const startDate = new Date("2025-12-31T16:00:00");
      const endDate = new Date("2026-01-02T00:00:00");

      if (now >= startDate && now < endDate) {
        // Verificar si ya se mostró en esta sesión para no ser intrusivo
        const hasSeenModal = sessionStorage.getItem("seenNewYearModal");
        if (!hasSeenModal) {
          setIsOpen(true);
          sessionStorage.setItem("seenNewYearModal", "true");
        }
      }
    };

    checkDate();
    // Comprobar cada minuto por si el usuario está en la página cuando llega la hora
    const interval = setInterval(checkDate, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Modal 
      isOpen={isOpen}  
      onOpenChange={setIsOpen} 
      backdrop="blur"
      placement="center"
      classNames={{
        base: "bg-gradient-to-br from-indigo-900 to-purple-900 border border-gold-500/50 shadow-2xl",
        header: "border-b border-white/10",
        footer: "border-t border-white/10",
        closeButton: "hover:bg-white/10 text-white",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 items-center justify-center text-white">
              <span className="text-4xl">✨ 🎉 🥂</span>
              <span className="font-bold text-2xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                ¡Felices Fiestas!
              </span>
            </ModalHeader>
            <ModalBody className="text-center py-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-4"
              >
                <p className="text-xl md:text-2xl font-serif text-white leading-relaxed">
                  "Feliz Próspero Año Nuevo"
                </p>
                <p className="text-white/80 text-sm">
                  Que este nuevo año traiga éxito, salud y código limpio.
                </p>
              </motion.div>
            </ModalBody>
            <ModalFooter className="justify-center">
              <Button 
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold shadow-lg hover:shadow-yellow-500/20" 
                onPress={onClose}
              >
                ¡Igualmente! 🎆
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
