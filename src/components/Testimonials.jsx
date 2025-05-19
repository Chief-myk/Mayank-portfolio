import React, { useRef, useEffect, useState } from 'react';
import { testimonials } from "../assets/index";
import Titleheader from '../assets/Titleheader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const StarIcon = () => (
  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Testimonials = () => {
    const testimonialsRef = useRef(null);
    const cardRefs = useRef([]);
    const titleRef = useRef(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    
    useEffect(() => {
        // Make sure testimonials data exists
        if (!testimonials || testimonials.length === 0) {
            console.warn('No testimonials data found');
            return;
        }
        
        // Title animation
        gsap.from(titleRef.current, {
            y: -30,
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 85%',
                toggleActions: "play none none none"
            }
        });
        
        // Setup card entrance animations
        cardRefs.current.forEach((card, i) => {
            if (!card) return;
            
            // Entrance animation with staggered delay
            gsap.from(card, {
                y: 80,
                opacity: 1,
                duration: 1,
                delay: i * 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    toggleActions: "play none none none"
                }
            });
        });
        
        // Setup star rating animations
        document.querySelectorAll('.stars').forEach((star) => {
            if (!star || !star.children.length) return;
            
            gsap.from(star.children, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "elastic.out(1.2, 0.5)",
                scrollTrigger: {
                    trigger: star,
                    start: 'top 85%',
                    toggleActions: "play none none restart"
                }
            });
        });
        
        // Clean up
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    
    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        
        const multiplier = 20; // Reduced for subtler effect
        
        const xTilt = -((y - yc) / yc) * multiplier;
        const yTilt = ((x - xc) / xc) * multiplier;
        
        gsap.to(card, {
            rotationX: xTilt,
            rotationY: yTilt,
            duration: 0.1,
            ease: "power2.out",
            transformPerspective: 500,
            boxShadow: `
                ${yTilt * 0.7}px ${xTilt * -0.7}px 15px rgba(59, 130, 246, 0.2)
            `
        });
        
        // Highlight effect for stars when card is hovered
        const stars = card.querySelectorAll('.star-icon');
        gsap.to(stars, {
            scale: 1.3,
            stagger: 0.08,
            duration: 0.3,
            ease: "back.out(2)"
        });
    };
    
    const handleMouseLeave = (index) => {
        const card = cardRefs.current[index];
        if (!card) return;
        
        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            boxShadow: "0 0 0 rgba(59, 130, 246, 0)",
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
        });
        
        // Reset stars
        const stars = card.querySelectorAll('.star-icon');
        gsap.to(stars, {
            scale: 1,
            duration: 0.1,
            ease: "back.out(2)"
        });
        
        setHoveredCard(null);
    };
    
    const handleCardClick = (index) => {
        const card = cardRefs.current[index];
        if (!card) return;
        
        // Pulse animation on click
        gsap.timeline()
            .to(card, {
                scale: 1.05,
                duration: 0.2,
                ease: "power1.out"
            })
            .to(card, {
                scale: 1,
                duration: 0.5,
                ease: "elastic.out(1.2, 0.5)"
            });
    };
    
    return (
        <div 
            id="testimonials" 
            ref={testimonialsRef}
            className=" flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 mb-[100px]"
        >
            <div ref={titleRef} className="w-full h-full mx-auto md:px-10 px-5 title-header">
                <Titleheader
                    title="What People Say About Me ?"
                    sub="💫 Client Feedback Highlights"
                />
            </div>
            
            <div className="grid mt-[-50px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full max-w-7xl">
                {testimonials && testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        ref={el => cardRefs.current[index] = el}
                        className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-5 
                                  transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-900/20
                                  transform hover:-translate-y-2 cursor-pointer
                                  ${hoveredCard === index ? 'z-10' : 'z-0'}`}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        onMouseEnter={() => setHoveredCard(index)}
                        onClick={() => handleCardClick(index)}
                    >
                        {/* Star Rating */}
                        {testimonial.review && (
                            <>
                                <div className="stars flex mb-3 relative">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="star-icon mr-1">
                                            <StarIcon />
                                        </span>
                                    ))}
                                </div>

                                {/* Review Text */}
                                <div className="testimonial-content min-h-[100px] mb-3">
                                    <p className="text-gray-300 italic text-xs lg:text-sm transition-all duration-300 group-hover:text-white">
                                        "{testimonial.review}"
                                    </p>
                                </div>
                            </>
                        )}

                        {/* Client Info */}
                        <div className="flex items-center gap-3 mt-auto">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400 flex-shrink-0 
                                         transition-all duration-500 transform hover:scale-110">
                                <img
                                    src={testimonial.imgPath}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-medium text-sm lg:text-base text-white">{testimonial.name}</p>
                                <p className="font-normal text-xs lg:text-sm text-gray-400">{testimonial.mentions}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;