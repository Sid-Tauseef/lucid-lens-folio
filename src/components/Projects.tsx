import { useState } from "react";
import { Github, ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/projects.json";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string | null;
  live: string | null;
  image: string;
  featured: boolean;
  category: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...Array.from(new Set((projectsData as Project[]).map(project => project.category)))];
  
  const filteredProjects = selectedCategory === "All" 
    ? projectsData as Project[]
    : (projectsData as Project[]).filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Creative Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-6 lg:mb-8 space-y-6 lg:space-y-0">
            <div>
              <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 mb-4 text-center lg:text-left">
                <span className="text-4xl">🚀</span>
                <div className="space-y-1">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground">
                    PROJECTS
                  </h2>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <div className="hidden lg:block w-12 h-px bg-primary"></div>
                    <span className="text-sm text-accent font-medium tracking-widest">SELECTED WORKS</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Filter Pills */}
            <div className="hidden lg:flex flex-wrap gap-2 justify-center lg:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category 
                      ? "bg-primary text-primary-foreground shadow-glow" 
                      : "glass-card hover:bg-glass-bg/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Filter */}
          <div className="lg:hidden flex flex-wrap gap-2 mb-6 lg:mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "glass-card text-muted-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {filteredProjects.map((project, index) => {
            const isLarge = index === 0 || index === 3;
            const gridClass = isLarge ? "lg:col-span-2" : "lg:col-span-1";
            
            return (
              <div
                key={project.id}
                className={`${gridClass} glass-card p-4 lg:p-6 group hover:scale-[1.02] transition-all duration-500 animate-fade-in cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Layout */}
                <div className={`${isLarge ? 'grid lg:grid-cols-2 gap-4 lg:gap-6' : 'space-y-4'} h-full`}>
                  {/* Image Section */}
                  <div className={`relative overflow-hidden rounded-lg ${isLarge ? 'lg:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        isLarge ? 'h-48 lg:h-64' : 'h-40 lg:h-48'
                      }`}
                    />
                    
                    {/* Overlay with badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 flex space-x-2">
                        {project.github && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github!, "_blank");
                            }}
                            className="w-8 h-8 bg-background/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                          >
                            <Github className="h-4 w-4 text-foreground" />
                          </button>
                        )}
                        {project.live && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.live!, "_blank");
                            }}
                            className="w-8 h-8 bg-primary/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                          >
                            <ExternalLink className="h-4 w-4 text-primary-foreground" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Top badges */}
                    <div className="absolute top-4 left-4 flex space-x-2">
                      {project.featured && (
                        <span className="px-2 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                      <span className="px-2 py-1 bg-background/90 text-foreground text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${isLarge ? 'lg:order-1' : ''} flex flex-col justify-between`}>
                    <div className="space-y-3">
                      <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors duration-300 ${
                        isLarge ? 'text-xl lg:text-2xl' : 'text-lg'
                      }`}>
                        {project.title}
                      </h3>
                      
                      <p className={`text-muted-foreground leading-relaxed ${
                        isLarge ? 'text-sm lg:text-base' : 'text-sm'
                      }`}>
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, isLarge ? 6 : 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-glass-bg/50 text-accent text-xs rounded border border-glass-border/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > (isLarge ? 6 : 3) && (
                          <span className="px-2 py-1 text-muted-foreground text-xs">
                            +{project.technologies.length - (isLarge ? 6 : 3)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 lg:mt-20 text-center">
          <div className="inline-flex items-center space-x-4 glass-card p-8 hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Have a project in mind? I'd love to hear about it.
              </p>
              <Button
                className="glass-button"
                onClick={() => window.open("mailto:sidtauseef20020204@gmail.com")}
              >
                Start a Conversation
              </Button>
            </div>
            <div className="text-4xl animate-bounce">💡</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;