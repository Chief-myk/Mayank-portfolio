import React from 'react';
import {socialImgs} from "../assets/index"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-5 bg-black-200 w-full'>
      <div className='container mx-auto px-5 md:px-10 xl:px-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4'>
          {/* Brand/Name Section */}
          <div className='flex justify-center md:justify-start items-center'>
            <a 
              href="/" 
              className='text-2xl font-medium hover:text-white transition-colors duration-300'
              aria-label="Home"
            >
              Mayank Mittal
            </a>
          </div>
          
          {/* Social Links Section */}
          <div className='flex items-center justify-center gap-4'>
            {socialImgs.map((social) => (
              <a
                href={social.url}
                className='
                  flex justify-center items-center 
                  rounded-xl w-10 h-10 md:w-12 md:h-12 
                  cursor-pointer transition-all 
                  duration-300 hover:bg-black-50 hover:scale-110
                  focus:outline-none focus:ring-2 focus:ring-white-50
                '
                target='_blank'
                rel='noopener noreferrer'
                key={social.name}
                aria-label={social.alt}
              >
                <img 
                  src={social.svgPath} 
                  alt={social.name} 
                  className='w-5 h-5 md:w-6 md:h-6 bg-white rounded-sm'
                />
              </a>
            ))}
          </div>
          
          {/* Copyright Section */}
          <div className='flex flex-col justify-center'>
            <p className='text-sm text-center md:text-right text-white'>
              © {currentYear} Mayank Mittal. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;