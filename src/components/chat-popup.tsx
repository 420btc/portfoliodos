import React, { useState, useEffect, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { Button, Input, Card, CardBody, Avatar, Spinner } from '@heroui/react';
import { Icon } from '@iconify/react';
import { generateProjectContext } from "../utils/project-context-provider";
import { hasReachedLimit, incrementResponseCount, getRemainingResponses, getFormattedTimeUntilReset } from "../utils/chat-limits";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  responseTime?: number; // Time in milliseconds it took to respond (for assistant messages)
}

interface ChatPopupProps {
  isOpen: boolean;
  onToggle: () => void;
}

const getSystemPrompt = () => {
  const projectContext = generateProjectContext();
  
  return `Eres Carlos Freire, un desarrollador full stack web experto con amplia experiencia en tecnologías modernas. Tu especialidad incluye React, Next.js, TypeScript, Node.js, bases de datos, y desarrollo de aplicaciones web completas.

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

Siempre mantén las respuestas concisas y enfocadas en mis proyectos del portfolio.

${projectContext}`;
};

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
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [remainingResponses, setRemainingResponses] = useState(getRemainingResponses());
  
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
    
    // Check if user has reached their limit
    if (hasReachedLimit()) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        content: `Has alcanzado el límite de 10 respuestas en 12 horas. Por favor, intenta de nuevo en ${getFormattedTimeUntilReset()}.`,
        role: 'assistant',
        timestamp: new Date()
      }]);
      return;
    }

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
            { role: 'system', content: getSystemPrompt() },
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
      const responseTime = Date.now() - new Date(userMessage.timestamp).getTime();
      // Increment response count and update remaining responses
      incrementResponseCount();
      setRemainingResponses(getRemainingResponses());
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.choices[0].message.content,
        role: 'assistant',
        timestamp: new Date(),
        responseTime: responseTime
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

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isOpen) {
    return (
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          isIconOnly
          color="primary"
          size="lg"
          className="w-12 h-12 sm:w-14 sm:h-14 shadow-lg hover:shadow-xl transition-shadow"
          onClick={onToggle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" style={{ fill: 'currentColor', margin: '-8px' }}>
            <path d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8" />
          </svg>
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={chatContainerRef}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
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
      <Card className={`shadow-2xl transition-all duration-300 ${isMinimized ? 'h-auto w-80' : 'h-96 w-80 sm:w-96'}`}>
        <CardBody className="p-0 flex flex-col h-full">
          {/* Header */}
          <div 
            className="flex items-center justify-between p-3 sm:p-4 border-b border-divider cursor-move"
            onPointerDown={(e) => dragControls.start(e)}
          >
            <div className="flex items-center gap-2">
              <Avatar
                src="/images/yop.jpeg"
                size="sm"
                name="Carlos Freire"
                className="flex-shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold truncate">Carlos Freire</p>
                  <span className="text-xs text-gray-400">{remainingResponses}/10</span>
                </div>
                <p className="text-xs text-default-500 truncate">Desarrollador Full Stack</p>
              </div>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              {/* Desktop buttons */}
              <div className="hidden sm:flex gap-1">
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onClick={clearChat}
                  className="text-white dark:text-white hover:text-primary hover:bg-white/20 dark:hover:bg-white/20 min-w-8 h-8 border-none"
                >
                  <Icon icon="material-symbols:refresh" className="text-xl font-black text-white" />
                </Button>
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onClick={toggleMinimize}
                  className="text-white dark:text-white hover:text-primary hover:bg-white/20 dark:hover:bg-white/20 min-w-8 h-8 border-none"
                >
                  <Icon icon={isMinimized ? "material-symbols:fullscreen" : "material-symbols:minimize"} className="text-xl font-black text-white" />
                </Button>
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onClick={onToggle}
                  className="text-white dark:text-white hover:text-danger hover:bg-danger-50/20 dark:hover:bg-danger-900/20 min-w-8 h-8 border-none"
                >
                  <Icon icon="material-symbols:close" className="text-xl font-black text-white" />
                </Button>
              </div>
              
              {/* Mobile buttons with text instead of icons - blue and round */}
              <div className="flex sm:hidden gap-1.5">
                <button
                  onClick={clearChat}
                  className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white text-xs rounded-full"
                >
                  ↻
                </button>
                <button
                  onClick={toggleMinimize}
                  className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white text-xs rounded-full"
                >
                  {isMinimized ? '□' : '—'}
                </button>
                <button
                  onClick={onToggle}
                  className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white text-xs rounded-full"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3 bg-black">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[80%] p-2.5 sm:p-3 rounded-lg text-sm leading-relaxed ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'bg-default-100 dark:bg-default-800 text-default-700 dark:text-default-300 shadow-sm'
                      }`}
                    >
                      {message.content}
                      {message.role === 'assistant' && (
                        <div className="mt-2 text-xs text-gray-500 flex justify-between">
                          <span>{message.timestamp.toLocaleTimeString()}</span>
                          {message.responseTime && (
                            <span>{(message.responseTime / 1000).toFixed(1)}s</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-default-100 dark:bg-default-800 p-2.5 sm:p-3 rounded-lg shadow-sm">
                      <Spinner size="sm" color="primary" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 sm:p-4 border-t border-divider bg-default-50/50 dark:bg-default-900/50">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Pregúntame sobre mis proyectos..."
                    size="sm"
                    disabled={isLoading}
                    className="flex-1"
                    classNames={{
                      input: "text-sm",
                      inputWrapper: "bg-background dark:bg-default-800 border-default-200 dark:border-default-700"
                    }}
                  />
                  {/* Desktop send button */}
                  <Button
                    isIconOnly
                    color="primary"
                    size="sm"
                    onClick={sendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="hidden sm:flex min-w-8 h-8 sm:min-w-10 sm:h-10 items-center justify-center"
                  >
                    <Icon icon="mdi:send" className="text-base sm:text-lg" />
                  </Button>
                  
                  {/* Mobile send button */}
                  <button
                    onClick={sendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="sm:hidden w-6 h-6 flex items-center justify-center bg-blue-500 text-white text-xs rounded-full"
                  >
                    →
                  </button>
                </div>
              </div>
            </>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
}