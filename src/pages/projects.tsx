import React from "react";
import { Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ProjectCard } from "../components/project-card";
import { projects } from "../data/projects";
import photographyProjects from "../data/photography";

export const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [sortOrder, setSortOrder] = React.useState<"recent" | "oldest">("recent");
  
  // Main categories to display
  const mainCategories = ["OpenAI", "UI/UX", "Fotografía"];
  
  // Filter and sort projects based on search query, selected category, and sort order
  const filteredProjects = React.useMemo(() => {
    // Determine which projects to show based on category
    const projectsToShow = selectedCategory === 'Fotografía' 
      ? photographyProjects 
      : projects;

    // If it's 'all' or 'featured' and not in photography, include only regular projects
    const filtered = selectedCategory === 'all' || selectedCategory === 'featured'
      ? projects
      : projectsToShow;
      
    const matchedProjects = filtered.filter(project => {
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

    // Sort projects by date
    return matchedProjects.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      
      return sortOrder === "recent" ? dateB - dateA : dateA - dateB;
    });
  }, [searchQuery, selectedCategory, sortOrder]);

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
        
        <div className="mb-8">
          {/* Category filters */}
          <div className="mb-4 overflow-x-auto">
            <div className="flex flex-nowrap md:flex-wrap gap-2 pb-2 md:pb-0">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === 'all' 
                    ? 'bg-primary text-white' 
                    : 'bg-default-100 hover:bg-default-200 dark:bg-default-50/10 dark:hover:bg-default-50/20'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setSelectedCategory('featured')}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === 'featured' 
                    ? 'bg-primary text-white' 
                    : 'bg-default-100 hover:bg-default-200 dark:bg-default-50/10 dark:hover:bg-default-50/20'
                }`}
              >
                Destacados
              </button>
              {mainCategories.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedCategory(tag)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === tag 
                      ? 'bg-primary text-white' 
                      : 'bg-default-100 hover:bg-default-200 dark:bg-default-50/10 dark:hover:bg-default-50/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* Sort buttons */}
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setSortOrder('recent')}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${
                sortOrder === 'recent' 
                  ? 'bg-primary text-white' 
                  : 'bg-default-100 hover:bg-default-200 dark:bg-default-50/10 dark:hover:bg-default-50/20'
              }`}
            >
              <Icon icon="lucide:arrow-down" className="w-4 h-4" />
              Más Recientes
            </button>
            <button
              onClick={() => setSortOrder('oldest')}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${
                sortOrder === 'oldest' 
                  ? 'bg-primary text-white' 
                  : 'bg-default-100 hover:bg-default-200 dark:bg-default-50/10 dark:hover:bg-default-50/20'
              }`}
            >
              <Icon icon="lucide:arrow-up" className="w-4 h-4" />
              Más Antiguos
            </button>
          </div>
        </div>
        
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
            Mostrando {filteredProjects.length} de {selectedCategory === 'Fotografía' 
              ? photographyProjects.length 
              : selectedCategory === 'all' 
                ? projects.length 
                : selectedCategory === 'featured' 
                  ? projects.filter(p => p.featured).length 
                  : projects.filter(p => p.tags.includes(selectedCategory)).length} proyectos
          </p>
        </div>
      </div>
    </div>
  );
};