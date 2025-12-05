import { Code2, Award, Globe, ChevronRight, Download, FolderOpen } from "lucide-react";

const AboutMe = () => {
  const stats = [
    {
      icon: Code2,
      number: 6,
      title: "TOTAL PROJECTS",
      subtitle: "Innovative web & mobile solutions crafted",
    },
    {
      icon: Award,
      number: 3,
      title: "CERTIFICATES",
      subtitle: "Professional skills validated",
    },
    {
      icon: Globe,
      number: 1,
      title: "YEARS OF EXPERIENCE",
      subtitle: "Continued learning journey",
    },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background" />
      <div className="absolute inset-0 about-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold gradient-text  gradient-text-rainbow mb-6 animate-fade-in">
          About Me
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Hello, I'm <strong className="text-foreground">SHOJIB AHMED</strong> passionate about building smart and scalable web & mobile applications.
          I've completed a full-stack development course and constantly explore new technologies to refine my
          skills. Focused on continuous learning, I aim to transition into the IT industry by 2027 and eventually
          move towards AI and data science.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <a
            href="https://drive.google.com/file/d/1z6PEWEKT21skffIyL04eGjWXK_UjAP1B/view?usp=sharing" target="_blank"
            className="btn-primary-glow px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Download size={18} />
            Download CV
          </a>
          <a
            href="#portfolio"
            className="px-6 py-3 rounded-lg font-semibold border-2 border-primary text-foreground bg-background hover:bg-primary/10 inline-flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
          >
            <FolderOpen size={18} />
            View Projects
          </a>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="relative shadow-lg shadow-zinc-500 bg-stat-card rounded-xl p-6 text-left cursor-pointer transition-all duration-300 stat-card-hover hover:-translate-y-1 animate-fade-in-up border border-border/30"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center mb-4">
                <stat.icon size={20} className="text-foreground" />
              </div>

              {/* Number */}
              <div className="absolute top-6 right-6 text-4xl font-bold text-foreground">
                {stat.number}
              </div>

              {/* Title & Subtitle */}
              <p className="text-sm font-semibold text-foreground mb-1">{stat.title}</p>
              <p className="text-xs text-muted-foreground pr-8">{stat.subtitle}</p>

              {/* Arrow */}
              <ChevronRight
                size={20}
                className="absolute bottom-6 right-6 text-muted-foreground group-hover:text-primary transition-colors"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
