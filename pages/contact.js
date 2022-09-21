import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '../src/Components/Button'
import SectionImage from '../src/Components/SectionImage'
import SectionText from '../src/Components/SectionText'
import { NavContext } from '../src/Components/Context'

function Contact() {

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
        if (page !== "contact") setPage('contact')
    }, [])

    return (
        <div className='py-16'>
            <Head>
                <title>LTTNGO | Contact</title>
                <meta name="description" content="Get in touch with us" />
                <link rel="icon" href="/icons/logo.png" />
            </Head>
            <main className='flex justify-center items-center' >
                <h5 className='font-bold' >
                    Stay connected
                </h5>
            </main>
            <SectionText title="Can We Pray With You?" btnText="Submit a prayer request" >
                The prayer of a person living right with God is something to be reckoned with - James 5:16 MSG
            </SectionText>

            <SectionImage title="Join our online Service" btnText="Join online" route="#contact-form" >
                Join from anywhere around the world and listen to our messages.
            </SectionImage>

            <motion.section id="contact-form" className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <form className='w-full grid grid-cols-1 gap-2' >
                    <fieldset>
                        <label>
                            Full Name
                        </label>
                        <input type="text" placeholder='Gates Vert' />
                    </fieldset>
                    <fieldset>
                        <label>
                            Email
                        </label>
                        <input type="email" placeholder='gatesvert@gmail.com' />
                    </fieldset>
                    <fieldset>
                        <label>
                            Telephone Number
                        </label>
                        <input type="tel" placeholder='054126847' />
                    </fieldset>
                    <fieldset>
                        <label>
                            Message
                        </label>
                        <textarea type="text" placeholder='I want to give my life to Jesus Christ' />
                    </fieldset>
                    <fieldset>
                        <Button style=" w-full primary-btn" >
                            Send Message
                        </Button>
                    </fieldset>
                </form>
                <motion.div className='w-full h-40vh bg-sea-blue before:w-full before:h-full before:absolute  before:-z-10  before:content-['Loading Location'] before:top-0 before:left-0 relative flex flex-col justify-center items-center '  >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15882.90891084092!2d-0.2156418!3d5.6072483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e6f1eb37da2da9d!2sAquatec%20Services%20Limited!5e0!3m2!1sen!2sgh!4v1661168994378!5m2!1sen!2sgh"
                        allowFullScreen loading="lazy" className="w-full h-full" ></iframe>
                </motion.div>
            </motion.section>
        </div>
    )
}

export default Contact
