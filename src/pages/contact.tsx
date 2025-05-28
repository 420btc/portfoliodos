import React from "react";
import { Card, CardBody, Input, Textarea, Button, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useLanguage } from "../components/language-switcher";

export const Contact: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [agreeToTerms, setAgreeToTerms] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { language } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setAgreeToTerms(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">{language === "es" ? "Contacto" : "Get in Touch"}</h1>
          <p className="text-default-600 max-w-2xl mx-auto">
            {language === "es" ? 
              "¿Tienes un proyecto en mente o quieres colaborar? Siempre estoy abierto a discutir nuevas oportunidades y proyectos creativos." :
              "Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and creative ventures."
            }
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <Card>
              <CardBody>
                <h2 className="text-xl font-semibold mb-6">{language === "es" ? "Información de Contacto" : "Contact Information"}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon icon="lucide:mail" className="text-primary" width={20} height={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-default-500">carlos@devportfolio.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon icon="lucide:phone" className="text-primary" width={20} height={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">{language === "es" ? "Teléfono" : "Phone"}</h3>
                      <p className="text-default-500">+34 612 345 678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon icon="lucide:map-pin" className="text-primary" width={20} height={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">{language === "es" ? "Ubicación" : "Location"}</h3>
                      <p className="text-default-500">Málaga, España</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody>
                <h2 className="text-xl font-semibold mb-6">{language === "es" ? "Conectar" : "Connect"}</h2>
                <div className="flex flex-wrap gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-default-100 hover:bg-default-200 transition-colors p-3 rounded-full">
                    <Icon icon="lucide:github" width={20} height={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-default-100 hover:bg-default-200 transition-colors p-3 rounded-full">
                    <Icon icon="lucide:linkedin" width={20} height={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-default-100 hover:bg-default-200 transition-colors p-3 rounded-full">
                    <Icon icon="lucide:twitter" width={20} height={20} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-default-100 hover:bg-default-200 transition-colors p-3 rounded-full">
                    <Icon icon="lucide:instagram" width={20} height={20} />
                  </a>
                  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="bg-default-100 hover:bg-default-200 transition-colors p-3 rounded-full">
                    <Icon icon="lucide:dribbble" width={20} height={20} />
                  </a>
                  <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="bg-default-100 hover:bg-default-200 transition-colors p-3 rounded-full">
                    <Icon icon="lucide:book-open" width={20} height={20} />
                  </a>
                </div>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody>
                <h2 className="text-xl font-semibold mb-4">{language === "es" ? "Disponibilidad" : "Availability"}</h2>
                <p className="text-default-600 mb-2">
                  {language === "es" ? 
                    "Actualmente disponible para proyectos freelance y consultoría." :
                    "Currently available for freelance projects and consulting work."
                  }
                </p>
                <div className="flex items-center gap-2 text-success">
                  <Icon icon="lucide:check-circle" width={16} height={16} />
                  <span className="text-sm">
                    {language === "es" ? "Disponible para nuevos proyectos" : "Available for new projects"}
                  </span>
                </div>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardBody>
                <h2 className="text-xl font-semibold mb-6">{language === "es" ? "Enviar un mensaje" : "Send a Message"}</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="bg-success/10 p-4 rounded-full inline-block mb-4">
                      <Icon icon="lucide:check" className="text-success w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{language === "es" ? "¡Mensaje enviado!" : "Message Sent!"}</h3>
                    <p className="text-default-600 mb-6">
                      {language === "es" ? 
                        "Gracias por contactarme. Te responderé lo antes posible." :
                        "Thank you for reaching out. I'll get back to you as soon as possible."
                      }
                    </p>
                    <Button 
                      color="primary" 
                      variant="flat"
                      onPress={() => setIsSubmitted(false)}
                    >
                      {language === "es" ? "Enviar otro mensaje" : "Send Another Message"}
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label={language === "es" ? "Nombre" : "Name"}
                        placeholder={language === "es" ? "Tu nombre" : "Your name"}
                        value={name}
                        onValueChange={setName}
                        isRequired
                        variant="bordered"
                      />
                      <Input
                        label="Email"
                        placeholder={language === "es" ? "tu.email@ejemplo.com" : "your.email@example.com"}
                        value={email}
                        onValueChange={setEmail}
                        isRequired
                        type="email"
                        variant="bordered"
                      />
                    </div>
                    
                    <Input
                      label={language === "es" ? "Asunto" : "Subject"}
                      placeholder={language === "es" ? "¿De qué se trata?" : "What is this regarding?"}
                      value={subject}
                      onValueChange={setSubject}
                      isRequired
                      variant="bordered"
                    />
                    
                    <Textarea
                      label={language === "es" ? "Mensaje" : "Message"}
                      placeholder={language === "es" ? "Cuéntame sobre tu proyecto, pregunta o solicitud..." : "Tell me about your project, question, or request..."}
                      value={message}
                      onValueChange={setMessage}
                      isRequired
                      minRows={5}
                      variant="bordered"
                    />
                    
                    <Checkbox
                      isSelected={agreeToTerms}
                      onValueChange={setAgreeToTerms}
                    >
                      {language === "es" ? 
                        "Acepto la política de privacidad y los términos de servicio" :
                        "I agree to the privacy policy and terms of service"
                      }
                    </Checkbox>
                    
                    <Button
                      type="submit"
                      color="primary"
                      isLoading={isSubmitting}
                      isDisabled={!name || !email || !subject || !message || !agreeToTerms || isSubmitting}
                      endContent={!isSubmitting && <Icon icon="lucide:send" />}
                      fullWidth
                    >
                      {isSubmitting ? 
                        (language === "es" ? "Enviando..." : "Sending...") : 
                        (language === "es" ? "Enviar mensaje" : "Send Message")
                      }
                    </Button>
                  </form>
                )}
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};