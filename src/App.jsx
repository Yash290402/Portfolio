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
import { useEffect, useState } from "react";

function App() {  

  const [isCanvasSupported, setIsCanvasSupported] = useState(true);

  useEffect(() => {
    // Check if the browser supports Canvas
    const canvas = document.createElement("canvas");
    if (!canvas.getContext || window.innerWidth < 640) {
      setIsCanvasSupported(false); // Disable StarsCanvas for unsupported cases or small screens
    }
  }, []);

  return (
    <ParallaxProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          {/* Hero Section */}
          <div className={`relative ${isCanvasSupported ? '' : 'bg-fallback-pattern'}`}>
            {isCanvasSupported && <StarsCanvas />} {/* Render StarsCanvas only if supported */}
            <div className="relative z-10 bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
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
