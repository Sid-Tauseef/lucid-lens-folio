import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Sid-Tauseef",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/siddiqui-tauseef-ahmed",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:sidtauseef20020204@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 900" fill="none">
          <path 
            d="M0 0L1440 0L1440 600L0 900Z" 
            fill="url(#hero-gradient)" 
            className="opacity-10"
          />
          <defs>
            <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-1/4 w-32 h-32 border-2 border-primary/20 rotate-45 floating-animation"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-accent/10 rotate-12 floating-animation" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 border border-accent/30 rounded-full floating-animation" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center glass-card px-4 py-2 animate-fade-in mx-auto lg:mx-0">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            {/* Name with creative typography */}
            <div className="space-y-2 lg:space-y-4 animate-slide-in">
              <div className="relative">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
                  <span className="text-foreground">TAU</span>
                  <span className="glow-text">SEEB</span>
                </h1>
                <div className="absolute -right-2 lg:-right-4 top-0 w-3 h-3 lg:w-4 lg:h-4 bg-accent rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-muted-foreground tracking-wider">
                AHMED
              </h2>
            </div>

            {/* Role with animated text */}
            <div className="space-y-1 lg:space-y-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-lg lg:text-xl text-accent font-medium">Full Stack Developer</div>
              <div className="text-lg lg:text-xl text-primary font-medium">+ ML Engineer</div>
            </div>

            {/* Description */}
            <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Crafting digital experiences that bridge creativity and technology. 
              Specializing in full-stack applications and machine learning solutions.
            </p>

            {/* Action Area */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <Button
                onClick={() => scrollToAbout()}
                className="glass-button group px-6 lg:px-8 py-3 w-full sm:w-auto"
              >
                View Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
              
              <div className="flex items-center space-x-3 lg:space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 lg:w-12 lg:h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <link.icon className="h-4 w-4 lg:h-5 lg:w-5 text-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="lg:col-span-5 relative animate-scale-in order-first lg:order-last" style={{ animationDelay: "0.4s" }}>
            {/* Main Image with creative framing */}
            <div className="relative">
              {/* Background frame */}
              <div className="absolute inset-0 glass-card rotate-3 scale-110 opacity-20 lg:opacity-30"></div>
              <div className="absolute inset-0 glass-card -rotate-2 scale-105 opacity-30 lg:opacity-50"></div>
              
              {/* Main image container */}
              <div className="relative glass-card p-1 pulse-glow aspect-square max-w-sm mx-auto lg:max-w-none">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-6xl lg:text-8xl">👨‍💻</div>
                </div>
              </div>
              
              {/* Tech stack floating elements - Hidden on mobile for cleaner look */}
              <div className="hidden lg:block absolute -top-8 -left-8 glass-card px-4 py-2 rotate-12 floating-animation">
                <span className="text-sm font-bold text-primary">React</span>
              </div>
              <div className="hidden lg:block absolute top-1/4 -right-10 glass-card px-4 py-2 -rotate-6 floating-animation" style={{ animationDelay: "1s" }}>
                <span className="text-sm font-bold text-accent">Python</span>
              </div>
              <div className="hidden lg:block absolute -bottom-6 left-1/4 glass-card px-4 py-2 rotate-6 floating-animation" style={{ animationDelay: "2s" }}>
                <span className="text-sm font-bold text-primary">Node.js</span>
              </div>
              <div className="hidden lg:block absolute bottom-1/3 -right-12 glass-card px-4 py-2 -rotate-12 floating-animation" style={{ animationDelay: "3s" }}>
                <span className="text-sm font-bold text-accent">ML</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats/Info Bar */}
        <div className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 items-center space-x-8 glass-card px-6 py-3 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="text-center">
            <div className="text-xl font-bold text-primary">4+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">Projects</div>
          </div>
          <div className="w-px h-8 bg-glass-border"></div>
          <div className="text-center">
            <div className="text-xl font-bold text-accent">9.05</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">CGPA</div>
          </div>
          <div className="w-px h-8 bg-glass-border"></div>
          <div className="text-center">
            <div className="text-xl font-bold text-primary">2024</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">Graduate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;