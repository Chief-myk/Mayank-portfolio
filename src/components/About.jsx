import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { skills, certificates } from "../assets/index"

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('about');
            if (element) {
                const rect = element.getBoundingClientRect();
                setIsVisible(rect.top < window.innerHeight - 100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial render
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        // window.location.href = "https://www.linkedin.com/in/mayankmittal1311/";
        window.open("https://www.linkedin.com/in/mayankmittal1311/", "_blank");
    };

    const handleClick2 = () => {
        const link = document.createElement('a')
        link.href = "/images/Mayank Mittal Resume.pdf"
        link.download = "Mayank Mittal Resume.pdf"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log("Download CV clicked");
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="about" className="scroll-mt-20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500 rounded-full filter blur-3xl opacity-10 animate-float-delay"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
            </div>

            <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 mb-4">
                            About <span className="text-blue-400">Me</span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col lg:flex-row gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        {/* Left Column - Profile Card */}
                        <motion.div
                            className="w-full lg:w-2/5 space-y-8"
                            variants={itemVariants}
                        >
                            {/* Profile Card */}
                            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
                                <div className="flex flex-col sm:flex-row items-center gap-6">
                                    {/* <div className="relative group">
                                        <motion.img
                                            src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Profile"
                                            className="h-40 w-40 object-cover rounded-xl border-2 border-orange-400/50 shadow-md group-hover:border-orange-400 transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                        />
                                        <div className="absolute -bottom-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                                            Open to Work
                                        </div>
                                    </div> */}
                                    <div className="text-white space-y-3">
                                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                                            Mayank Mittal
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed">
                                            Passionate Computer Science Engineering student at GGSIPU with expertise in cutting-edge technologies.
                                            I've developed innovative projects including AI systems, 3D simulations, gesture-controlled devices,
                                            and Real-Life Application Models.
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-500/30">Full Stack Dev</span>
                                            <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-500/30">App Developer</span>
                                            <span className="px-3 py-1 bg-orange-900/30 text-orange-300 text-xs rounded-full border border-orange-500/30">Cloud & DevOps</span>
                                            <span className="px-3 py-1 bg-green-900/30 text-green-300 text-xs rounded-full border border-green-500/30">Iot Enthusiast</span>
                                            <span className="px-3 py-1 bg-green-900/30 text-yellow-300 text-xs rounded-full border border-yellow-500/30">AI & ML Leaner</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Skills */}
                            {/* <div>
                                        <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                                            <span className="w-1 h-6 bg-purple-500 mr-2"></span>
                                            Skills
                                        </h3>
                                        <div className="space-y-3">
                                            {skills.map((skill, index) => (
                                                <div key={index} className="skill-item">
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-gray-300">{skill.name}</span>
                                                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                                        <motion.div
                                                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                                                            initial={{ width: 0 }}
                                                            animate={isVisible ? { width: `${skill.level}%` } : {}}
                                                            transition={{ duration: 1, delay: index * 0.1 }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div> */}

                            {/* Personal Vision Card */}
                            <motion.div
                                className="bg-gradient-to-br from-orange-900/20 to-orange-900/10 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/20 shadow-lg"
                                variants={itemVariants}
                            >
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-1 h-6 bg-orange-500 mr-2"></span>
                                    Personal Vision
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    My ambition is to become a billionaire by 23 by building groundbreaking technology companies that push human potential.
                                    I aim to lead advancements in military technology, creating impactful solutions for both offensive and defensive operations.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Skills & Details */}
                        <motion.div
                            className="w-full lg:w-3/5 space-y-8"
                            variants={itemVariants}
                        >
                            {/* Education & Skills Card */}
                            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                                <div className="space-y-6">
                                    {/* Education */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                                            <span className="w-1 h-6 bg-blue-500 mr-2"></span>
                                            Education
                                        </h3>
                                        <div className="pl-4 border-l-2 border-blue-500/30">
                                            <h4 className="text-lg font-semibold text-blue-300">BTech in Computer Science</h4>
                                            <p className="text-gray-400">Guru Gobind Singh Indraprastha University (GGSIPU)</p>
                                            <p className="text-sm text-gray-500 mt-1">Currently in 2nd Semester</p>
                                        </div>
                                    </div>



                                    {/* Certificates */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                                            <span className="w-1 h-6 bg-green-500 mr-2"></span>
                                            Certificates
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {certificates.map((cert, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-center p-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500/50 transition-colors"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    <span className="text-gray-300 text-sm">{cert}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                                            <span className="w-1 h-6 bg-yellow-500 mr-2"></span>
                                            Achievements & Awards
                                        </h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <span className="text-yellow-500 mr-2">🏆</span>
                                                <span className="text-gray-300">Satisfied 10+ clients with custom solutions</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-yellow-500 mr-2">🏆</span>
                                                <span className="text-gray-300">Participated in National Hackathons</span>
                                            </li>
                                            {/* <li className="flex items-start">
                                                <span className="text-yellow-500 mr-2">🏆</span>
                                                <span className="text-gray-300">Published research on military tech applications</span>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                variants={itemVariants}
                            >
                                <motion.button
                                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all hover:shadow-lg flex items-center cursor-pointer justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleClick}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    LinkedIn
                                </motion.button>
                                <motion.button
                                    className="flex-1 border border-orange-500 text-orange-300 hover:bg-orange-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center cursor-pointer gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleClick2}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download CV
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;