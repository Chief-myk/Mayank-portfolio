import React from 'react'
import { abilities } from "../assets/index"

const FeatureCard = () => {
    return (
        <>
        <div className="flex justify-center w-full my-8 overflow-hidden">
            <div className="w-1/3 h-0.5 bg-gray-700 rounded-full transition-all duration-700 ease-in-out hover:w-1/2 hover:bg-gray-500 transform hover:scale-y-150 cursor-pointer animate-pulse"></div>
        </div>
        
        <div className='w-full px-4 sm:px-8 md:px-16 py-8'>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl'>
                {abilities.map(({ imgPath, title, desc }) => (
                    <div 
                        key={title} 
                        className='border-2 border-gray-700 rounded-2xl p-6 flex flex-col gap-4 hover:bg-gray-800/50 transition-colors duration-300'
                    >
                        <div className='w-12 h-12 flex items-center justify-center rounded-full bg-gray-700'>
                            <img src={imgPath} alt={title} className='w-6 h-6' />
                        </div>
                        <h3 className='text-white text-xl font-semibold'>
                            {title}
                        </h3>
                        <p className='text-gray-300 text-base'>
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default FeatureCard