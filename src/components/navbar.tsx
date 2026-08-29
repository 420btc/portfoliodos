import React, { useContext } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { 
  Navbar as HeroNavbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Tooltip
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher, LanguageContext } from "./language-switcher";

// Definir las traducciones de los elementos del menú
const translations = {
  home: { es: "Inicio", en: "Home" },
  about: { es: "Sobre Mí", en: "About Me" },
  projects: { es: "Proyectos", en: "Projects" },
  novel: { es: "Novela", en: "Novel" },
  contact: { es: "Contacto", en: "Contact" },
  comingSoon: { es: "Próximamente", en: "Coming Soon" }
};

// Definir el tipo para los ítems del menú
interface MenuItem {
  id: keyof typeof translations;
  path: string;
}

// Componente de navegación principal
export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { language } = useContext(LanguageContext);
  
  const menuItems: MenuItem[] = [
    { id: "home", path: "/" },
    { id: "projects", path: "/projects" },
    { id: "novel", path: "/novel" },
    { id: "contact", path: "/contact" },
    { id: "about", path: "/about" },
  ];

  // Función para obtener el texto traducido
  const t = (key: keyof typeof translations) => {
    return translations[key]?.[language as keyof typeof translations.home] || key;
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeroNavbar 
      isBordered 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="bg-background/70 backdrop-blur-sm"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden dark:text-white text-black"
        />
        <NavbarBrand className="gap-4 flex-1 min-w-0">
          <RouterLink to="/" className="flex items-center gap-2 min-w-0">
            <Icon icon="lucide:code" width={24} height={24} className="text-primary flex-shrink-0" />
            <p className="font-semibold text-inherit text-xl sm:text-2xl truncate">Carlos Freire</p>
          </RouterLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Theme switcher para móvil - posicionado a la derecha */}
      <NavbarContent justify="end" className="sm:hidden absolute right-4 top-1/2 transform -translate-y-1/2" style={{ transform: 'translateY(calc(-50% + 4px))' }}>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.path} isActive={location.pathname === item.path}>
            <Link 
              as={RouterLink} 
              to={item.path} 
              color={location.pathname === item.path ? "primary" : "foreground"}
              className="font-medium hover:text-primary transition-colors"
            >
              {t(item.id)}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      
      <NavbarContent justify="end" className="gap-2">
        <NavbarItem className="hidden sm:flex">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <LanguageSwitcher />
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu className="pt-4 px-6">
        <div className="flex flex-col items-center sm:items-start gap-2">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.id}-${index}`} className="w-full sm:w-auto">
              <Link
                as={RouterLink}
                to={item.path}
                color={location.pathname === item.path ? "primary" : "foreground"}
                className="w-full text-center sm:text-left"
                size="lg"
                onClick={handleMenuItemClick}
              >
                {t(item.id)}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-divider w-full">
            <LanguageSwitcher />
          </div>
        </div>
      </NavbarMenu>
    </HeroNavbar>
  );
};
