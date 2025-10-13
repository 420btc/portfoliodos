import React, { useState, useEffect, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { Button, Input, Card, CardBody, Avatar, Spinner } from '@heroui/react';
import { Icon } from '@iconify/react';
import { generateProjectContext } from "../utils/project-context-provider";
import { ProjectBanner } from './project-banner';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  responseTime?: number; // Time in milliseconds it took to respond (for assistant messages)
  projectBanner?: {
    showProjectBanner: boolean;
    projectId: string;
    projectTitle: string;
    projectImage: string;
    projectIcon?: string;
    demoUrl?: string;
    codeUrl?: string;
  };
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

export const ChatPopup: React.FC<ChatPopupProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: '¡Hola! Soy el asistente de Carlos. Puedo ayudarte con información sobre sus proyectos, tecnologías y experiencia. ¿En qué puedo ayudarte?',
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      role: 'user',
      timestamp: new Date()
    };

    // Agregar mensaje del usuario
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: updatedMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          systemPrompt: getSystemPrompt()
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Error en la respuesta de la API');
      }

      const data = await response.json();
      const responseTime = Date.now() - new Date(userMessage.timestamp).getTime();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message,
        role: 'assistant',
        timestamp: new Date(),
        responseTime: responseTime,
        projectBanner: data.projectBanner
      };

      setMessages(prev => [...prev, assistantMessage]);
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
      handleSubmit(e);
    }
  };

  const sendMessage = () => {
    if (!inputValue.trim() || isLoading) return;
    const syntheticEvent = { preventDefault: () => {} } as React.FormEvent;
    handleSubmit(syntheticEvent);
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        content: '¡Hola! Soy Carlos Freire. Pregúntame sobre mis proyectos, experiencia o cualquier cosa que quieras saber.',
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
      <Card className={`shadow-2xl transition-all duration-300 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 ${isMinimized ? 'h-auto w-80' : 'h-96 w-80 sm:w-96'}`}>
        <CardBody className="p-0 flex flex-col h-full">
          {/* Header */}
          <div 
            className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-zinc-700 cursor-move bg-gray-50 dark:bg-zinc-800"
            onPointerDown={(e) => dragControls.start(e)}
          >
            <div className="flex items-center gap-2">
              <Avatar
                src="/images/yop2.jpeg"
                size="sm"
                name="Carlos Freire"
                className="flex-shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold truncate text-black dark:text-white">
                    Carlos Freire
                  </p>
                </div>
                <p className="text-xs truncate text-gray-500 dark:text-zinc-400">
                  Desarrollador Full Stack
                </p>
              </div>
            </div>
            <div className="flex flex-shrink-0">
              {/* Desktop buttons */}
              <div className="hidden sm:flex items-center gap-1">
                <button
                  onClick={clearChat}
                  className="w-6 h-6 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full border-none"
                >
                  <Icon icon="material-symbols:refresh" className="text-sm" />
                </button>
                <button
                  onClick={toggleMinimize}
                  className="w-6 h-6 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full border-none"
                >
                  <Icon icon={isMinimized ? "material-symbols:fullscreen" : "material-symbols:minimize"} className="text-sm" />
                </button>
                <button
                  onClick={onToggle}
                  className="w-6 h-6 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-red-500 dark:hover:bg-red-600 rounded-full border-none"
                >
                  <Icon icon="material-symbols:close" className="text-sm" />
                </button>
              </div>
              
              {/* Mobile buttons with text instead of icons - blue and round */}
              <div className="flex sm:hidden items-center gap-2 scale-50 origin-right -ml-[15px]">
                <button
                  onClick={clearChat}
                  className="w-4 h-4 flex items-center justify-center bg-blue-500 dark:bg-blue-600 text-white text-[10px] leading-none rounded-full hover:bg-blue-600 dark:hover:bg-blue-700"
                  aria-label="Recargar chat"
                >
                  ↻
                </button>
                <button
                  onClick={toggleMinimize}
                  className="w-4 h-4 flex items-center justify-center bg-blue-500 dark:bg-blue-600 text-white text-[10px] leading-none rounded-full hover:bg-blue-600 dark:hover:bg-blue-700"
                  aria-label={isMinimized ? 'Maximizar' : 'Minimizar'}
                >
                  {isMinimized ? '□' : '—'}
                </button>
                <button
                  onClick={onToggle}
                  className="w-4 h-4 flex items-center justify-center bg-red-500 dark:bg-red-600 text-white text-[10px] leading-none rounded-full hover:bg-red-600 dark:hover:bg-red-700"
                  aria-label="Cerrar chat"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3 bg-white dark:bg-zinc-900">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[80%] p-2.5 sm:p-3 rounded-lg text-sm leading-relaxed shadow-sm border ${
                        message.role === 'user'
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-gray-50 dark:bg-zinc-800 text-black dark:text-white border-gray-200 dark:border-zinc-700'
                      }`}
                    >
                      {(() => {
                        // Limpiar cualquier JSON residual del mensaje
                        let cleanContent = message.content;
                        
                        // Remover cualquier JSON que contenga showProjectBanner
                        cleanContent = cleanContent.replace(/\{[^{}]*"showProjectBanner"[^{}]*\}/g, '');
                        
                        // Remover objetos JSON más complejos que puedan contener showProjectBanner
                        const jsonRegex = /\{(?:[^{}]|\{[^{}]*\})*"showProjectBanner"(?:[^{}]|\{[^{}]*\})*\}/g;
                        cleanContent = cleanContent.replace(jsonRegex, '');
                        
                        // Limpiar espacios extra y saltos de línea
                        cleanContent = cleanContent.replace(/\n\s*\n/g, '\n').trim();
                        
                        return cleanContent;
                      })()}
                      {message.role === 'assistant' && message.projectBanner && (
                        <div className="mt-3">
                          <ProjectBanner 
                            projectId={message.projectBanner.projectId}
                            projectTitle={message.projectBanner.projectTitle}
                            projectImage={message.projectBanner.projectImage}
                            projectIcon={message.projectBanner.projectIcon}
                            demoUrl={message.projectBanner.demoUrl}
                            codeUrl={message.projectBanner.codeUrl}
                          />
                        </div>
                      )}
                      {message.role === 'assistant' && (
                        <div className="mt-2 text-xs flex justify-between text-gray-500 dark:text-zinc-400">
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
                    <div className="p-2.5 sm:p-3 rounded-lg shadow-sm bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
                      <Spinner size="sm" color="primary" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe un mensaje..."
                    disabled={isLoading}
                    className="flex-1"
                    size="sm"
                    variant="bordered"
                    radius="sm"
                    classNames={{
                      input: `text-sm text-black dark:text-white`,
                      inputWrapper: `border-2 border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900`,
                      innerWrapper: "bg-transparent"
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