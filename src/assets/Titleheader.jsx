import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Titleheader = ({ title, sub }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const textGradient = {
    background: 'linear-gradient(45deg, #A020F0, #2070F0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <div ref={ref}>
      <motion.div 
        className='flex flex-col items-center gap-5 mt-10'
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div 
          className='bg-gradient-to-r from-purple-600 to-blue-500 py-2 px-6 rounded-full w-fit text-sm md:text-base text-nowrap shadow-lg'
          variants={itemVariants}
        >
          <p className='text-white font-medium'>{sub}</p>
        </motion.div>
        
        <motion.div 
          className='font-bold md:text-5xl text-3xl text-center mt-6'
          variants={itemVariants}
          style={textGradient}
        >
          {title}
        </motion.div>
{/*         
        <motion.div 
          className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          variants={itemVariants}
        /> */}
      </motion.div>
    </div>
  )
}

export default Titleheader;