import Head from 'next/head'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { NavContext } from '../src/Components/Context'
import EventCard from '../src/Components/EventCard'

function Events() {

    const [detail, setDetail] = useState({})

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
        if (page !== "events") setPage('events')
    }, [])

    const events = [
        {
            id: 1,
	    image: 'events/relationship-talk.JPG',
            title: "Relationship Summit 2022",
            description: "Learn how to propery get into and maintain a sustainable relationship in life",
            theme: "Before You say 'I DO'",
            date: "20th September, 2022",
            location: "UPSA Vice Chnacellor Complex",
            time: "7:00 PM GMT"
        },
        {
            id: 2,
	    image: 'events/relationship-talk.JPG',
            title: "Camp Meeting 2022",
            description: "Learn how to propery get into and maintain a sustainable relationship in life",
            theme: "Intimacy with God",
            date: "8th October, 2022",
            location: "Uniersity of Winneba",
            time: "10:00 PM GMT"
        },
        {
            id: 3,
image: 'events/relationship-talk.JPG',
            title: "Impact Service",
            description: "Learn how to propery get into and maintain a sustainable relationship in life",
            theme: "Prayer",
            date: "28th September, 2022",
            location: "UPSA Vice Chnacellor Complex",
            time: "7:00 PM GMT"
        },
    ]

    useEffect(() => {
        setDetail(events[0])
    }, [])


    return (
        <div className='py-16'>
            <Head>
                <title>LTTNGO | Events</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='flex justify-center items-center' >
                <h5 className='font-bold' >
                    Upcoming events
                </h5>
            </main>
            <section className='h-50vh relative' >
                <div className='w-full h-full relative' >
                    <Image src={`/images/${detail?.image}`} layout="fill" className='object-cover' />
                    <div className='w-full h-full absolute top-0 left-0 p-5 flex flex-col justify-end bg-black/50 items-center text-center text-white gap-20' >
                        <div>
                            <h4>
                                {detail?.title}
                            </h4>
                            <h6 className='text-base capitalize' >
                                Theme: {detail?.theme}
                            </h6>
                        </div>
                        <div className='w-full flex justify-between items-center ' >
                            <h6 className='text-xs' >
                                {detail?.date}
                            </h6>
                            <h6 className='text-xs'>
                                {detail?.location}
                            </h6>
                            <h6 className='text-xs'>
                                {detail?.time}
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
<section className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    events.map((event, index) => (
                        <div
                            className='w-full '
                            key={index}
                            onClick={() => setDetail(event)}
                        >
                            <EventCard image={event.image} title={event.title} button selected={event.id === detail?.id} >
                                {event.description}
                            </EventCard>
                        </div>
                    ))
                }
            </section>

        </div>
    )
}

export default Events
