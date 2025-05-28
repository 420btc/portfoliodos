import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { TbPhotoDollar } from "react-icons/tb";
import { useLanguage } from "./language-switcher";

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <footer className="w-full py-8 px-6 bg-content1">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:code" width={24} height={24} className="text-primary" />
              <span className="font-semibold text-lg">Carlos Freire</span>
            </div>
            <p className="text-default-500 mb-4 max-w-md">
              {language === "es" ? 
                "Desarrollador full-stack especializado en aplicaciones web modernas, con pasión por la fotografía, drones y escritura creativa." :
                "Full stack developer specializing in modern web applications, with a passion for photography, drones, and creative writing."
              }
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/420btc" isExternal aria-label="GitHub">
                <Icon icon="lucide:github" width={20} height={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/carlos-pastor-freire-89790a27a/" isExternal aria-label="LinkedIn">
                <Icon icon="lucide:linkedin" width={20} height={20} />
              </Link>
              <Link href="https://x.com/CarlosFreire0" isExternal aria-label="Twitter">
                <Icon icon="lucide:twitter" width={20} height={20} />
              </Link>
              <Link href="https://www.instagram.com/carlosfreire1/" isExternal aria-label="Instagram">
                <Icon icon="lucide:instagram" width={20} height={20} />
              </Link>
              <Link href="https://www.redbubble.com/es/people/carlosfreire/shop" isExternal aria-label="Redbubble">
                <TbPhotoDollar size={20} className="text-primary hover:text-default-500 transition-colors" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">{language === "es" ? "Navegación" : "Navigation"}</h3>
            <ul className="space-y-2">
              <li>
                <Link as={RouterLink} to="/" color="foreground">{language === "es" ? "Inicio" : "Home"}</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/projects" color="foreground">{language === "es" ? "Proyectos" : "Projects"}</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/novel" color="foreground">{language === "es" ? "Novela" : "Novel"}</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/about" color="foreground">{language === "es" ? "Sobre Mí" : "About"}</Link>
              </li>
              <li>
                <Link as={RouterLink} to="/contact" color="foreground">{language === "es" ? "Contacto" : "Contact"}</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">{language === "es" ? "Contacto" : "Contact"}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" width={16} height={16} />
                <Link href="mailto:carlos@devportfolio.com" color="foreground">carlosfreireph@gmail.com</Link>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:map-pin" width={16} height={16} />
                <span className="text-default-500">Málaga, España</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Divider className="my-6" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-default-500 text-sm">
            © {new Date().getFullYear()} DevPortfolio. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" color="foreground" size="sm">{language === "es" ? "Política de Privacidad" : "Privacy Policy"}</Link>
            <Link href="#" color="foreground" size="sm">{language === "es" ? "Términos de Servicio" : "Terms of Service"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};