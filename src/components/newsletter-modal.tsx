import React from "react";
import { Modal, ModalContent, ModalBody } from "@heroui/react";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="5xl"
      scrollBehavior="inside"
      classNames={{
        base: "max-h-[90vh] md:rounded-3xl rounded-none md:bg-content1 bg-transparent md:max-w-5xl max-w-full md:max-h-[90vh] max-h-full",
        body: "p-0",
        wrapper: "md:bg-black/50 bg-transparent",
        closeButton: "top-4 right-4 text-white z-50",
      }}
    >
      <ModalContent>
        <ModalBody>
          <div className="w-full md:h-[70vh] h-screen">
            <iframe
              src="https://news-pi-seven.vercel.app"
              className="w-full h-full border-0 md:rounded-3xl rounded-none"
              title="Newsletter"
              loading="lazy"
            />
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};