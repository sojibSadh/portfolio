import { useState } from "react";
import { FolderGit2, Award, Code, ArrowRight, ChevronDown, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = [
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "techstack", label: "Tech Stack", icon: Code },
  ];



  const projects = [
    {
      title: "SuperTalent",
      description: "SuperTalent is a modern, responsive Job Marketplace Platform built with React, Tailwind CSS, and Firebase Authentication. It connects talented professionals with employers",
      gradient: "from-purple-900/70 to-indigo-900/70",
      link: "https://super-talent-client.netlify.app/",
      details: "https://github.com/sojibSadh/supertalent-client.git",
      img: "https://i.ibb.co.com/yF0BKgPf/project1.png"
    },
    {
      title: "GreeNest Store",
      description: "GreenNest is a modern and elegant single-page web application designed for indoor plant enthusiasts. It helps users explore plant care guides, purchase indoor plants, and book consultations with plant experts",
      gradient: "from-green-900/70 to-emerald-900/70",
      link: "https://greennest2.vercel.app/",
      details: "https://github.com/sojibSadh/greennest.git",
      img: " https://i.ibb.co.com/YMLV6xx/project2.png"

    },
    {
      title: "WATCHinfts/",
      description: "A video streaming app made for easy, personal entertainment and everything you love to binge.",
      gradient: "from-slate-900/70 to-zinc-900/70",
      link: "https://sojibsadh.github.io/nfts/",
      details: "https://github.com/sojibSadh/nfts.git",
      img: "https://i.ibb.co.com/KcjNHP7B/project3.png"

    },
  ];

  const certificates = [
    { title: "Full Stack Development", issuer: "Certification Authority", year: "2024" },
    { title: "React Advanced Patterns", issuer: "Online Platform", year: "2023" },
    { title: "Database Management", issuer: "Tech Institute", year: "2023" },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Next.js", category: "Framework" },
    { name: "Express.js", category: "Backend" },
  ];

  return (
    <section id="portfolio" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-background" />
      <div className="absolute inset-0 ambient-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl  font-bold gradient-text-rainbow  mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical expertise. Each section represents
            a milestone in my continuous learning path.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12 p-3 bg-card rounded-xl border border-border max-w-fit mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "gradient-button text-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-card rounded-xl overflow-hidden border border-border transition-all duration-300 project-card-hover animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center border-b border-border/50`}>
                <div> <img src={project.img} alt="project" /></div>
                  <div className="text-6xl opacity-50">🖥️</div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  <div className="flex justify-between items-center">
                    <a href={project.link} className="text-secondary font-semibold text-sm hover:underline flex items-center gap-1">
                      Live Demo <ExternalLink size={14} />
                    </a>
                    <a href={project.details} className="text-foreground text-sm hover:text-primary flex items-center gap-1 transition-colors">
                      Details <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-1">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                <p className="text-primary text-sm mt-2">{cert.year}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "techstack" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-card rounded-xl p-4 border border-border hover:border-secondary/50 transition-all duration-300 text-center animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                <p className="text-foreground font-medium">{tech.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{tech.category}</p>
              </div>
            ))}
          </div>
        )}

        {/* See More Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <button className="px-6 py-3 rounded-lg border border-foreground text-foreground hover:bg-primary hover:border-primary transition-all duration-300 flex items-center gap-2 mx-auto">
            See More <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
