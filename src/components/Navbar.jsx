import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { navLinks } from "../assets/index";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    
    return (
        <>
            {/* Spacer div to prevent content hiding - only on mobile */}
            {isMobile && <div className="h-20 md:h-0"></div>}
            
            <motion.header 
                className={`${isMobile ? 'fixed' : 'sticky'} top-0 z-50 w-full xl:w-[70vw] mx-auto py-0 xl:py-4 px-2 md:px-2 lg:px-8`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div 
                    className="bg-black/80 backdrop-blur-sm transition-all duration-300 w-full h-fit rounded-lg flex justify-between items-center py-3 px-2 md:px-6 border border-white/10"
                >
                    {/* Logo */}
                    <motion.a 
                        href="#hero" 
                        className="text-white font-bold text-xl md:text-2xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Mayank | Mittal
                    </motion.a>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            {navLinks.map(({ link, name }) => (
                                <motion.li 
                                    key={name} 
                                    className="text-white hover:text-gray-300 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <a href={link} className="text-lg relative group">
                                        {name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                    
                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <motion.button 
                            onClick={toggleMobileMenu}
                            className="md:hidden text-white focus:outline-none"
                            aria-label="Toggle mobile menu"
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-6 w-6" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </motion.button>
                    )}
                    
                    {/* Contact Button (desktop) */}
                    <motion.a 
                        href="#contact" 
                        className="hidden md:block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <button className="bg-white hover:bg-gray-200 rounded-lg text-black px-4 py-2 font-medium transition-colors cursor-pointer shadow-md hover:shadow-lg">
                            Contact Me
                        </button>
                    </motion.a>
                </div>
                
                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isMobile && mobileMenuOpen && (
                        <motion.div 
                            className="md:hidden bg-black/90 backdrop-blur-sm mt-2 rounded-lg shadow-lg py-4 px-4 border border-white/10"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ul className="space-y-4">
                                {navLinks.map(({ link, name }) => (
                                    <motion.li 
                                        key={name} 
                                        className="text-white hover:text-gray-300 transition-colors"
                                        initial={{ x: -20 }}
                                        animate={{ x: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <a 
                                            href={link} 
                                            className="block py-2 text-lg relative group"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {name}
                                            <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                                        </a>
                                    </motion.li>
                                ))}
                                <motion.li
                                    initial={{ x: -20 }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                >
                                    <a 
                                        href="#contact" 
                                        className="block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <button className="w-full bg-white hover:bg-gray-200 rounded-lg text-black px-4 py-2 font-medium shadow-md hover:shadow-lg transition-shadow">
                                            Contact Me
                                        </button>
                                    </a>
                                </motion.li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
};

export default Navbar;