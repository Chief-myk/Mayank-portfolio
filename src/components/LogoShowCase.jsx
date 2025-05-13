import React from 'react'
import { logoIconsList } from "../assets/index"
import { motion } from 'framer-motion'

const LogoShowCase = () => {
    const LogoIcon = ({ icon, uniqueKey }) => {
        return (
            <div key={uniqueKey} className='flex-none px-4 flex items-center justify-center'>
                <img 
                    src={icon.imgPath} 
                    alt={icon.name || 'logo'} 
                    className='max-h-10 bg-black  md:max-h-12 w-auto object-contain'
                />
            </div>
        )
    }

    return (
        <div className='relative'>
            {/* Gradient fade edges */}
            <div className='absolute inset-y-0 left-0 w-32 z-10 pointer-events-none 
                bg-gradient-to-r from-black to-transparent' />
            <div className='absolute inset-y-0 right-0 w-32 z-10 pointer-events-none 
                bg-gradient-to-l from-black to-transparent' />

            <div className='h-52 w-full overflow-hidden relative'>
                <motion.div 
                    className='flex items-center absolute h-full'
                    animate={{
                        x: ['0%', '-100%']
                    }}
                    transition={{
                        duration: 30,
                        ease: 'linear',
                        repeat: Infinity
                    }}
                >
                    {[...logoIconsList, ...logoIconsList, ...logoIconsList].map((icon, index) => (
                        <LogoIcon 
                            key={`logo-${index}-${icon.imgPath}`} 
                            icon={icon} 
                            uniqueKey={`logo-${index}-${icon.imgPath}`}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default LogoShowCase