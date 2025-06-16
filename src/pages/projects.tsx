import React from "react";
import { Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ProjectCard } from "../components/project-card";
import { projects } from "../data/projects";
import photographyProjects from "../data/photography";
import { useLanguage } from "../components/language-switcher";
import { getProjectTranslation, uiTranslations } from "../data/translations";

export const Projects: React.FC = () => {
  // Get current language from context
  const { language } = useLanguage();
  
  // Get UI translations based on language
  const t = uiTranslations[language as "es" | "en"];
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [sortOrder, setSortOrder] = React.useState<"recent" | "oldest">("recent");
  
  // Main categories to display
  const mainCategories = ["OpenAI", "UI/UX", language === "es" ? "Fotografía" : "Photography"];
  
  // Filter and sort projects based on search query, selected category, and sort order
  const filteredProjects = React.useMemo(() => {
    // Determine which projects to show based on category
    const projectsToShow = (selectedCategory === 'Fotografía' || selectedCategory === 'Photography')
      ? photographyProjects 
      : projects;

    // If it's 'all' or 'featured' and not in photography, include only regular projects
    const filtered = selectedCategory === 'all' || selectedCategory === 'featured'
      ? projects
      : projectsToShow;
      
    // Translate projects if language is English
    const translatedProjects = language === "en" 
      ? filtered.map(project => getProjectTranslation(project, language))
      : filtered;
      
    const matchedProjects = translatedProjects.filter(project => {
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
          <h1 className="text-6xl font-bold mb-4">{t.projectsTitle}</h1>
          <p className="text-default-600 max-w-2xl mx-auto">
            {t.projectsDescription}
          </p>
        </motion.div>
        
        <div className="mb-8">
          <Input
            placeholder={t.searchPlaceholder}
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
                {t.allProjects}
              </button>
              <button
                onClick={() => setSelectedCategory('featured')}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === 'featured' 
                    ? 'bg-primary text-white' 
                    : 'bg-default-100 hover:bg-default-200 dark:bg-default-50/10 dark:hover:bg-default-50/20'
                }`}
              >
                {t.featuredProjects}
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
              {t.mostRecent}
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
              {t.oldest}
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
            <h3 className="text-xl font-medium mb-2">{t.noProjectsFound}</h3>
            <p className="text-default-500">
              {t.tryAdjusting}
            </p>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="text-default-500">
            {t.showing} {filteredProjects.length} {t.of} {(selectedCategory === 'Fotografía' || selectedCategory === 'Photography')
              ? photographyProjects.length 
              : selectedCategory === 'all' 
                ? projects.length 
                : selectedCategory === 'featured' 
                  ? projects.filter(p => p.featured).length 
                  : projects.filter(p => p.tags.includes(selectedCategory)).length} {t.projects}
          </p>
        </div>
      </div>
    </div>
  );
};