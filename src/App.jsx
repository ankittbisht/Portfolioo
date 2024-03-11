import "./App.css";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="font-body">
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Certifications/>
        <ContactForm />
        <Footer/>
      </div>
    </>
  );
}

export default App;
