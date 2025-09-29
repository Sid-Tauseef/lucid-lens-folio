import { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import skillsData from "@/data/skills.json";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent || Icons.Code;
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        {/* Modern Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
          {(skillsData as SkillCategory[]).map((category, categoryIndex) => {
            const skillCount = category.skills.length;
            const isLargeCategory = skillCount > 4;
            
            return (
              <div
                key={category.category}
                className={`glass-card p-6 break-inside-avoid mb-8 group hover:scale-[1.02] transition-all duration-500 hover:shadow-glow cursor-pointer ${
                  isLargeCategory ? 'md:col-span-1' : ''
                }`}
                style={{ 
                  animationDelay: `${categoryIndex * 0.15}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="relative overflow-hidden">
                  {/* Category Header with Enhanced Design */}
                  <div className="text-center mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h3 className="text-xl font-bold glow-text relative z-10 group-hover:scale-105 transition-transform duration-300">
                      {category.category}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-3 group-hover:w-20 transition-all duration-500" />
                  </div>
                  
                  {/* Interactive Skills Grid */}
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => {
                      const IconComponent = getIcon(skill.icon);
                      
                      return (
                        <div 
                          key={skill.name} 
                          className="group/skill relative overflow-hidden"
                          style={{ 
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`,
                            animationFillMode: 'both'
                          }}
                        >
                          {/* Skill Item with Micro-interactions */}
                          <div className="flex items-center justify-between mb-3 relative z-10">
                            <div className="flex items-center space-x-3">
                              <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-glass-bg/70 to-glass-bg/30 
                                            border border-glass-border/30 group-hover/skill:border-primary/50
                                            group-hover/skill:shadow-[0_0_20px_hsla(var(--primary),0.3)]
                                            transition-all duration-300 group-hover/skill:scale-110">
                                <IconComponent className="h-4 w-4 text-accent group-hover/skill:text-primary 
                                                         transition-all duration-300 group-hover/skill:rotate-12" />
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 
                                               rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                              </div>
                              <span className="font-medium text-foreground group-hover/skill:text-primary 
                                             transition-colors duration-300 group-hover/skill:translate-x-1 
                                             transform transition-transform">
                                {skill.name}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-bold text-primary group-hover/skill:scale-110 
                                             transition-transform duration-300">
                                {skill.level}%
                              </span>
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent 
                                            opacity-60 group-hover/skill:opacity-100 group-hover/skill:scale-125 
                                            transition-all duration-300" />
                            </div>
                          </div>
                          
                          {/* Enhanced Progress Bar with Gradient Animation */}
                          <div className="relative w-full bg-glass-bg/20 rounded-full h-2.5 overflow-hidden 
                                        shadow-inner border border-glass-border/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                          translate-x-[-100%] group-hover/skill:translate-x-[200%] transition-transform 
                                          duration-1000 ease-out" />
                            <div
                              className="h-full bg-gradient-to-r from-primary via-accent to-primary 
                                       rounded-full transition-all duration-1500 ease-out relative
                                       shadow-[0_0_10px_hsla(var(--primary),0.5)]
                                       hover:shadow-[0_0_20px_hsla(var(--primary),0.8)]"
                              style={{
                                width: isVisible ? `${skill.level}%` : "0%",
                                transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                                backgroundSize: '200% 100%',
                                animation: isVisible ? 'gradient-shift 3s ease-in-out infinite' : 'none'
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                            </div>
                          </div>
                          
                          {/* Hover Effect Background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 
                                        rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity 
                                        duration-300 -z-10" />
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Category Stats */}
                  <div className="mt-6 pt-4 border-t border-glass-border/30">
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{skillCount} Skills</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>
                          {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / skillCount)}% Avg
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Skills Summary with Interactive Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center group hover:scale-105 hover:rotate-1 transition-all duration-500 cursor-pointer">
            <div className="relative mb-4">
              <div className="text-4xl font-bold glow-text mb-2 group-hover:scale-110 transition-transform duration-300">4+</div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full 
                            animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
            </div>
            <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
              Years of Learning
            </div>
            <div className="mt-3 w-full h-1 bg-glass-bg/30 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full w-0 
                            group-hover:w-full transition-all duration-1000 delay-200"></div>
            </div>
          </div>
          
          <div className="glass-card p-8 text-center group hover:scale-105 hover:-rotate-1 transition-all duration-500 cursor-pointer">
            <div className="relative mb-4">
              <div className="text-4xl font-bold glow-text mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full 
                            animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
            </div>
            <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
              Technologies Mastered
            </div>
            <div className="mt-3 w-full h-1 bg-glass-bg/30 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-accent to-primary rounded-full w-0 
                            group-hover:w-full transition-all duration-1000 delay-300"></div>
            </div>
          </div>
          
          <div className="glass-card p-8 text-center group hover:scale-105 hover:rotate-1 transition-all duration-500 cursor-pointer">
            <div className="relative mb-4">
              <div className="text-4xl font-bold glow-text mb-2 group-hover:scale-110 transition-transform duration-300">4+</div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full 
                            animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
            </div>
            <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
              Projects Completed
            </div>
            <div className="mt-3 w-full h-1 bg-glass-bg/30 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full w-0 
                            group-hover:w-full transition-all duration-1000 delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;