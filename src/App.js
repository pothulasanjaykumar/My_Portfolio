import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLink from "./components/SocialLink";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App(){
return(
  <div>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>

    <SocialLink/>
  </div>
)
}

export default App;
