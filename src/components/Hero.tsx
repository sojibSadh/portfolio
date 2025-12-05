import { ArrowUpRight, Mail, Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Hero = () => {
  const techTags = ["React", "Javascript", "Node.js", "PostgreSQL"];

  const socialLinks = [
    { icon: Github, href: "https://github.com/sojibSadh" },
    { icon: Linkedin, href: "https://www.linkedin.com/" },
    { icon: Instagram, href: "https://www.facebook.com/SajeebMahmud99" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background" />
      <div className="absolute inset-0 ambient-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-6rem)]">
        {/* Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left animate-fade-in">
          {/* Status Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/30 backdrop-blur-sm mb-6">
            <span>✨</span>
            <span className="text-sm text-muted-foreground">Ready to innovate</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
            <span className="text-primary text-glow"> React </span>
            <span className="text-primary "> Developer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light text-primary text-muted-foreground mb-6 inline-block  pb-1">
            I help founders turn ideas
            into seamless digital experiences
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
            Enhancing digital experiences that are smooth, scalable, and made to impress.
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-md bg-muted/50 border border-border text-sm text-foreground/90 hover:bg-muted transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <a
              href="#portfolio"
              className="btn-primary-glow px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              Projects
              <ArrowUpRight size={18} />
            </a>
            <a
              href="#contact"
              className="btn-secondary-glow px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact
              <Mail size={18} />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-foreground social-icon-glow transition-all duration-300 hover:-translate-y-1"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="flex-1 flex justify-center items-center animate-float" style={{ animationDelay: "0.3s" }}>
          <div className="relative w-60 h-60 md:w-80 md:h-80">
            {/* Glowing background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl" />

            {/* Developer illustration placeholder */}
            <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-card to-muted border border-border/50 flex items-center justify-center overflow-hidden">
              <div className="text-center p-5">
                <div className="flex items-center justify-center mb-6">
                  <img className="grayscale  rounded-full w-[50%] h-[50%]" src="https://i.ibb.co.com/5x18sdfv/Screenshot-2.png" alt="sajib" />
                  {/* <span className="text-8xl mb-4">💻</span> */}
                </div>
                <p className="text-muted-foreground text-primary text-sm">Developer Shajib Ahmed</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary animate-glow" />
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-secondary" />
              <div className="absolute top-1/2 right-8 w-2 h-2 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
