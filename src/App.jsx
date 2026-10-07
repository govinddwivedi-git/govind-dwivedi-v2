import { Contact } from "./components/Contact.jsx";
import { Education } from "./components/Education.jsx";
import { Experience } from "./components/Experience.jsx";
import { Hero } from "./components/Hero.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { ProblemSolving } from "./components/ProblemSolving.jsx";
import { Projects } from "./components/Projects.jsx";
import { Skills } from "./components/Skills.jsx";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Experience />
        <ProblemSolving />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
