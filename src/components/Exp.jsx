import React, { useRef, useEffect } from 'react'
import Titleheader from '../assets/Titleheader'
import { expCards } from '../assets/index'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const Exp = () => {
    const cardRefs = useRef([])
    const timelineRef = useRef(null)
    const leftCardRefs = useRef([])
    const logoRefs = useRef([])
    const sectionRef = useRef(null)

    // Fix for star visibility - force refs to be updated
    useEffect(() => {
        const allStars = document.querySelectorAll('.star-rating img')
        if (allStars) {
            allStars.forEach(star => {
                star.style.opacity = 1;
                star.style.visibility = 'visible';
            })
        }
    }, [])

    useGSAP(() => {
        // Responsive animation setup
        const mm = gsap.matchMedia();

        // Add subtle parallax effect to background elements
        const bgElements = document.querySelectorAll('.bg-element')
        bgElements.forEach((el) => {
            gsap.to(el, {
                y: () => -20 - Math.random() * 30,
                x: () => 10 + Math.random() * 20,
                duration: 3 + Math.random() * 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            })
        })

        mm.add({
            // Desktop animations
            "(min-width: 1024px)": () => {
                // Timeline animation with improved effect
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".timeline-wrapper",
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: 0.3,
                        toggleActions: "play none none none"
                    }
                })

                timeline.from(".timeline", {
                    scaleY: 0,
                    transformOrigin: "top center",
                    duration: 1.5,
                    ease: "power3.out",
                })

                // Moving timeline highlight effect with glowing pulse
                const highlightTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".timeline-wrapper",
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: true
                    }
                })
                
                highlightTl.to(".timeline-highlight", {
                    y: "100%",
                    ease: "none",
                })

                // Add pulse effect to timeline
                gsap.to(".timeline", {
                    boxShadow: "0 0 10px 2px rgba(59, 130, 246, 0.7), 0 0 15px 5px rgba(124, 58, 237, 0.3)",
                    repeat: -1,
                    yoyo: true,
                    duration: 2,
                    ease: "sine.inOut"
                })

                // Company logos on timeline with improved animations
                gsap.utils.toArray('.timeline-logo-marker').forEach((logo, i) => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: logo,
                            start: 'top 70%',
                            end: 'top 30%',
                            toggleActions: "play none none reverse"
                        }
                    })
                    
                    tl.from(logo, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.6,
                        ease: "back.out(2)",
                    }).to(logo, {
                        boxShadow: "0 0 10px 2px rgba(59, 130, 246, 0.7)",
                        repeat: 1,
                        yoyo: true,
                        duration: 1.5,
                    })
                })

                // Card animations with staggered entrance
                gsap.utils.toArray('.timeline-card').forEach((card, i) => {
                    gsap.from(card, {
                        x: 70,
                        opacity: 0,
                        duration: 0.9,
                        ease: "back.out(1.5)",
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 75%',
                            toggleActions: "play none none none"
                        }
                    })
                })

                gsap.utils.toArray('.left-card').forEach((card, i) => {
                    gsap.from(card, {
                        x: -70,
                        opacity: 0,
                        duration: 0.9,
                        ease: "back.out(1.5)",
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 75%',
                            toggleActions: "play none none none"
                        }
                    })
                })
            },

            // Mobile/tablet animations
            "(max-width: 1023px)": () => {
                // Enhanced vertical animations for mobile
                gsap.utils.toArray('.timeline-card, .left-card').forEach((card, i) => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            toggleActions: "play none none none"
                        }
                    })
                    
                    tl.from(card, {
                        y: 60,
                        opacity: 0,
                        duration: 0.9,
                        ease: "back.out(1.7)",
                    }).to(card.querySelector('.timeline-logo'), {
                        scale: 1.05,
                        repeat: 1,
                        yoyo: true,
                        duration: 0.8,
                        ease: "power1.inOut",
                        delay: 0.2
                    }, "-=0.3")
                })

                // Mobile timeline animation with pulse effect
                const timelineTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".timeline-wrapper",
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                })
                
                timelineTl.from(".timeline", {
                    scaleY: 0,
                    transformOrigin: "top center",
                    duration: 1.2,
                    ease: "power3.out",
                }).to(".timeline", {
                    boxShadow: "0 0 8px 2px rgba(59, 130, 246, 0.5)",
                    repeat: 1,
                    yoyo: true,
                    duration: 1.5,
                    ease: "sine.inOut"
                }, "-=0.5")
            }
        })

        // Stars animation - FIXED and ENHANCED
        gsap.utils.toArray('.star-rating').forEach((stars) => {
            // Make sure stars are visible before animation
            gsap.set(stars.children, {
                opacity: 1,
                visibility: "visible"
            })
            
            // Create a more impressive star animation
            const starTl = gsap.timeline({
                scrollTrigger: {
                    trigger: stars,
                    start: 'top 80%',
                    toggleActions: "play none none none"
                }
            })
            
            starTl.from(stars.children, {
                scale: 0,
                opacity: 0,
                rotation: 90,
                duration: 0.5,
                stagger: 0.15,
                ease: "back.out(3)",
            }).to(stars.children, {
                rotation: 360,
                duration: 0.8,
                stagger: 0.1,
                ease: "power1.inOut"
            }, "-=0.2")
        })

        // Text animations with letter splitting effect for headings
        document.querySelectorAll('.exp-card-title').forEach((title) => {
            // Split text animation for titles
            const titleText = title.textContent
            let splitHTML = ""
            
            for (let i = 0; i < titleText.length; i++) {
                splitHTML += `<span class="title-char">${titleText[i]}</span>`
            }
            
            title.innerHTML = splitHTML
            
            gsap.from(title.querySelectorAll('.title-char'), {
                opacity: 0,
                y: 20,
                stagger: 0.03,
                duration: 0.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    toggleActions: "play none none none"
                }
            })
        })

        // Enhanced text animations
        gsap.utils.toArray('.exp-text').forEach((text) => {
            gsap.from(text, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: text,
                    start: 'top 85%',
                    toggleActions: "play none none none"
                }
            })
        })
        
        // Enhanced list item animations
        gsap.utils.toArray('.responsibility-item').forEach((item) => {
            gsap.from(item, {
                x: -20,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    toggleActions: "play none none none"
                }
            })
        })

    }, [])

    // Enhanced tilt effect handlers
    const createTiltHandler = (refArray, index) => (e) => {
        if (window.innerWidth < 1024) return; // Disable on mobile

        const card = refArray.current[index]
        if (!card) return

        const rect = card.getBoundingClientRect()
        const mouseX = e.clientX - rect.left - rect.width / 2
        const mouseY = e.clientY - rect.top - rect.height / 2
        
        // Calculate tilt with slightly more pronounced effect
        const tiltX = (mouseY / rect.height) * 10
        const tiltY = (mouseX / rect.width) * -10
        
        // Add subtle glowing border effect
        card.style.boxShadow = `0 5px 20px rgba(30, 64, 175, 0.3), 
                               ${mouseX/30}px ${mouseY/30}px 15px rgba(59, 130, 246, 0.2)`

        gsap.to(card, {
            rotationX: tiltX,
            rotationY: tiltY,
            transformPerspective: 1000,
            transformOrigin: "center center",
            ease: "power2.out",
            duration: 0.3
        })
    }

    const createTiltResetHandler = (refArray, index) => () => {
        if (window.innerWidth < 1024) return;

        const card = refArray.current[index]
        if (!card) return
        
        // Reset glow effect
        card.style.boxShadow = ""

        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            ease: "elastic.out(1.2, 0.5)",
            duration: 1.2
        })
    }

    return (
        <section 
            id="experience" 
            ref={sectionRef}
            className='w-full px-4 sm:px-6 py-2 relative overflow-hidden'
        >
            {/* Enhanced animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-element absolute rounded-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"
                        style={{
                            width: `${Math.random() * 300 + 80}px`,
                            height: `${Math.random() * 300 + 80}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            filter: 'blur(50px)',
                            opacity: 0.2 + Math.random() * 0.15
                        }}
                    />
                ))}
            </div>

            <div className='w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <Titleheader title="Professional Work Experience" sub="💼 My Career Overview" />

                <div className='mt-16 md:mt-24 relative'>
                    <div className='relative z-50 py-2 md:py-5'>
                        {/* Timeline wrapper */}
                        <div className='timeline-wrapper relative'>
                            {/* Timeline bar - responsive positioning */}
                            <div
                                ref={timelineRef}
                                className='timeline absolute left-1/2 lg:left-1/3 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-400 to-purple-600 rounded-full overflow-hidden'
                            >
                                {/* Moving highlight inside timeline */}
                                <div className="timeline-highlight absolute top-0 left-0 w-full h-full bg-white opacity-30" />
                            </div>

                            {/* Logo markers positioned outside the timeline */}
                            {expCards.map((card, index) => (
                                <div
                                    key={`logo-${index}`}
                                    ref={el => logoRefs.current[index] = el}
                                    className="timeline-logo-marker absolute left-1/2 lg:left-1/3 transform -translate-x-[calc(50%+0px)] lg:block hidden w-8 h-8 lg:w-10 lg:h-10 bg-gray-900 rounded-full border-2 border-blue-500 z-10 shadow-lg shadow-blue-500/20"
                                    style={{
                                        top: `${(Math.round((index / (expCards.length - 1)) * 74) + 13)}%`,
                                    }}
                                >
                                    <img
                                        src={card.logoPath || card.imgPath}
                                        alt={card.title}
                                        className="w-full h-full p-1 rounded-full object-contain"
                                    />
                                </div>
                            ))}


                            {/* Experience cards */}
                            <div className='space-y-20 md:space-y-28 lg:space-y-32'>
                                {expCards.map((card, index) => (
                                    <div key={`${card.title}-${index}`} className="flex flex-col lg:flex-row w-full lg:items-start">
                                        {/* Left side card with stars and reviews */}
                                        <div
                                            ref={el => leftCardRefs.current[index] = el}
                                            className={`left-card lg:w-1/4 md:w-1/2 w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-900/20 order-2 lg:order-1 ${!card.review ? 'lg:block hidden' : ''}`}
                                            onMouseMove={createTiltHandler(leftCardRefs, index)}
                                            onMouseLeave={createTiltResetHandler(leftCardRefs, index)}
                                        >
                                            {/* Star Rating - FIXED */}
                                            {card.review && (
                                                <>
                                                    <div className="star-rating flex mb-3" style={{ opacity: 1, visibility: 'visible' }}>
                                                        {[...Array(5)].map((_, i) => (
                                                            <img
                                                                key={i}
                                                                src="/images/star.png"
                                                                alt="star"
                                                                className="w-4 h-4 lg:w-5 lg:h-5"
                                                                style={{ opacity: 1, visibility: 'visible' }}
                                                            />
                                                        ))}
                                                    </div>

                                                    {/* Review with subtle animation */}
                                                    <p className="text-gray-300 italic text-xs lg:text-sm">
                                                        "{card.review}"
                                                    </p>
                                                </>
                                            )}

                                            <div className="flex items-center gap-3 mt-3">
                                                <div className="w-8 h-8 lg:w-10 lg:h-10 p-1 flex items-center justify-center">
                                                    <img
                                                        src={card.imgPath}
                                                        alt={card.title}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <h3 className="font-medium text-base lg:text-lg text-white">{card.title}</h3>
                                            </div>
                                        </div>

                                        {/* Spacer for desktop layout */}
                                        <div className="lg:w-1/12 hidden lg:block order-2"></div>

                                        {/* Right side timeline card */}
                                        <div
                                            ref={el => cardRefs.current[index] = el}
                                            className="timeline-card relative lg:w-2/5 md:w-3/4 w-full group order-1 lg:order-3 mb-8 lg:mb-0"
                                            onMouseMove={createTiltHandler(cardRefs, index)}
                                            onMouseLeave={createTiltResetHandler(cardRefs, index)}
                                        >
                                            {/* Enhanced glow effect */}
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-900/20 via-indigo-900/10 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                            {/* Card content */}
                                            <div className='relative bg-gray-800/50 md:w-[150%] md:ml-[30%] backdrop-blur-sm border border-gray-700 rounded-xl p-5 lg:p-6 xl:p-8 transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-lg group-hover:shadow-blue-900/20'>
                                                {/* Company logo and title */}
                                                <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-6'>
                                                    <div className='timeline-logo w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/5 p-2 flex items-center justify-center border border-gray-700 group-hover:border-blue-400 transition-colors duration-300 shadow-sm shadow-blue-500/10'>
                                                        <img
                                                            src={card.imgPath}
                                                            alt={card.title}
                                                            className='w-full h-full object-contain'
                                                        />
                                                    </div>
                                                    <div className='exp-text'>
                                                        <h1 className='exp-card-title font-semibold text-xl sm:text-2xl text-white'>{card.title}</h1>
                                                        <p className='mt-1 sm:mt-2 text-blue-300 flex items-center gap-2 text-sm sm:text-base'>
                                                            <span className="animate-pulse">📆</span>
                                                            <span>{card.date}</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Responsibilities with enhanced animations */}
                                                <div className='exp-text'>
                                                    <p className='text-blue-400 italic mb-3 text-sm lg:text-base'>Responsibilities</p>
                                                    <ul className='space-y-2 lg:space-y-3'>
                                                        {card.responsibilities.map((responsibility, i) => (
                                                            <li
                                                                key={i}
                                                                className='responsibility-item flex items-start gap-2 lg:gap-3 text-gray-300 text-sm lg:text-base'
                                                            >
                                                                <span className='text-blue-400 mt-1 group-hover:text-blue-300'>•</span>
                                                                <span>{responsibility}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Enhanced timeline dot - mobile/tablet with improved animation */}
                                                <div className='lg:hidden absolute left-0 transform -translate-x-1/2 top-0 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 lg:border-4 border-gray-900 z-10 flex items-center justify-center'>
                                                    <div className='absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping duration-1000 group-hover:opacity-70' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Exp