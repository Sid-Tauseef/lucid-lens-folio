import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-glass-border/30">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left Section - Name & Quote */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold glow-text mb-2">
                Tauseeb Ahmed
              </h3>
              <p className="text-muted-foreground text-sm">
                Building the future, one line of code at a time
              </p>
            </div>

            {/* Center Section - Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 hover:scale-110 transition-all duration-300 group"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Right Section - Back to Top */}
            <div className="text-center md:text-right">
              <button
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                Back to Top ↑
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-glass-border/30 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-muted-foreground text-sm">
                © {currentYear} Tauseeb Ahmed. All rights reserved.
              </div>

              {/* Made with love */}
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;