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

        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {(skillsData as SkillCategory[]).map((category, categoryIndex) => (
            <div
              key={category.category}
              className="glass-card p-8 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-primary">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = getIcon(skill.icon);
                  
                  return (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-glass-bg/50 text-accent group-hover:text-primary transition-colors duration-300">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-glass-bg/30 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold glow-text mb-2">4+</div>
            <div className="text-muted-foreground">Years of Learning</div>
          </div>
          
          <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold glow-text mb-2">15+</div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </div>
          
          <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold glow-text mb-2">4+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;