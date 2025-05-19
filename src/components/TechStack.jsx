// TechStack.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Titleheader from "../assets/Titleheader";
import { techStackIcons, techStackImgs } from "../assets/index";
import { TechIcon } from "../Models/TechLogos/TechIcon";

gsap.registerPlugin(ScrollTrigger);

const TechCard = ({ icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    if (isHovered) {
      gsap.to(cardRef.current, {
        y: -20,
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
        borderColor: 'rgba(59, 130, 246, 0.8)',
        duration: 0.3,
        ease: "power2.out"
      });
      
      // If this card has an image, add additional animations
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          scale: 1.1,
          rotate: 5,
          duration: 0.4,
          ease: "back.out(1.7)"
        });
      }
    } else {
      gsap.to(cardRef.current, {
        y: 0,
        scale: 1,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)',
        borderColor: 'rgba(39, 39, 42, 0.8)',
        duration: 0.5,
        ease: "power3.out"
      });
      
      // Reset image animation when not hovered
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: "power3.out"
        });
      }
    }
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className="tech-card rounded-xl overflow-hidden bg-black"
      style={{
        height: '500px', // Adjusted card height for better proportions
        border: '2px solid rgba(39, 39, 42, 0.8)',
        transition: 'transform 0.3s ease',
        position: 'relative',
        backgroundColor: 'black'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Model Container */}
      <div className="h-80 w-full relative bg-black flex items-center justify-center">
        <TechIcon model={icon} isHovered={isHovered} />
      </div>

      {/* Card Content */}
      <div className="p-6 bg-black">
        <h3 className="text-xl font-bold text-white text-center mb-3">{icon.name}</h3>
        <div className={`h-1 w-20 mx-auto transition-all duration-300 ${isHovered ? 'bg-blue-500 w-32' : 'bg-gray-700 w-20'}`}></div>
      </div>
      
      {/* Animated glow effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 animate-pulse pointer-events-none"></div>
      )}
    </div>
  );
};

const ImageTechCard = ({ icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  
  useEffect(() => {
    if (!cardRef.current) return;

    if (isHovered) {
      gsap.to(cardRef.current, {
        y: -20,
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
        borderColor: 'rgba(59, 130, 246, 0.8)',
        duration: 0.3,
        ease: "power2.out"
      });
      
      // Image specific animations
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          scale: 1.15,
          y: -10,
          filter: 'brightness(1.2) drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))',
          duration: 0.4,
          ease: "back.out(1.7)"
        });
      }
    } else {
      gsap.to(cardRef.current, {
        y: 0,
        scale: 1,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)',
        borderColor: 'rgba(39, 39, 42, 0.8)',
        duration: 0.5,
        ease: "power3.out"
      });
      
      // Reset image animations
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          scale: 1,
          y: 0,
          filter: 'brightness(1) drop-shadow(0 0 0px rgba(59, 130, 246, 0))',
          duration: 0.5,
          ease: "power3.out"
        });
      }
    }
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className="tech-card rounded-xl overflow-hidden bg-black"
      style={{
        height: '500px', // Adjusted for better proportions
        border: '2px solid rgba(39, 39, 42, 0.8)',
        transition: 'transform 0.3s ease',
        position: 'relative',
        backgroundColor: 'black'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="h-80 w-full relative bg-black flex items-center justify-center">
        <img 
          ref={imgRef}
          src={icon.imgPath} 
          alt={icon.name}
          className="max-h-48 max-w-full object-contain transition-all duration-300"
          style={{
            transformOrigin: 'center center',
            filter: isHovered ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))' : 'none'
          }}
        />
      </div>

      {/* Card Content */}
      <div className="p-6 bg-black">
        <h3 className="text-xl font-bold text-white text-center mb-3">{icon.name}</h3>
        <div className={`h-1 w-20 mx-auto transition-all duration-300 ${isHovered ? 'bg-blue-500 w-32' : 'bg-gray-700 w-20'}`}></div>
      </div>
      
      {/* Animated glow effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 animate-pulse pointer-events-none"></div>
      )}
    </div>
  );
};

const TechStack = () => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useGSAP(() => {
    // Main cards animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "top center+=100",
        end: "bottom bottom",
        onEnter: () => setIsInView(true),
        onLeaveBack: () => setIsInView(false)
      }
    });

    tl.fromTo(".tech-card", {
      y: 80,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.1
    });

    // Section title animation
    gsap.fromTo(".section-title", {
      y: -30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#skills",
        start: "top center+=150"
      }
    });
    
    // Subtle background parallax effect
    gsap.to("#skills-container", {
      backgroundPosition: "50% 20%",
      ease: "none",
      scrollTrigger: {
        trigger: "#skills",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
      }
    });
  }, []);

  return (
    <div
      id="skills"
      className="flex justify-center items-center px-4 py-16 bg-black"
      ref={containerRef}
      style={{
        // background: 'linear-gradient(180deg, #000000 0%, #0a0a1a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 animate-pulse" 
             style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-purple-500/10 animate-pulse"
             style={{animationDuration: '6s'}}></div>
      </div>
      
      <div id="skills-container" className="w-full max-w-7xl z-10">
        <div className="section-title">
          <Titleheader
            title="My Preferred Tech Stack"
            sub="🚀 Technologies I Master"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">
          {/* 3D Model Cards */}
          {techStackIcons.map((icon) => (
            <TechCard key={icon.name} icon={icon} />
          ))}
          
          {/* Image Cards */}
          {techStackImgs.map((icon) => (
            <ImageTechCard key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;