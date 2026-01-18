import React, { useRef, useState, useEffect } from 'react'
import { counterItems } from "./index"
import CountUp from "react-countup"
import { useInView } from 'framer-motion'

export const AnimatedCounter = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })
    const [startCounting, setStartCounting] = useState(false)

    useEffect(() => {
        if (isInView) {
            // Small delay to ensure smooth animation
            const timer = setTimeout(() => {
                setStartCounting(true)
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [isInView])

    return (
        <div 
            ref={ref}
            id='counter' 
            className='px-3.5 xl:mt-0 mt-24'
        >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto'>
                {counterItems.map((item, index) => (
                    <div 
                        key={`counter-item-${index}`} 
                        className='bg-zinc-900 rounded-lg p-8 flex flex-col justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
                    >
                        <div className='text-white text-4xl md:text-5xl font-bold mb-2'>
                            {startCounting ? (
                                <CountUp 
                                    start={0} 
                                    end={item.value} 
                                    duration={2} 
                                    suffix={item.suffix}
                                    delay={0}
                                />
                            ) : (
                                <span>0{item.suffix || ''}</span>
                            )}
                        </div>
                        <div className='text-white text-base md:text-lg text-center'>
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}