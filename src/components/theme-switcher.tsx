import React from "react";
import { Icon } from "@iconify/react";
import { Switch, Tooltip } from "@heroui/react";
import { useTheme } from "@heroui/use-theme";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };
  
  return (
    <Tooltip 
      content={`Cambiar a modo ${isDark ? "claro" : "oscuro"}`}
      placement="bottom"
    >
      <div className={`flex items-center ${className}`}>
        <Switch 
          isSelected={isDark}
          onValueChange={handleToggle}
          size="sm"
          color="primary"
          className="mx-1"
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <Icon icon="lucide:moon" className={className} />
            ) : (
              <Icon icon="lucide:moon" className={className} />
            )
          }
        />
      </div>
    </Tooltip>
  );
};