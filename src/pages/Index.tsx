
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Navigation } from "@/components/portfolio/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
