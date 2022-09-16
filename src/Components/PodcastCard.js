import Image from 'next/image'
import React from 'react'
import Button from './Button'

function PodcastCard() {
    return (
        <div className='w-full h-20 flex justify-between items-center' >
            <div className='w-fit h-full flex justify-start items-center gap-2 ' >
                <div className='w-10 h-10 relative' >
                    <Image src="/worship.webp" alt="worship" layout="fill" className="object-cover" />
                </div>
                <div>
                    <h6 className='text-sm normal-case' >
                        The Power of Time Management
                    </h6>
                    <p className='text-xs normal-case'>
                        Pastor Joshua
                    </p>
                </div>
            </div>
            <p className=' hidden md:block text-xs normal-case'>
                1:08:16
            </p>
            <div className='w-fit h-full flex justify-start items-center gap-1 '>
                <Button style="w-5 h-6 relative  " >
                    <Image src="/icons/play.png" alt="play" layout="fill" className="object-contain" />
                </Button>
                <Button style=" w-4 h-5 relative" >
                    <Image src="/icons/share.png" alt="share" layout="fill" className="object-contain" />
                </Button>
            </div>
        </div>
    )
}

export default PodcastCard