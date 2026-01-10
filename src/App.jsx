import { useState, useEffect } from 'react';
import { PacmanLoader } from "react-spinners";
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import LogoShowCase from './pages/LogoShowCase';
import Showcase from './pages/Showcase';
import FeatureCard from './pages/FeatureCard';
// import TechStack from './pages/TechStack';
import TechStack from './pages/TechStack2';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Exp from './components/Exp';
import LoaderGreet from './components/LoaderGreet';


const FullScreenLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
    <div className="flex flex-col items-center gap-6">
      <PacmanLoader
        color="#ffffff"
        loading={true}
        size={24}
        aria-label="Loading Application"
        data-testid="loader"
      />
      <div className="flex flex-col items-center gap-2">
        <p className="text-white text-xl font-semibold animate-pulse">Loading...</p>
        {/* <div className="flex gap-1">
          <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div> */}
      </div>
    </div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
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

    // Cleanup
    return () => {
      clearTimeout(loadingTimeout);
      clearInterval(progressInterval);
    };
  }, []);

  // Show loader while loading
  if (isLoading) {
    return <LoaderGreet/>;
    // return <FullScreenLoader />;
  }

//   useEffect(() => {
//   // Show loader until full website loads
//   const handlePageLoad = () => {
//     setIsLoading(false);
//   };

//   // If page already loaded (fast reload)
//   if (document.readyState === "complete") {
//     setIsLoading(false);
//   } else {
//     window.addEventListener("load", handlePageLoad);
//   }

//   // Simulated progress bar same as yours (kept untouched)
//   const progressInterval = setInterval(() => {
//     setLoadingProgress(prev => {
//       if (prev >= 100) {
//         clearInterval(progressInterval);
//         return 100;
//       }
//       return prev + 10;
//     });
//   }, 150);

//   // Cleanup
//   return () => {
//     window.removeEventListener("load", handlePageLoad);
//     clearInterval(progressInterval);
//   };
// }, []);


  return (
    <main className="relative overflow-x-hidden">
      <div className="animate-fadeIn">
        <Navbar />
        <Hero />

        <About />
        <LogoShowCase />
        <Showcase />
        <FeatureCard />
        
        {/* <Exp /> */}
        
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </main>
  );
};

export default App;