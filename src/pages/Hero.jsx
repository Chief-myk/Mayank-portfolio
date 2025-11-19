import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "../assets/Button";
import { words } from "../assets/index";
import { useGSAP } from '@gsap/react';
import { AnimatedCounter } from "../assets/AnimatedCounter";

import Heroexperience from '../Models/HeroModel/Heroexperience';
import Galaxy from '../components/Galaxy';
import ProfileCard from '../components/ProfileCard';
import FuturisticHero from '../components/Bg';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [galaxyReady, setGalaxyReady] = useState(false);
    const wordContainersRef = useRef([]);
    const textRef = useRef(null);
    const intervalRef = useRef(null);
    const hasAnimated = useRef(false);
    const timelineRef = useRef(null);

    // Memoize galaxy config - FIXED: White stars and proper mouse interaction
    const galaxyConfig = useMemo(() => ({
        mouseRepulsion: true,
        mouseInteraction: true,
        density: 1.5,
        glowIntensity: 0.5,
        saturation: 0, // Set to 0 for white stars
        hueShift: 0,   // Set to 0 for white stars
        transparent: true,
        speed: 1.0,
        twinkleIntensity: 0.3,
        rotationSpeed: 0.05
    }), []);

    // Galaxy ready immediately
    useEffect(() => {
        setGalaxyReady(true);
    }, []);

    // Text animation - runs once
    useEffect(() => {
        const paragraph = textRef.current;
        if (!paragraph || hasAnimated.current) return;

        const text = paragraph.innerText;
        paragraph.innerHTML = '';

        const fragment = document.createDocumentFragment();
        text.split(/(\s+)/).forEach((segment) => {
            if (segment.match(/\s+/)) {
                fragment.appendChild(document.createTextNode(segment));
            } else if (segment) {
                segment.split('').forEach((char) => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.className = 'inline-block opacity-0';
                    fragment.appendChild(span);
                });
            }
        });

        paragraph.appendChild(fragment);

        gsap.to(paragraph.querySelectorAll('span'), {
            opacity: 1,
            duration: 0.03,
            stagger: 0.03,
            ease: "none"
        });

        hasAnimated.current = true;
    }, []);

    // Title animations
    useGSAP(() => {
        timelineRef.current = gsap.timeline();

        timelineRef.current.fromTo("#hero h1",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out" }
        );

        return () => timelineRef.current?.kill();
    }, []);

    // Word rotation animation
    useEffect(() => {
        if (!words?.length) return;

        const wordContainers = wordContainersRef.current;

        if (wordContainers.length !== words.length) {
            wordContainersRef.current = Array(words.length).fill(null);
            return;
        }

        wordContainers.forEach((container, idx) => {
            if (container) {
                gsap.set(container, {
                    y: idx === currentWordIndex ? 0 : 50,
                    opacity: idx === currentWordIndex ? 1 : 0
                });
            }
        });

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            const currentContainer = wordContainers[currentWordIndex];
            const nextIndex = (currentWordIndex + 1) % words.length;
            const nextContainer = wordContainers[nextIndex];

            if (currentContainer) {
                gsap.to(currentContainer, {
                    y: -30,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.in"
                });
            }

            if (nextContainer) {
                gsap.fromTo(nextContainer,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.4, delay: 0.1, ease: "power2.out" }
                );
            }

            setCurrentWordIndex(nextIndex);
        }, 2500);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [currentWordIndex, words]);

    // Cleanup
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timelineRef.current) timelineRef.current.kill();
        };
    }, []);

    const handleContactClick = useCallback(() => {
        console.log('Contact clicked');
    }, []);

    return (
        // <section id="hero" className="relative min-h-screen overflow-hidden bg-black">
        <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#050505] to-[#0a0a0a] text-white">

            {/* Mobile background */}
            <div className="absolute block md:hidden inset-0 w-full h-full">
                <img
                    src="/images/bg.png"
                    alt="background"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
            </div>

            <div className={`fixed top-0 left-0 w-full h-full hidden md:block`} style={{ zIndex: 0 }}>
                <FuturisticHero />
            </div>

            {/* Galaxy Background - Desktop only - FIXED: Always render but conditionally display */}

            {/* <div className={`fixed top-0 left-0 w-full h-full hidden md:block`} style={{ zIndex: 0 }}>
                <Galaxy {...galaxyConfig} />
            </div> */}

            {/* Content */}
            <div className="relative z-10 mx-auto px-4 md:px-6 lg:px-8 flex justify-center items-center min-h-screen">
                <div className="flex flex-col mt-5 md:-mt-20 lg:flex-row items-center justify-between w-full max-w-7xl gap-8 lg:gap-12">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                        <div className="w-full text-center lg:text-left space-y-3 lg:space-y-1">

                            {/* Animated Title */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-3">
                                <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-2xl">
                                    Shaping
                                </h1>
                                <div className="relative h-12 sm:h-16 lg:h-20 min-w-[220px] sm:min-w-[280px] overflow-hidden">
                                    {words.map((word, index) => (
                                        <div
                                            key={index}
                                            ref={el => wordContainersRef.current[index] = el}
                                            className="absolute top-0 left-0 flex items-center gap-2 sm:gap-3"
                                        >
                                            <img
                                                src={word.imgPath}
                                                alt={word.text}
                                                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-white/90 p-1.5 object-cover shadow-xl"
                                                loading="lazy"
                                            />
                                            <span className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold whitespace-nowrap drop-shadow-2xl">
                                                {word.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
                                into Real Projects
                            </h1>

                            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
                                that Deliver Results
                            </h1>

                            {/* Description */}
                            <p
                                ref={textRef}
                                className="text-white/95 text-center lg:text-left text-lg sm:text-xl mt-6 max-w-2xl leading-relaxed mx-auto lg:mx-0 drop-shadow-lg"
                            >
                                Hi, I'm Mayank — a Full Stack Web & App Developer, Software Engineer, and aspiring DevOps Expert from India, driven to build intelligent, high-performance, and impactful digital products that blend innovation with real-world problem-solving.
                            </p>

                            {/* CTA Button */}
                            <div className="mt-10 flex justify-center lg:justify-start">
                                <Button
                                    id="hero-work-button"
                                    className="button w-48 sm:w-56 h-14 text-lg font-semibold transition-transform duration-300 hover:scale-110 shadow-2xl"
                                    text="See My Work"
                                    aria-label="View portfolio work"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Profile Card */}
                    <div className="w-full lg:w-1/2 h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center">
                        <ProfileCard
                            name="Mayank"
                            title="Full-Stack Developer"
                            handle="mayankmittal1311"
                            status="Available"
                            contactText="Contact Me"
                            avatarUrl="/images/mayank.jpeg"
                            showUserInfo={true}
                            enableTilt={true}
                            enableMobileTilt={false}
                            onContactClick={handleContactClick}
                        />
                    </div>
                </div>
            </div>

            {/* Animated Counter */}
            <div className="relative z-20">
                <AnimatedCounter />
            </div>
        </section>
    );
};

export default Hero;