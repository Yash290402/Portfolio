import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  
} from "./components/components";
import FloatingButton from "./components/components/FloatingButton";

function App() {  
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
         
          </div>
          <About />
          <Tech />
          <Experience />
         
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
            <Footer />
          </div>
        </div>
        
        {/* Floating Button */}
        <FloatingButton /> {/* The button is visible on all pages */}
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
