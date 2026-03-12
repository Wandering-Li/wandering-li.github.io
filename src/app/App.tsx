import { Hero } from './components/Hero';
import { About } from './components/About';
import { CoreStrengths } from './components/CoreStrengths';
import { Projects } from './components/Projects';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <CoreStrengths />
      <Projects />
      <TechnicalSkills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
