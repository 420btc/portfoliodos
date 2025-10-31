import React from "react";
import { Icon } from "@iconify/react";
import { Switch, Tooltip, Button } from "@heroui/react";
import { useTheme } from "@heroui/use-theme";

interface ThemeSwitcherProps {
  className?: string;
  compact?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '', compact = false }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };
  
  if (compact) {
    return (
      <Tooltip 
        content={`Cambiar a modo ${isDark ? "claro" : "oscuro"}`}
        placement="bottom"
      >
        <Button
          isIconOnly
          variant="light"
          size="sm"
          onPress={handleToggle}
          className={`min-w-9 w-9 h-9 hover:bg-default-100/50 ${className}`}
        >
          <Icon 
            icon={isDark ? "lucide:moon" : "lucide:sun"} 
            width={20} 
            height={20}
            className="text-foreground"
          />
        </Button>
      </Tooltip>
    );
  }
  
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
              <Icon icon="lucide:sun" className={className} />
            )
          }
        />
      </div>
    </Tooltip>
  );
};