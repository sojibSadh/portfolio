import { Code2, Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/sojibSadh" },
    { icon: Linkedin, href: "#" },
    { icon: Mail, href: "#contact" },
  ];

  return (
    <footer className="relative bg-background py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Profile */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            <Code2 className="text-foreground" size={24} />
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">SHOJIB AHMED</p>
            <p className="text-muted-foreground text-sm">React Developer</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-right text-muted-foreground text-sm">
          <p>© 2025 Shojib Ahmeed</p>
          <p className="flex items-center justify-end gap-1">
            Crafted with <Heart className="text-red-500" size={14} /> and code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
