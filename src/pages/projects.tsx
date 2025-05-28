import React from "react";
import { Tabs, Tab, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ProjectCard } from "../components/project-card";
import { projects } from "../data/projects";
import photographyProjects from "../data/photography";

export const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  
  // Main categories to display
  const mainCategories = ["OpenAI", "UI/UX", "Fotografía"];
  
  // Filter projects based on search query and selected category
  const filteredProjects = React.useMemo(() => {
    // Combine regular projects with photography projects when showing all or featured
    const allProjects = selectedCategory === 'Fotografía' ? 
      photographyProjects : 
      (selectedCategory === 'all' || selectedCategory === 'featured') ? 
      [...projects, ...photographyProjects] : 
      projects;
      
    return allProjects.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === "all" || 
        (selectedCategory === "featured" && project.featured) ||
        project.tags.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold mb-4">Mis Proyectos</h1>
          <p className="text-default-600 max-w-2xl mx-auto">
            Una colección de mi trabajo abarcando desarrollo web, fotografía, proyectos con drones y emprendimientos creativos.
          </p>
        </motion.div>
        
        <div className="mb-8">
          <Input
            placeholder="Buscar proyectos..."
            value={searchQuery}
            onValueChange={setSearchQuery}
            startContent={<Icon icon="lucide:search" className="text-default-400" />}
            isClearable
            className="max-w-md mx-auto"
          />
        </div>
        
        <Tabs 
          aria-label="Categorías de proyectos" 
          selectedKey={selectedCategory}
          onSelectionChange={key => setSelectedCategory(key as string)}
          className="mb-8"
          variant="light"
          color="primary"
        >
          <Tab key="all" title="Todos" />
          <Tab key="featured" title="Destacados" />
          {mainCategories.map(tag => (
            <Tab key={tag} title={tag} />
          ))}
        </Tabs>
        
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Icon icon="lucide:search-x" className="text-default-400 w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">No se encontraron proyectos</h3>
            <p className="text-default-500">
              Intenta ajustar tu búsqueda o filtro para encontrar lo que estás buscando.
            </p>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="text-default-500">
            Mostrando {filteredProjects.length} de {selectedCategory === 'Fotografía' ? 
              photographyProjects.length : 
              (selectedCategory === 'all' || selectedCategory === 'featured') ? 
              projects.length + photographyProjects.length : 
              projects.length} proyectos
          </p>
        </div>
      </div>
    </div>
  );
};