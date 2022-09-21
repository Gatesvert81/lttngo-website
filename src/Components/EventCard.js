import Image from 'next/image'
import React from 'react'
import AnchorLink from './AnchorLink'
import Button from './Button'

function EventCard({ title, children, image, button, selected }) {
    return (
        <div className={`w-full h-60 group shadow-lg bg-transparent hover:text-white hover:shadow-xl hover:shadow-green hover:border-1 hover:border-green flex flex-col transition duration-500 ease-in-out justify-between items-center text-center p-5 relative cursor-pointer ${selected && "border-[1px] shadow-lg border-green shadow-green " } `} >
            <div className=' opacity-0 group-hover:opacity-100 group-hover:block transition duration-500 ease-in-out w-full h-full absolute top-0 left-0 -z-10' >
                <div className='w-full h-full relative' >
                    <Image src={`/images/${image}`} layout="fill" className='object-cover' />
                </div>
            </div>
            <h6 className='md:text-lg' >
                {title}
            </h6>
            <p  >
                {children}
            </p>
            {
                button && (
                    <AnchorLink route="/events">
                        <Button style="secondary-btn group-hover:text-green transition duration-500 ease-in-out" >
                            Learn More
                        </Button>
                    </AnchorLink>
                )
            }
        </div>
    )
}

export default EventCard
