import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div
      className=" bg-[rgb(36,36,36)] text-white h-screen snap-y
    overflow-scroll z-0 *:relative overflow-x-hidden scrollbar-track-slate-400/20 scrollbar-thumb-yellow-400"
    >
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="about" className="relative">
        <h3 className=" mt-10 text-center uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>
        <About />
      </section>

      <section id="skills">
        <h3 className=" mt-10 text-center uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3>
        <Skills />
      </section>

      <section id="projects">
        <h3 className=" mt-10 text-center uppercase tracking-[20px] text-gray-500 text-2xl">
          Projects
        </h3>
        <Projects />
      </section>

      <section id="contact">
        <h3 className=" mt-10 text-center uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>
        <Contact />
      </section>
    </div>
  );
}

export default App;
