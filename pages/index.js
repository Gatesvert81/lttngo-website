import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import AnchorLink from '../src/Components/AnchorLink'
import Button from '../src/Components/Button'
import { NavContext } from '../src/Components/Context'
import EventCard from '../src/Components/EventCard'
import SectionImage from '../src/Components/SectionImage'
import SectionText from '../src/Components/SectionText'

export default function Home() {

  const [page, setPage] = useContext(NavContext)

  useEffect(() => {
    if (page !== "home") setPage('home')
  }, [])

  const events = [
    {
      title: "Relationship Summit 2022",
      description: "Learn how to propery get into and maintain a sustainable relationship in life"
    },
    {
      title: "Relationship Summit 2022",
      description: "Learn how to propery get into and maintain a sustainable relationship in life"
    },
    {
      title: "Relationship Summit 2022",
      description: "Learn how to propery get into and maintain a sustainable relationship in life"
    },
  ]

  return (
    <div className='py-16'>
      <Head>
        <title>LTTNGO | Home</title>
        <meta name="description" content="Life to the Nations Global Outreach" />
        <link rel="icon" href="/icons/logo.png" />
      </Head>

      <main className='flex flex-col justify-center items-center gap-8 text-center' >
        <div className='w-full h-full flex  justify-center items-center gap-5'>
          <h6 className='text-sm' >
            Accra, Gh
          </h6>
          <h6 className='text-sm'>
            2020
          </h6>
          <h6 className='text-sm'>
            2nd June
          </h6>
        </div>
        <h2 className='font-bold text-5xl ' >
          KING OF GLORY
        </h2>
        <p>
          You cannot touch on the greatness of God without His glory manifesting. This is your time.
        </p>
        <AnchorLink route="/contact">
          <Button style="primary-btn" >
            Join us
          </Button>
        </AnchorLink>
      </main>

      <section className='h-40vh py-0 ' >
        <div className='w-full h-full relative' >
          <Image src="/worship.webp" layout="fill" className='object-cover' />
        </div>
      </section>

      <SectionText title="LTTNGO is a church that believes in Jesus, and a church that loves God and people.">
        Overwhelmed by the gift of salvation we have found in Jesus, we have a heart for authentic worship, are passionate about the ocal church, and are on a mission to see God&#39;s Kingdom established across the earth.
      </SectionText>

      <section className='flex flex-col md:grid md:grid-cols-4  gap-5' >
        <div className='flex flex-col md:py-5 gap-1 md:justify-between md:border-r-[1px] '>
          <h5 className='capitalize text-green md:text-' >
            Conferences &amp; Events
          </h5>
          <p>
            Come and experience Christ in a new way.
          </p>
        </div>
        {
          events.map((event, index) => (
            <div className='w-full ' key={index} >
              <EventCard title={event.title} button >
                {event.description}
              </EventCard>
            </div>
          ))
        }
      </section>

      <SectionImage title="Donation" route="/donate" btnText="Donate now">
        Who ever is generous to the poor lends to the Lord, and He will repay him for his deed.
      </SectionImage>

    </div>
  )
}
