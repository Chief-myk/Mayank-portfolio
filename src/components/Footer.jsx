import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaFacebook />, url: 'https://facebook.com/mayank.mittal.1069020', name: 'Facebook' },
  { icon: <FaGithub />, url: 'https://github.com/Chief-myk/', name: 'GitHub' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com/in/mayankmittal1311/', name: 'LinkedIn' },
  { icon: <FaInstagram />, url: 'https://instagram.com/mayankmittal.1306/', name: 'Instagram' },
  { icon: <FaTwitter />, url: 'https://x.com/MayankMittal06', name: 'Twitter' }
];


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
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="
          flex justify-center items-center 
          rounded-full w-8 h-8 md:w-10 md:h-10 
          cursor-pointer transition-all 
          duration-300 bg-gray-200 
          hover:bg-blue-500 hover:scale-110 
          focus:outline-none focus:ring-2 focus:ring-blue-300
        "
              >
                <div className="text-gray-700 hover:text-white text-xl md:text-2xl">
                  {social.icon}
                </div>
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