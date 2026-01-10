import React, { useEffect, useState } from "react";

const LoaderGreet = () => {
  const words = [
    "Hello", "Hola", "Konnichiwa", "Namaste", "Vanakkam", "Ni Hao",
    "Bonjour", "Ciao",
     "Guten Tag", "Olá", "Shalom", "Salaam", 
    // "Merhaba", "Sawubona", "Jambo", "Hej", "Hallå", "Zdravstvuyte",
    // "Yasou", "Ahoj", "Selamat", "Szia", "Kamusta", "Marhaba"
  ];

  const fonts = [
    "Poppins", "Montserrat", "Roboto", "Lobster", "Playfair Display", 
    "Caveat", "Oswald", "Bebas Neue", "Dancing Script", "Inter",
    "Quicksand", "Raleway", "Nunito", "Lato", "Open Sans"
  ];

  const colors = [
    "#FFFFFF", "#F8FAFC", "#E2E8F0", "#F1F5F9", "#FEF3C7",
    "#A7F3D0", "#BFDBFE", "#FBCFE8", "#DDD6FE", "#FECACA"
  ];

  const [currentWord, setCurrentWord] = useState(words[0]);
  const [font, setFont] = useState(fonts[0]);
  const [color, setColor] = useState(colors[0]);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      setCurrentWord(randomWord);
      setFont(randomFont);
      setColor(randomColor);
      setScale(1.1);
      
      setTimeout(() => setScale(1), 100);
    }, 200); // Slightly slower for better readability

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black h-screen flex justify-center items-center">
      <h1
        className="text-6xl font-bold tracking-wide transition-all duration-300 ease-out"
        style={{ 
          fontFamily: font, 
          color: color,
          transform: `scale(${scale})`,
          textShadow: "0 4px 8px rgba(0,0,0,0.3)",
          opacity: 0.9
        }}
      >
        {currentWord}
      </h1>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default LoaderGreet;