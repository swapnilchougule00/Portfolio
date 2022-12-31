import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className=' bg-[rgb(36,36,36)] text-white h-screen snap-y
    overflow-scroll z-0 overflow-x-hidden scrollbar-track-slate-400/20 scrollbar-thumb-yellow-400'>
      <Header/>

      <section id ='hero' >
          <Hero/>
      </section>


      <section id='about' >
        <About />
      </section>



      <section id='skills'>
      <Skills/>
      </section>

      <section id='projects'>
        <Projects/>
      </section>

      <section id='contact'>
        <Contact/>
      </section>
      
    </div>
  );
}

export default App;
