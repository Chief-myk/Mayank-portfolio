import React from 'react'

const Showcase = () => {
    const projects = [
        {
            id: 1,
            title: "AutoMorph AI",
            description: "An AI-driven system that suggests personalized car upgrades and modifications based on uploaded images. Features include AI-powered recommendations, e-commerce integration, and real-time visualization of modifications.",
            longDescription: "AutoMorph uses computer vision and machine learning to analyze car images and suggest personalized upgrades. The system includes a full e-commerce platform for purchasing recommended products, user authentication, and a responsive dashboard for managing modifications.",
            techStack: ["React", "Node.js", "Python", "TensorFlow", "MongoDB", "Stripe API"],
            githubLink: "https://github.com/Chief-myk/AutoMorph",
            liveLink: "https://automorph.demo.com",
            image: "/images/projects/a.png",
            tags: ["AI", "Computer Vision", "E-Commerce", "Full Stack"],
            accentColor: "orange",
            featured: true,
        },
        {
            id: 2,
            title: "FitGame – Play, Train, Repeat",
            description: "A gamified fitness platform using motion tracking to turn real-world physical activity into interactive gameplay, motivating users to stay active.",
            longDescription: "FitGame combines fitness with gaming using advanced motion tracking technology. Users complete real exercises that translate into in-game progress, with multiplayer capabilities, achievement systems, and personalized workout plans.",
            techStack: ["React Native", "Firebase", "TensorFlow.js", "Node.js", "WebRTC"],
            githubLink: "https://github.com/Chief-myk/Fit_Games",
            liveLink: "https://fit-games.onrender.com/",
            image: "/images/projects/fit-game.png",
            tags: ["Fitness", "Motion Tracking", "Gaming", "Mobile App"],
            accentColor: "purple",
            featured: false,
        },
        {
            id: 3,
            title: "JARVIS AI System",
            description: "A Python-based AI assistant combining voice and gesture controls for system automation, media management, translation, and interactive user experience.",
            longDescription: "JARVIS is a comprehensive AI assistant that handles system automation, media control, real-time translation, smart notifications, and gesture-based interactions. It integrates with multiple APIs and services for a seamless smart environment experience.",
            techStack: ["Python", "OpenCV", "SpeechRecognition", "FastAPI", "React"],
            githubLink: "https://github.com/Chief-myk/Jarvis-Ai-Voice-Gesture-Control",
            liveLink: "https://jarvis-ai-voice-gesture-control.vercel.app/",
            image: "/images/projects/jarvis.jpg",
            tags: ["AI", "Voice Control", "Automation", "Python"],
            accentColor: "blue",
            featured: true,
        },
        {
            id: 4,
            title: "KrishiMitra AI",
            description: "An AI-powered platform that provides farmers with real-time crop suggestions, weather alerts, and soil analysis for efficient agricultural management.",
            longDescription: "KrishiMitra leverages machine learning and satellite data to provide farmers with actionable insights. Features include crop recommendation engine, disease detection, weather forecasting, market price analysis, and multilingual support for rural farmers.",
            techStack: ["React", "Django", "PostgreSQL", "Scikit-learn", "OpenWeather API"],
            githubLink: "https://github.com/Chief-myk/krishiMitra-AI",
            liveLink: "https://krishi-mitra-ai-mu.vercel.app/",
            image: "/images//projects/k.png",
            tags: ["AI", "Agriculture", "Data Science", "Social Impact"],
            accentColor: "green",
            featured: false
        },
        {
            id: 5,
            title: "E-Commerce Platform",
            description: "A full-stack MERN application featuring dynamic product management, secure user authentication, shopping cart, and payment gateway integration.",
            longDescription: "A complete e-commerce solution with admin dashboard, inventory management, user roles, review system, wishlist functionality, and secure payment processing. Includes advanced features like product recommendations and order tracking.",
            techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Stripe"],
            githubLink: "https://github.com/Chief-myk/Ecommerce",
            liveLink: "https://ecommerce-ailk.onrender.com/",
            image: "/images/projects/e.png",
            tags: ["MERN Stack", "E-Commerce", "Full Stack"],
            accentColor: "green",
            featured: false
        },
        {
            id: 6,
            title: "Movie Watching App",
            description: "A React Native app for streaming and discovering movies with interactive UI, recommendations, and personalized watchlists.",
            longDescription: "Feature-rich movie streaming application with personalized recommendations, social features, offline viewing, and cross-platform compatibility. Includes advanced search, rating system, and curated collections.",
            techStack: ["React Native", "Firebase", "TMDB API", "Redux", "Expo"],
            githubLink: "https://github.com/yourusername/movie-app",
            liveLink: "https://movies.demo.com",
            image: "/images/projects/m.jpeg",
            tags: ["React Native", "Streaming", "Mobile App"],
            accentColor: "red",
            featured: false
        },
        {
            id: 7,
            title: "URL Shortener",
            description: "A lightweight web app that shortens long URLs, tracks analytics, and provides QR code generation for easy sharing.",
            longDescription: "Advanced URL shortening service with detailed analytics dashboard, custom slugs, QR code generation, link expiration, and bulk URL shortening. Features real-time click tracking and geographic analytics.",
            techStack: ["Next.js", "PostgreSQL", "Redis", "Chart.js", "QR Code"],
            githubLink: "https://github.com/Chief-myk/Url-Weaver",
            liveLink: "https://url-weaver-1.onrender.com/",
            image: "/images/projects/u.png",
            tags: ["Next.js", "Analytics", "Utility"],
            accentColor: "purple",
            featured: false
        },
        // {
        //     id: 8,
        //     title: "Weather App",
        //     description: "An interactive web and mobile app providing real-time weather updates, forecasts, and alerts based on user location.",
        //     longDescription: "Comprehensive weather application with 7-day forecasts, severe weather alerts, historical data, and interactive maps. Supports multiple locations, weather comparisons, and detailed meteorological data visualization.",
        //     techStack: ["React", "OpenWeather API", "Chart.js", "PWA", "Geolocation API"],
        //     githubLink: "https://github.com/yourusername/weather-app",
        //     liveLink: "https://weather.demo.com",
        //     image: "/images/projects/w.png",
        //     tags: ["React", "API Integration", "PWA"],
        //     accentColor: "skyblue",
        //     featured: false
        // },
        // {
        //     id: 9,
        //     title: "Blogging Platform",
        //     description: "A modern blogging platform with user authentication, post creation, commenting, and responsive design for seamless reading and writing.",
        //     longDescription: "Full-featured blogging platform with rich text editor, syntax highlighting, social sharing, comment system, user profiles, and admin dashboard. Includes SEO optimization, dark mode, and progressive web app capabilities.",
        //     techStack: ["Next.js", "Sanity CMS", "Tailwind CSS", "NextAuth", "Vercel"],
        //     githubLink: "https://github.com/Chief-myk/Blogify",
        //     liveLink: "https://blogify-ukqr.onrender.com/",
        //     image: "/images/projects/b.png",
        //     tags: ["Next.js", "CMS", "Full Stack"],
        //     accentColor: "pink",
        //     featured: false
        // }
    ];

    const featuredProjects = projects.filter(project => project.featured);
    const regularProjects = projects.filter(project => !project.featured);

    return (
        <section id='projects' className='relative w-full px-5 md:px-10 bg-black py-20'>
            <div className='w-full max-w-7xl mx-auto'>
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 mb-4">
                        My <span className="text-blue-400">Projects</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        A collection of my work showcasing full-stack development, AI integration, and innovative solutions
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Featured Projects - Large Cards */}
                {featuredProjects.length > 0 && (
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-8 text-center">Featured Projects</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {featuredProjects.map(project => (
                                <FeaturedProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Regular Projects - Grid Layout */}
                {regularProjects.length > 0 && (
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Other Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {regularProjects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

// Featured Project Card Component
const FeaturedProjectCard = ({ project }) => {
    return (
        <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                    </span>
                </div>
            </div>

            <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>

                <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                    {project.description}
                </p>

                <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.longDescription}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                            <span
                                key={tech}
                                className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </a>

                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 ${[1, 6, 8].includes(Number(project.id))
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                            }`}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                        Live Demo
                    </a>


                </div>
            </div>
        </div>
    )
}

// Regular Project Card Component
const ProjectCard = ({ project }) => {
    return (
        <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 h-full flex flex-col">
            <div className="relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                <p className="text-gray-300 mb-4 flex-1 leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack Preview */}
                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map(tech => (
                            <span
                                key={tech}
                                className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 3 && (
                            <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">
                                +{project.techStack.length - 3} more
                            </span>
                        )}
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto pt-4">
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 ${[6, 8].includes(Number(project.id))
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                            } bg-gray-800 hover:bg-gray-700 text-white text-center py-2 rounded-lg transition-colors duration-300 text-sm`}
                    >
                        GitHub
                    </a>
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 bg-blue-600 ${[1, 6, 8].includes(Number(project.id))
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"} hover:bg-blue-700 text-white text-center py-2 rounded-lg transition-colors duration-300 text-sm`}
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Showcase