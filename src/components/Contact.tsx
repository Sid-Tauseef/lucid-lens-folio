import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sidtauseef20020204@gmail.com",
      link: "mailto:sidtauseef20020204@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 965 324 99 73",
      link: "tel:+919653249973",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      link: null,
    },
  ];

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
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 border-2 border-primary/10 rotate-45 rounded-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-32 bg-gradient-to-b from-primary/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Layout Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-12 lg:mb-16">
          <div>
            <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 mb-4 text-center lg:text-left">
              <span className="text-4xl">📬</span>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground">
                  GET IN
                </h2>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black glow-text -mt-1 lg:-mt-2">
                  TOUCH
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <div className="hidden lg:block w-16 h-px bg-accent"></div>
              <span className="text-sm text-muted-foreground tracking-widest">LET'S CONNECT</span>
            </div>
          </div>
          
          <div className="text-center lg:text-right">
            <p className="text-base lg:text-lg text-muted-foreground max-w-md mx-auto lg:ml-auto">
              Ready to turn ideas into reality? Let's discuss your next project over coffee ☕
            </p>
          </div>
        </div>

        {/* Creative Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Contact Information - Left Sidebar */}
          <div className="lg:col-span-4 space-y-4 lg:space-y-6 order-2 lg:order-1">
            {/* Quick Contact */}
            <div className="glass-card p-4 lg:p-6 space-y-4 lg:space-y-6">
              <h3 className="text-lg font-bold text-primary flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                CONTACT INFO
              </h3>
              
              {contactInfo.map((info, index) => (
                <div key={index} className="group text-center lg:text-left">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 glass-card rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0">
                      <info.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex-1 lg:flex-none">
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        {info.label}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social & Availability */}
            <div className="glass-card p-4 lg:p-6 space-y-4 lg:space-y-6">
              <h4 className="text-lg font-bold text-accent flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                SOCIAL LINKS
              </h4>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center lg:justify-start space-x-4 group hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-8 h-8 lg:w-10 lg:h-10 glass-card rounded-full flex items-center justify-center">
                      <link.icon className="h-4 w-4 text-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="pt-4 border-t border-glass-border/50">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                  </div>
                  <span className="text-sm text-green-500 font-medium">Available for projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Main Area */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="glass-card p-6 lg:p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-foreground">Send Message</h3>
                <div className="text-2xl">✨</div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-foreground uppercase tracking-wide">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass-card border-glass-border bg-transparent focus:ring-primary h-10 lg:h-12"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-foreground uppercase tracking-wide">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass-card border-glass-border bg-transparent focus:ring-primary h-10 lg:h-12"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-bold text-foreground uppercase tracking-wide">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="glass-card border-glass-border bg-transparent focus:ring-primary h-10 lg:h-12"
                    placeholder="Project discussion, collaboration, etc."
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-foreground uppercase tracking-wide">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="glass-card border-glass-border bg-transparent focus:ring-primary resize-none text-sm lg:text-base"
                    placeholder="Tell me about your project, timeline, budget, and what you're looking for..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full glass-button h-12 lg:h-14 text-base lg:text-lg group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-flex items-center space-x-6 glass-card p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl">🤝</div>
            <div>
              <div className="text-lg font-bold text-foreground">Prefer a quick call?</div>
              <div className="text-sm text-muted-foreground">Let's schedule a 15-minute chat</div>
            </div>
            <Button
              variant="outline"
              className="glass-card border-glass-border hover:bg-glass-bg/50"
              onClick={() => window.open("tel:+919653249973")}
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;