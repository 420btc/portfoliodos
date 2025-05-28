import React from "react";
import { Button, Tooltip } from "@heroui/react";

// Creamos un contexto para el idioma
export const LanguageContext = React.createContext({
  language: "es",
  toggleLanguage: () => {}
});

export const useLanguage = () => React.useContext(LanguageContext);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = React.useState("es");

  const toggleLanguage = () => {
    setLanguage(prev => prev === "es" ? "en" : "es");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Tooltip
      content={language === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
      placement="bottom"
    >
      <Button
        isIconOnly
        variant="light"
        className="text-foreground hover:text-primary transition-colors min-w-8 h-8"
        size="sm"
        onPress={toggleLanguage}
        aria-label={language === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
      >
        <span className="text-lg">
          {language === "es" ? "🇬🇧" : "🇪🇸"}
        </span>
      </Button>
    </Tooltip>
  );
};