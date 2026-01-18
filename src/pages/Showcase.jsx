import React from 'react'

const Showcase = () => {
  const projects = [
    {
      id: 1,
      title: "AutoMorph AI",
      description:
        "AI-driven system that analyzes car images and recommends personalized upgrades, integrating computer vision, ML inference, and a commerce pipeline.",
      longDescription:
        "AutoMorph uses computer vision and machine learning pipelines to analyze uploaded car images and generate personalized upgrade recommendations. The system includes secure authentication, product recommendation logic, payment integration, and a scalable backend designed for real-world usage.",
      techStack: ["React", "Node.js", "Python", "TensorFlow", "MongoDB", "Stripe API"],
      githubLink: "https://github.com/Chief-myk/AutoMorph",
      liveLink: "https://automorph.demo.com",
      image: "/images/projects/a.png",
      tags: ["AI", "Computer Vision", "System Design", "Full Stack"],
      accentColor: "orange",
      featured: false,
    },
    {
      id: 2,
      title: "Multimodal AI Automation System",
      description:
        "A production-oriented automation system combining voice, gesture, and AI-based inputs to control system operations and services.",
      longDescription:
        "A modular multimodal automation platform integrating gesture recognition, speech processing, and system-level automation. Designed with event-driven components, API-based services, and extensible modules for real-time interaction and system control.",
      techStack: ["Python", "OpenCV", "SpeechRecognition", "FastAPI", "React"],
      githubLink: "https://github.com/Chief-myk/Jarvis-Ai-Voice-Gesture-Control",
      liveLink: "https://jarvis-ai-voice-gesture-control.vercel.app/",
      image: "/images/projects/jarvis.jpg",
      tags: ["AI", "Automation", "System Design", "Multimodal"],
      accentColor: "blue",
      featured: true,
    },
    {
      id: 3,
      title: "CiviShield",
      description:
        "A civic-tech platform for reporting, tracking, and analyzing public safety incidents with role-based access and real-time updates.",
      longDescription:
        "CiviShield is a scalable civic safety platform that allows citizens to report incidents while enabling authorities to manage, verify, and respond through dashboards. Includes role-based access control, geolocation-based reporting, and backend services designed for reliability and scale.",
      techStack: ["React", "Node.js", "PostgreSQL", "Map APIs", "JWT"],
      githubLink: "https://github.com/Chief-myk/CiviShield",
      liveLink: "https://civishield.demo.com",
      image: "/images/projects/ab.png",
      tags: ["Civic Tech", "Backend Systems", "Scalability", "Social Impact"],
      accentColor: "green",
      featured: true,
    },
    {
      id: 4,
      title: "FitGame",
      description:
        "A gamified fitness platform that converts real-world physical movement into in-game actions using motion tracking.",
      longDescription:
        "FitGame bridges fitness and gaming by mapping real-world exercises to gameplay mechanics. The system includes motion tracking, real-time feedback, user progression logic, and a backend designed for multiplayer and analytics support.",
      techStack: ["React Native", "Firebase", "TensorFlow.js", "Node.js"],
      githubLink: "https://github.com/Chief-myk/Fit_Games",
      liveLink: "https://fit-games.onrender.com/",
      image: "/images/projects/fit-game.png",
      tags: ["Fitness Tech", "Motion Tracking", "Mobile Systems"],
      accentColor: "purple",
      featured: false,
    },
    {
      id: 5,
      title: "KrishiMitra AI",
      description:
        "An AI-assisted agriculture platform providing crop insights, weather intelligence, and decision support for farmers.",
      longDescription:
        "KrishiMitra leverages ML models and external data sources to assist farmers with crop recommendations, disease detection, and weather forecasting. Designed with multilingual support and backend services optimized for rural accessibility.",
      techStack: ["React", "Django", "PostgreSQL", "Scikit-learn"],
      githubLink: "https://github.com/Chief-myk/krishiMitra-AI",
      liveLink: "https://krishi-mitra-ai-mu.vercel.app/",
      image: "/images/projects/k.png",
      tags: ["AI", "Agriculture Tech", "Data Systems"],
      accentColor: "green",
      featured: false,
    },
    // {
    //   id: 6,
    //   title: "URL Weaver",
    //   description:
    //     "A backend-focused URL shortening service with analytics, caching, and performance optimization.",
    //   longDescription:
    //     "A URL shortening system designed with database indexing, Redis-based caching, analytics tracking, and API-driven architecture. Focused on backend performance and data consistency.",
    //   techStack: ["Next.js", "PostgreSQL", "Redis"],
    //   githubLink: "https://github.com/Chief-myk/Url-Weaver",
    //   liveLink: "https://url-weaver-1.onrender.com/",
    //   image: "/images/projects/u.png",
    //   tags: ["Backend", "Caching", "System Design"],
    //   accentColor: "purple",
    //   featured: false,
    // },
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