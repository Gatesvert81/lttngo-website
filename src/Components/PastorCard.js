import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import Button from './Button'

function PastorCard({ name, position, children }) {

    const [expand, setExpand] = useState(false)

    return (
        <>
            <div className='w-full h-80 cursor-pointer ' onClick={() => setExpand(!expand)} >
                <div className='w-full h-[60%] relative' >
                    <Image src="/worship.webp" layout="fill" className='object-cover' />
                </div>
                <div className='flex flex-col justify-between p-2 items-center gap-5' >
                    <div className='text-center'>
                        <h6>
                            {name}
                        </h6>
                        <p className='text-xs capitalize font-semibold'>
                            {position}
                        </p>
                    </div>
                    <div className='flex flex-col jsutify-center items-center' >
                        <div className='icon'>
                            <Image src="/icons/cross.png" layout="fill" className='object-contain' />
                        </div>
                        <p className='text-sm uppercase font-semibold' >
                            About Pastor
                        </p>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {
                    expand && (
                        <motion.div
                            className='w-full h-full grid grid-cols-1 md:grid-cols-2 backdrop-blur-md bg-white/70 rounded-md fixed z-10 top-0 left-0 p-10 cursor-pointer '
                            onClick={() => setExpand(!expand)}
                            initial={{
                                opacity: 0,
                                scale: 0.95
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1
                            }}
                            exit={{
                                opacity: 0,
                                scale: 1.05
                            }}>
                            <div className='w-full self-center h-[80%] relative' >
                                <Image src="/worship.webp" layout="fill" className='object-cover' />
                            </div>
                            <div className='w-full h-full flex flex-col justify-center text-center p-5' >
                                <p>
                                    {children}
                                </p>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default PastorCard