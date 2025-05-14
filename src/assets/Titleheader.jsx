import React from 'react'

const Titleheader = ({ title, sub }) => {
    return (
        <div>
            <div className='flex flex-col items-center gap-5'>

                <div className='bg-zinc-800 py-2 px-4 rounded-full w-fit text-sm md:text-base text-nowrap'>
                    <p>{sub}</p>
                </div>
                <div className='font semi-bold md:text-5xl text-3xl text-center'>
                    {title}
                </div>
            </div>
        </div>
    )
}

export default Titleheader
