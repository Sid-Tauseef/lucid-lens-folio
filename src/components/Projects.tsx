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
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning web development, machine learning, and mobile applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`glass-card transition-all duration-300 ${
                selectedCategory === category 
                  ? "glass-button" 
                  : "border-glass-border hover:bg-glass-bg/50"
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card p-6 group hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-glass-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 glass-card px-3 py-1">
                    <span className="text-sm font-medium text-accent">Featured</span>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 glass-card px-3 py-1">
                  <span className="text-sm font-medium text-primary">{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-glass-bg/50 text-accent text-sm rounded-full border border-glass-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4 pt-4">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-card border-glass-border hover:bg-glass-bg/50 group/btn"
                      onClick={() => window.open(project.github!, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:text-primary transition-colors duration-300" />
                      Code
                    </Button>
                  )}
                  
                  {project.live && (
                    <Button
                      size="sm"
                      className="glass-button group/btn"
                      onClick={() => window.open(project.live!, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Interested in Collaborating?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <Button
              className="glass-button"
              onClick={() => window.open("mailto:sidtauseef20020204@gmail.com")}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;