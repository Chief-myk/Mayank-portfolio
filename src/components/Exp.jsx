// import React, { useRef } from 'react'
// import Titleheader from '../assets/Titleheader'
// import {expCards} from '../assets/index'

// const Exp = () => {
//     cardRef = useRef([]);
//     cosnt hadlemousemove = (index) = (e) =>{
//         const card = cardref.current[index]
//         if(!card)
//             return

//         const rect = card.getBoundingClientReact();
//         const mouseX = e.client.X - rect.left -rect.width / 2
//         const mouseY = e.client.Y - rect.top - rect.height / 2

//         let angle = Math.atan2(mouseX , mouseY)*(180 / Math.PI);
//         angle = (angle + 360) % 360

//         card style.setPorperty('--start' , angle + 60)
//     }
//     return (
//         <section id="experience" className='w-full mt:20 px-7 py:8  xl:px-0'>
//             <div className='w-full h-full md:px-20 px-5'>
//                 <Titleheader title="Professional Work Experience " sub="💼 My Carrier Overview" />
//                 <div className='mt-32 relative'>
//                     <div className='relative z-50 xl:py-20 py-10'>
//                         {/* LEft Part */}
//                         {expCards.map((card , index)=>{
//                             <div key={card.title} className='text-white'>
//                                 <div className='rounded xl border-gray-700 px-5 py-5 md:px-20 md:py-10 flex flex-col ' onMouseMove={handlemousemove}>
//                                     <div className="absolute w-[100%] h-[100%] left-[50%] right-[50%] hover:transform-border- translate-2.5 filter-blur opacity-0 opacity-5">
//                                         <div>
//                                             {Array.from({length:5},(_,i)=>{
//                                                 <img src="/images/star.png" alt="star" className='size-5' />
//                                             })}
//                                         </div>
//                                         <div className='mb-5'>
//                                             <p>
//                                                 {card.Review}
//                                             </p>
//                                         </div>

//                                     </div>
//                                 <div className='xl:w-2/6 flex items-center gap-5 mb:10'>
//                                 <div>
//                                     <img src={card.imgPath} alt={card.title} />
//                                 </div>
//                                 </div>
//                                 </div>
//                             </div>
                            
//                         })}
// {/* Right PArt */}
//                         <div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Exp
