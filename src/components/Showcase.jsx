import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Showcase = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    
    // Project data - easily add/remove projects here
    const mainProjects = [
        {
            id: 1,
            title: "Unleash the Future – Control Everything with Voice and Gesture",
            description: "An intelligent, touch-free AI system that puts the power of your device at your fingertips – voice and gesture-controlled, always ready, just like JARVIS.",
            image: "/images/jarvis.jpg",
            tags: ["AI", "Voice Control", "Gesture Recognition"],
            accentColor: "blue"
        }
    ]

    const secondaryProjects = [
        {
            id: 2,
            title: "Your Body is the Controller – Play, Train, Repeat",
            description: "A fitness game that uses motion tracking to turn your workouts into an interactive gaming experience.",
            image: "/images/fit-game.png",
            tags: ["Motion Tracking", "Fitness", "Gaming"],
            accentColor: "purple"
        },
        {
            id: 3,
            title: "Explore the Neon City – A 3D Cyberpunk Journey",
            description: "Immerse yourself in a stunning 3D cyberpunk world with interactive elements and a captivating storyline.",
            image: "/images/cyberpunk.jpg",
            tags: ["3D", "Interactive", "Storytelling"],
            accentColor: "pink"
        }
        // Add more projects here as needed
    ]

    const projectRefs = useRef([])
    projectRefs.current = [...mainProjects, ...secondaryProjects].map((_, i) => projectRefs.current[i] ?? React.createRef())

    useGSAP(() => {
        // Section entrance animation
        gsap.from(sectionRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        })

        // Title animation
        // gsap.from(titleRef.current, {
        //     opacity: 0,
        //     y: 30,
        //     duration: 0.8,
        //     delay: 0.3,
        //     ease: "back.out(1.7)"
        // })

        // Project cards animation
        projectRefs.current.forEach((ref, index) => {
            if (ref.current) {
                gsap.from(ref.current, {
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.2 * index,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                })
            }
        })
    }, [])

    return (
        <section 
            id='work' 
            ref={sectionRef} 
            className='w-full mt-14 px-5 md:px-10 py-10 md:py-20 flex items-center justify-center overflow-hidden'
        >
            <div className='w-full max-w-7xl'>
                 <motion.h2 
                    // ref={titleRef}
                    // initial={{ opacity: 0, y: 20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.8, delay: 0.2 }}
                    className='text-4xl md:text-6xl font-bold text-white mb-8 md:mb-16 text-center'
                > 
                    My <span className='text-blue-400'>Projects</span>
                </motion.h2>

                {/* Responsive Grid Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8'>
                    {/* Main Projects Column - takes 8/12 on large screens */}
                    {mainProjects.length > 0 && (
                        <div className={`${secondaryProjects.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-6 md:space-y-8`}>
                            {mainProjects.map((project, index) => (
                                <ProjectCard 
                                    key={project.id}
                                    ref={projectRefs.current[index]}
                                    project={project}
                                    isMain={true}
                                />
                            ))}
                        </div>
                    )}

                    {/* Secondary Projects Column - takes 4/12 on large screens */}
                    {secondaryProjects.length > 0 && (
                        <div className={`${mainProjects.length > 0 ? 'lg:col-span-4' : 'lg:col-span-12'} space-y-6 md:space-y-8`}>
                            {/* On smaller screens we show 2 per row, on lg+ all stacked */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8'>
                                {secondaryProjects.map((project, index) => (
                                    <ProjectCard 
                                        key={project.id}
                                        ref={projectRefs.current[mainProjects.length + index]}
                                        project={project}
                                        isMain={false}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Fallback when no projects */}
                    {mainProjects.length === 0 && secondaryProjects.length === 0 && (
                        <div className='col-span-12 text-center py-10'>
                            <p className='text-white/70 text-lg'>No projects to display</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

// Reusable Project Card Component
const ProjectCard = React.forwardRef(({ project, isMain }, ref) => {
    const colorVariants = {
        blue: 'border-blue-400 hover:border-blue-400',
        purple: 'border-purple-400 hover:border-purple-400',
        pink: 'border-pink-400 hover:border-pink-400',
        // Add more colors as needed
    }

    return (
        <motion.div 
            ref={ref}
            whileHover={{ y: -5 }}
            className={`p-4 sm:p-5 md:p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:shadow-lg transition-all duration-300 h-full flex flex-col ${
                colorVariants[project.accentColor] || 'border-blue-400'
            }`}
        >
            <div className='w-full overflow-hidden rounded-xl mb-4 md:mb-6'>
                <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className='w-full h-auto object-cover hover:scale-105 transition-transform duration-500'
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                />
            </div>
            <h2 className={`font-bold text-white mb-2 md:mb-4 ${
                isMain ? 'text-xl sm:text-2xl md:text-3xl lg:text-4xl' : 'text-lg sm:text-xl md:text-2xl'
            }`}>
                {project.title}
            </h2>
            <p className={`text-white/80 leading-relaxed ${
                isMain ? 'text-sm sm:text-base md:text-lg' : 'text-xs sm:text-sm md:text-base'
            }`}>
                {project.description}
            </p>
            <div className='mt-auto pt-4 md:pt-6 flex flex-wrap gap-2'>
                {project.tags.map(tag => (
                    <span 
                        key={tag}
                        className={`px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs ${
                            project.accentColor === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                            project.accentColor === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-pink-500/20 text-pink-400'
                        }`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    )
})

ProjectCard.displayName = 'ProjectCard'

export default Showcase