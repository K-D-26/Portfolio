import About from "./components/About";
import Contact from "./components/Contact";
import Technologies from "./components/Technologies";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Portfolio from "./components/Projects";
import Scroll from "./components/Scroll";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Technologies />
      <Contact />
      <SocialLinks />
      <Scroll />
    </div>
  )
}

export default App;