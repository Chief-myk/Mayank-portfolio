import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "../assets/Button";
import Heroexperience from '../HeroModel/Heroexperience';
import { words } from "../assets/index";
import { useGSAP } from '@gsap/react';
import { AnimatedCounter } from "../assets/AnimatedCounter";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const wordContainersRef = useRef([]);
    const textRef = useRef(null);

    useEffect(() => {
        const paragraph = textRef.current;
        if (!paragraph) return;

        const text = paragraph.innerText;
        paragraph.innerText = '';

        // Split text into words and spaces
        const wordsAndSpaces = text.split(/(\s+)/); // Split but keep spaces

        wordsAndSpaces.forEach((segment) => {
            if (segment.trim() === '' && segment !== '') {
                // It's a space - add it directly
                paragraph.appendChild(document.createTextNode(segment));
            } else {
                // It's a word - animate each letter
                segment.split('').forEach((letter) => {
                    const span = document.createElement('span');
                    span.innerText = letter;
                    span.style.opacity = '0';
                    span.style.display = 'inline-block';
                    span.style.whiteSpace = 'pre'; // Preserve whitespace
                    paragraph.appendChild(span);
                });
            }
        });

        // Animate all letter spans
        const letters = paragraph.querySelectorAll('span');
        gsap.to(letters, {
            opacity: 1,
            duration: 0.05,
            stagger: 0.05,
            ease: "power1.inOut"
        });
    }, []);

    // Rest of your component remains the same...
    useGSAP(() => {
        gsap.fromTo("h1", {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 2,
            ease: "power2.inOut"
        });

        gsap.to(".button", {
            duration: 0.5,
            x: 100,
            rotation: 360,
            ease: "power2.out", 
        });
    }, []);

    // Animation logic
    useEffect(() => {
        const wordContainers = wordContainersRef.current;

        // Reset refs if needed
        if (wordContainers.length !== words.length) {
            wordContainersRef.current = Array(words.length).fill().map((_, i) =>
                wordContainersRef.current[i] || null
            );
            return;
        }

        // Hide all words initially
        gsap.set(wordContainers, {
            y: 50,
            opacity: 0
        });

        // Show the current word
        if (wordContainers[currentWordIndex]) {
            gsap.to(wordContainers[currentWordIndex], {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        }

        // Set up interval for word rotation
        const interval = setInterval(() => {
            if (wordContainers[currentWordIndex]) {
                gsap.to(wordContainers[currentWordIndex], {
                    y: -50,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                });
            }

            const nextIndex = (currentWordIndex + 1) % words.length;
            setCurrentWordIndex(nextIndex);

            if (wordContainers[nextIndex]) {
                gsap.set(wordContainers[nextIndex], {
                    y: 50,
                    opacity: 0
                });

                gsap.to(wordContainers[nextIndex], {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    delay: 0.6,
                    ease: "power2.out"
                });
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [currentWordIndex]);

    return (
        <section id="hero" className="relative min-h-screen">
            <div className='absolute inset-0 w-full h-full'>
                <img
                    src="/images/bg.png"
                    alt="background"
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="container mx-auto flex md:px-6 lg:px-8 h-full z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center py-6 lg:py-2 w-full">
                    {/* Left Content */}
                    <div className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
                        <div className="hero-text lg:text-left md:p-8 rounded-xl">
                            <div className='flex flex-col px-3.5 space-y-2'>
                                <div className="flex">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                                        <span className="inline-block">Shaping</span>
                                    </h1>

                                    <div className="relative h-12 md:h-16 ml-5 overflow-hidden w-50">
                                        {words.map((word, index) => (
                                            <div
                                                key={`word-${index}`}
                                                ref={el => wordContainersRef.current[index] = el}
                                                className="absolute flex items-center gap-3"
                                            >
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white p-1 backdrop-blur-sm transition-all duration-300"
                                                />
                                                <span className="text-2xl sm:text-3xl md:text-3xl text-white font-semibold bg-clip-text">
                                                    {word.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                                    into Real Projects
                                </h1>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                                    that Deliver Results
                                </h1>

                                <p ref={textRef} className="text-white/80 text-center lg:text-left text-base sm:text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
                                    Hi, I'm Mayank a full-stack Web And App developer based in India with a passion for crafting exceptional digital experiences through code.
                                </p>

                                <div className="mt-12 flex justify-center lg:justify-start">
                                    <Button
                                        id="hero-work-button"
                                        className="button w-40 sm:w-48 md:w-52 h-12 md:h-14 text-lg"
                                        text="See My Work"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right 3D Model */}
                    <div className="w-full lg:w-1/2 h-[650px] sm:h-[900px] md:h-[600px] relative">
                        <Heroexperience />
                    </div>
                </div>
            </div>
            <AnimatedCounter />
        </section>
    );
};

export default Hero;