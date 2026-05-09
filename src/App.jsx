import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#030014] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}