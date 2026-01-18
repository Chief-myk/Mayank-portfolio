import { useState, useEffect } from 'react';
import { PacmanLoader } from "react-spinners";
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import LogoShowCase from './pages/LogoShowCase';
import Showcase from './pages/Showcase';
import FeatureCard from './pages/FeatureCard';
import TechStack from './pages/TechStack';
import TechStack2 from './pages/TechStack2';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import LoaderGreet from './components/LoaderGreet';
import Experience from './pages/Experience';
import Certificates from './pages/Certificates';
import BackgroundMusic from './components/BackgroundMusic';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(progressInterval);
    }, 3000); 

    return () => {
      clearTimeout(loadingTimeout);
      clearInterval(progressInterval);
    };
  }, []);

  if (isLoading) {
    return <LoaderGreet/>;
  }

  return (
    <main className="relative overflow-x-hidden">
       <BackgroundMusic isMuted={isMuted} setIsMuted={setIsMuted} />
      <div className="animate-fadeIn">
        <Navbar />
        <Hero />
        <About />
        <LogoShowCase />
        <Showcase />
        <FeatureCard />
        <TechStack2 />
        <Experience/>
        <Certificates/>
        <Testimonials />
        <Contact />
        <Footer />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </main>
  );
};

export default App;