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
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with a strong foundation in both frontend and backend technologies, 
            combined with expertise in machine learning and data science.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div className="space-y-6">
            <div className="glass-card p-8 animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a recent Information Technology graduate from M.H. Saboo Siddik College of Engineering, 
                  I've maintained an impressive CGPA of 9.05/10.0 while diving deep into the world of 
                  software development and machine learning.
                </p>
                <p>
                  My journey began with web development, where I discovered my passion for creating 
                  user-friendly applications using React.js and Node.js. This naturally evolved into 
                  exploring the backend ecosystem with Express.js and MongoDB, allowing me to build 
                  full-stack applications.
                </p>
                <p>
                  What sets me apart is my ability to bridge the gap between traditional web development 
                  and cutting-edge AI/ML technologies. I've successfully developed machine learning models 
                  with impressive accuracy rates and integrated them seamlessly into mobile applications.
                </p>
                <p>
                  Currently based in Mumbai, I'm eager to contribute my technical expertise and 
                  creative problem-solving skills to real-world challenges while continuing to 
                  learn and grow in this ever-evolving field.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent mb-8">Education & Achievements</h3>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-glass-bg/50 ${achievement.color}`}>
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-sm font-medium text-primary mb-2">
                        {achievement.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-foreground">Get In Touch</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="font-medium">📍</span>
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">📞</span>
                <span>+91 965 324 99 73</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">✉️</span>
                <span>sidtauseef20020204@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;