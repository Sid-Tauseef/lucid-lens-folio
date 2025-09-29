import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

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
    <section id="home" className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Background Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-accent animate-slide-in">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold glow-text leading-tight">
                Tauseeb Ahmed
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Full Stack Developer &{" "}
                <span className="glow-text">ML Engineer</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Recent IT graduate with expertise in developing web applications, machine learning models, 
              and recommendation systems. Passionate about creating innovative software solutions 
              that make a real-world impact.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 hover:scale-110 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <link.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToAbout()}
                className="glass-button group"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
              
              <Button
                variant="outline"
                className="glass-card border-glass-border hover:bg-glass-bg/50"
                onClick={() => window.open("mailto:sidtauseef20020204@gmail.com")}
              >
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <div className="glass-card p-6 pulse-glow">
                <img
                  src={heroImage}
                  alt="Tauseeb Ahmed - Full Stack Developer"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Skills */}
              <div className="absolute -top-4 -left-4 glass-card px-3 py-2 floating-animation">
                <span className="text-sm font-medium text-primary">React.js</span>
              </div>
              <div className="absolute top-1/4 -right-6 glass-card px-3 py-2 floating-animation" style={{ animationDelay: "1s" }}>
                <span className="text-sm font-medium text-accent">Python</span>
              </div>
              <div className="absolute -bottom-4 left-1/3 glass-card px-3 py-2 floating-animation" style={{ animationDelay: "2s" }}>
                <span className="text-sm font-medium text-primary">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-muted-foreground hover:text-primary transition-colors duration-300">
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;