import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
