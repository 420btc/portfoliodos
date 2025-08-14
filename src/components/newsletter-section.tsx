import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./language-switcher";

interface NewsletterSectionProps {
  className?: string;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ className = "" }) => {
  const { language } = useLanguage();

  return (
    <section className={`py-20 px-6 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            {language === "es" ? "Newsletter" : "Newsletter"}
          </h2>
          <p className="text-default-500 max-w-2xl mx-auto">
            {language === "es" ? 
              "Mantente al día con las últimas actualizaciones, artículos y novedades del mundo del desarrollo." :
              "Stay up to date with the latest updates, articles and news from the development world."
            }
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <iframe
            src="https://news-pi-seven.vercel.app"
            className="w-full h-[600px] md:h-[800px] border-0"
            title="Newsletter"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};