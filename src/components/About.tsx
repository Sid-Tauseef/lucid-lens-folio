import { GraduationCap, Award, Trophy, Calendar } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "B.E. Information Technology",
      subtitle: "M.H. Saboo Siddik College Of Engineering",
      description: "CGPA: 9.05/10.0 (2021-2025)",
      color: "text-primary",
    },
    {
      icon: Award,
      title: "MongoDB Python Developer",
      subtitle: "Professional Certification",
      description: "Successfully completed MongoDB Python Developer Path",
      color: "text-accent",
    },
    {
      icon: Trophy,
      title: "Smart India Hackathon",
      subtitle: "Internal Competition Winner",
      description: "Successfully cleared the internal round and advanced to nationals",
      color: "text-primary",
    },
    {
      icon: Calendar,
      title: "Semicode 2024",
      subtitle: "Programming Competition",
      description: "Advanced to Round 2 after successfully clearing Round 1",
      color: "text-accent",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-px h-32 bg-gradient-to-b from-accent/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-px h-24 bg-gradient-to-t from-primary/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Diagonal Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Title & Journey */}
          <div className="lg:col-span-8 space-y-12">
            {/* Section Title */}
            <div className="relative">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-px bg-primary"></div>
                <h2 className="text-5xl md:text-6xl font-black text-foreground">
                  ABOUT
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
              <div className="mt-2 ml-20">
                <span className="text-lg text-accent font-medium tracking-widest">THE STORY</span>
              </div>
            </div>

            {/* Story in Magazine Style */}
            <div className="space-y-8">
              {/* Intro Quote */}
              <div className="glass-card p-6 border-l-4 border-primary">
                <p className="text-xl italic text-muted-foreground leading-relaxed">
                  "Bridging creativity and technology through code, transforming ideas into digital reality."
                </p>
              </div>

              {/* Story Blocks */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-foreground">01</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary">The Beginning</h3>
                  </div>
                  <p className="text-muted-foreground">
                    IT graduate from M.H. Saboo Siddik College with 9.05 CGPA. Started with curiosity about 
                    how things work behind the screen.
                  </p>
                </div>

                <div className="glass-card p-6 space-y-4 md:mt-12">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-accent-foreground">02</span>
                    </div>
                    <h3 className="text-lg font-bold text-accent">The Evolution</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Mastered full-stack development with React.js, Node.js, and Express.js. 
                    Built applications that solve real-world problems.
                  </p>
                </div>

                <div className="glass-card p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-foreground">03</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary">The Innovation</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Expanded into ML/AI, developing models with high accuracy rates and 
                    integrating them into mobile applications.
                  </p>
                </div>

                <div className="glass-card p-6 space-y-4 md:mt-12">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-accent-foreground">04</span>
                    </div>
                    <h3 className="text-lg font-bold text-accent">The Future</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Ready to create impactful digital solutions while staying at the 
                    forefront of technological advancement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Achievements Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold text-accent mb-6 flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                MILESTONES
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="relative pl-6 pb-6 border-l-2 border-glass-border last:border-l-0 last:pb-0 group hover:border-primary transition-colors duration-300"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${achievement.color === 'text-primary' ? 'bg-primary' : 'bg-accent'} group-hover:scale-125 transition-transform duration-300`}></div>
                    
                    <div className="glass-card p-4 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center space-x-2 mb-2">
                        <achievement.icon className={`h-4 w-4 ${achievement.color}`} />
                        <h4 className="font-semibold text-foreground text-sm">
                          {achievement.title}
                        </h4>
                      </div>
                      <p className="text-xs font-medium text-primary mb-1">
                        {achievement.subtitle}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Quick Info */}
              <div className="mt-8 glass-card p-6">
                <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">
                  Quick Contact
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Mumbai, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">+91 965 324 99 73</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground text-xs">sidtauseef20020204@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;