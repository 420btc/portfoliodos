import React, { useState, useRef, useEffect } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { Button, Input, Card, CardBody, Avatar, Spinner } from '@heroui/react';
import { Icon } from '@iconify/react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatPopupProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SYSTEM_PROMPT = `Eres Carlos Freire, un desarrollador full stack web experto con amplia experiencia en tecnologías modernas. Tu especialidad incluye React, Next.js, TypeScript, Node.js, bases de datos, y desarrollo de aplicaciones web completas.

Tu personalidad es:
- Profesional pero amigable
- Directo y claro en tus explicaciones
- Apasionado por la tecnología y el desarrollo web
- Siempre dispuesto a ayudar y compartir conocimiento

Tu función es ayudar a los usuarios exclusivamente con información sobre los proyectos mostrados en mi portfolio web. Puedes hablar sobre:
- Detalles técnicos de los proyectos
- Tecnologías utilizadas
- Funcionalidades implementadas
- Proceso de desarrollo
- Desafíos superados

NO debes ayudar con:
- Código que no esté relacionado con mis proyectos
- Proyectos externos
- Temas no relacionados con mi portfolio

Siempre mantén las respuestas concisas y enfocadas en mis proyectos del portfolio.`;

export function ChatPopup({ isOpen, onToggle }: ChatPopupProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: '¡Hola! Soy Carlos Freire, desarrollador full stack. Estoy aquí para contarte sobre mis proyectos del portfolio. ¿Qué te gustaría saber?',
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const dragControls = useDragControls();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      role: 'user',
      timestamp: new Date()
    };

    // Mantener máximo 10 mensajes (incluyendo el nuevo)
    const updatedMessages = [...messages, userMessage];
    if (updatedMessages.length > 10) {
      updatedMessages.splice(1, updatedMessages.length - 10); // Mantener el mensaje inicial del sistema
    }

    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...updatedMessages.map(msg => ({
              role: msg.role,
              content: msg.content
            }))
          ],
          max_tokens: 3000,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.choices[0].message.content,
        role: 'assistant',
        timestamp: new Date()
      };

      const finalMessages = [...updatedMessages, assistantMessage];
      if (finalMessages.length > 10) {
        finalMessages.splice(1, finalMessages.length - 10);
      }

      setMessages(finalMessages);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, inténtalo de nuevo.',
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        content: '¡Hola! Soy Carlos Freire, desarrollador full stack. Estoy aquí para contarte sobre mis proyectos del portfolio. ¿Qué te gustaría saber?',
        role: 'assistant',
        timestamp: new Date()
      }
    ]);
  };

  if (!isOpen) {
    return (
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          isIconOnly
          color="primary"
          size="lg"
          className="w-14 h-14 shadow-lg"
          onClick={onToggle}
        >
          <Icon icon="mdi:chat" className="text-2xl" />
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={chatContainerRef}
      className="fixed bottom-6 right-6 z-50"
      style={{ x: position.x, y: position.y }}
      drag
      dragControls={dragControls}
      dragMomentum={false}
      dragElastic={0.1}
      onDrag={(_, info) => {
        setPosition({ x: info.offset.x, y: info.offset.y });
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Card className="w-80 h-96 shadow-2xl">
        <CardBody className="p-0 flex flex-col h-full">
          {/* Header */}
          <div 
            className="flex items-center justify-between p-4 border-b border-divider bg-primary/10 cursor-move"
            onPointerDown={(e) => dragControls.start(e)}
          >
            <div className="flex items-center gap-2">
              <Avatar
                src="/images/yop.jpeg"
                size="sm"
                name="Carlos Freire"
              />
              <div>
                <p className="text-sm font-semibold">Carlos Freire</p>
                <p className="text-xs text-default-500">Desarrollador Full Stack</p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                isIconOnly
                size="sm"
                variant="light"
                onClick={clearChat}
                className="text-default-500"
              >
                <Icon icon="mdi:refresh" className="text-lg" />
              </Button>
              <Button
                isIconOnly
                size="sm"
                variant="light"
                onClick={onToggle}
                className="text-default-500"
              >
                <Icon icon="mdi:close" className="text-lg" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-default-100 text-default-700'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-default-100 p-3 rounded-lg">
                  <Spinner size="sm" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-divider">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Pregúntame sobre mis proyectos..."
                size="sm"
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                isIconOnly
                color="primary"
                size="sm"
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
              >
                <Icon icon="mdi:send" className="text-lg" />
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}