import { useState } from "react";
import { User, Mail, MessageSquare, Send, Share2, Linkedin, Instagram, Github } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      title: "Let's Connect",
      subtitle: "on sojibSadh",
      href: "https://www.linkedIn.com/",
      color: "text-blue-400",
    },
    {
      icon: Instagram,
      title: "Instagram",
      subtitle: "@sojibSadh",
      href: "https://www.instagram.com/",
      color: "text-pink-500",
    },
    {
      icon: Github,
      title: "Github",
      subtitle: "@sojibSadh",
      href: "https://github.com/sojibSadh",
      color: "text-foreground",
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-background" />
      <div className="absolute inset-0 about-glow" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-4xl  md:text-5xl  font-bold gradient-text-rainbow mb-2 md:mb-5">Contact Me</h2>
          <p className="text-muted-foreground ">
            Got a question? Send me a message, and I'll get back to you soon.
          </p>
        </div>

        {/* Card */}
        <div className="relative md:mt-10  shadow-md shadow-slate-700  bg-card rounded-3xl p-8 border border-border/50 contact-glow overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="relative z-10">
            {/* Card Header */}
            <div className="text-left mb-6 relative">
              <h3 className="text-2xl font-semibold text-foreground mb-1">Get in Touch</h3>
              <p className="text-muted-foreground text-sm">
                Have something to discuss? Send me a message and let's talk.
              </p>
              <Share2 className="absolute top-0 right-0 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" size={18} />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="flex items-center bg-muted/30 rounded-lg border border-border p-3 input-glow transition-all duration-300">
                <User className="text-muted-foreground mr-3" size={18} />
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent outline-none w-full text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="flex items-center bg-muted/30 rounded-lg border border-border p-3 input-glow transition-all duration-300">
                <Mail className="text-muted-foreground mr-3" size={18} />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-transparent outline-none w-full text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="flex bg-muted/30 rounded-lg border border-border p-3 input-glow transition-all duration-300">
                <MessageSquare className="text-muted-foreground mr-3 mt-1" size={18} />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-transparent outline-none w-full text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-lg font-semibold flex justify-center items-center gap-2 transition-all duration-300 gradient-button text-foreground hover:opacity-90"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center mb-5 text-left">
                <div className="w-8 h-0.5 bg-primary mr-4" />
                <h4 className="text-xl font-medium text-foreground">Connect With Me</h4>
              </div>

              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-all duration-200 hover:translate-x-1"
                  >
                    <link.icon className={`${link.color} mr-4`} size={24} />
                    <div className="text-left">
                      <p className="font-medium text-foreground">{link.title}</p>
                      <p className="text-sm text-muted-foreground">{link.subtitle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
