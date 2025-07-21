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
  const mainCategories = ["OpenAI", "Trading", "Portfolios", language === "es" ? "Fotografía" : "Photography"];
  
  // Category colors
  const getCategoryColor = (category: string, isSelected: boolean) => {
    const colors = {
      'all': isSelected ? 'bg-blue-500 text-white' : 'bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-800/30 text-blue-700 dark:text-blue-300',
      'featured': isSelected ? 'bg-yellow-500 text-white' : 'bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:hover:bg-yellow-800/30 text-yellow-700 dark:text-yellow-300',
      'OpenAI': isSelected ? 'bg-green-500 text-white' : 'bg-green-100 hover:bg-green-200 dark:bg-green-900/20 dark:hover:bg-green-800/30 text-green-700 dark:text-green-300',
      'UI/UX': isSelected ? 'bg-purple-500 text-white' : 'bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/20 dark:hover:bg-purple-800/30 text-purple-700 dark:text-purple-300',
      'Trading': isSelected ? 'bg-orange-500 text-white' : 'bg-orange-100 hover:bg-orange-200 dark:bg-orange-900/20 dark:hover:bg-orange-800/30 text-orange-700 dark:text-orange-300',
      'Portfolios': isSelected ? 'bg-indigo-500 text-white' : 'bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/20 dark:hover:bg-indigo-800/30 text-indigo-700 dark:text-indigo-300',
      'Fotografía': isSelected ? 'bg-pink-500 text-white' : 'bg-pink-100 hover:bg-pink-200 dark:bg-pink-900/20 dark:hover:bg-pink-800/30 text-pink-700 dark:text-pink-300',
      'Photography': isSelected ? 'bg-pink-500 text-white' : 'bg-pink-100 hover:bg-pink-200 dark:bg-pink-900/20 dark:hover:bg-pink-800/30 text-pink-700 dark:text-pink-300',
    };
    return colors[category as keyof typeof colors] || (isSelected ? 'bg-gray-500 text-white' : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-900/20 dark:hover:bg-gray-800/30 text-gray-700 dark:text-gray-300');
  };
  
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
          <div className="mb-8 overflow-x-auto">
            <div className="flex flex-nowrap md:flex-wrap gap-2 pb-2 md:pb-0">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${getCategoryColor('all', selectedCategory === 'all')}`}
              >
                {t.allProjects}
              </button>
              <button
                onClick={() => setSelectedCategory('featured')}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${getCategoryColor('featured', selectedCategory === 'featured')}`}
              >
                {t.featuredProjects}
              </button>
              {mainCategories.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedCategory(tag)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${getCategoryColor(tag, selectedCategory === tag)}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* Sort buttons */}
          <div className="flex justify-center gap-2 pt-4 border-t border-default-200 dark:border-default-700">
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