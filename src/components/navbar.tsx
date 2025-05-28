import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { 
  Navbar as HeroNavbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher } from "./language-switcher";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  
  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Sobre Mí", path: "/about" },
    { name: "Proyectos", path: "/projects" },
    { name: "Novela", path: "/novel" },
    { name: "Contacto", path: "/contact" },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeroNavbar 
      isBordered 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="bg-background/70 backdrop-blur-md"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden dark:text-white text-black"
        />
        <NavbarBrand className="gap-4">
          <RouterLink to="/" className="flex items-center gap-2">
            <Icon icon="lucide:code" width={24} height={24} className="text-primary" />
            <p className="font-semibold text-inherit text-2xl">Carlos Freire</p>
          </RouterLink>
          <div className="sm:hidden ml-4">
            <ThemeSwitcher />
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.path} isActive={location.pathname === item.path}>
            <Link 
              as={RouterLink} 
              to={item.path}
              color={location.pathname === item.path ? "primary" : "foreground"}
              className="font-medium"
            >
              {item.name}
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
            <NavbarMenuItem key={`${item.name}-${index}`} className="w-full sm:w-auto">
              <Link
                as={RouterLink}
                to={item.path}
                color={location.pathname === item.path ? "primary" : "foreground"}
                className="w-full text-center sm:text-left"
                size="lg"
                onClick={handleMenuItemClick}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroNavbar>
  );
};