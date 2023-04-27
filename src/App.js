import About from "./components/About";
import ContactMe from "./components/ContactMe";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <LandingPage />
        <About />
        <Skills /> 
        <Works />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
