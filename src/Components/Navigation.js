import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import AnchorLink from './AnchorLink'
import Button from './Button'
import { NavContext } from './Context'

function Navigation() {
    const [sideNav, setSideNav] = useState(false)
    const [show, handleShow] = useState(false)

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
        const myFunc = () => {
            if (window.scrollY > 5) {
                handleShow(true);
            } else handleShow(false);
        }
        window.addEventListener("scroll", myFunc)
        return () => {
            window.removeEventListener("scroll", myFunc)
        }
    }, [])

    useEffect(() => {

        if (sideNav) {
            window.document.body.scroll = "no"
            window.document.body.style.overflow = "hidden"
        } else {
            window.document.body.scroll = "yes"
            window.document.body.style.overflow = "scroll"
        }
    }, [sideNav])

    const handleNav = (pageName) => {
        setPage(pageName)
        setSideNav(!sideNav)
    }

    return (
        <>
            <nav
                className={`w-full h-16 fixed top-0 left-0 z-30 flex justify-between items-center px-10 lg:px-36 py-2 border-b-2 border-white/70 transition ease-in-out ${show ? "bg-white/70 backdrop-blur-md" : "transparent"} ${sideNav ? "bg-white/70 backdrop-blur-md" : "transparent"} `} >
                <div className="w-32 h-full relative" >
                    <AnchorLink route='/'>
                        <Image src="/icons/logo.png" layout='fill' className="object-contain" />
                    </AnchorLink>
                </div>
                <div
                    className=' flex w-6 h-6 bg-transparent flex-col justify-evenly items-center relative overflow-hidden cursor-pointer'
                    onClick={() => setSideNav(!sideNav)}
                >
                    <div className={`w-full h-1 rounded-full transition duration-500 bg-black ease-in-out ${sideNav ? "-rotate-45 translate-y-1" : null} `} />
                    <div className={`w-full h-1 rounded-full bg-black transition duration-500 ease-in-out ${sideNav ? "rotate-45 -translate-y-1.5" : null} `} />
                </div>
            </nav>
            <AnimatePresence>
                {
                    sideNav && (
                        <motion.nav
                            className='w-full h-full fixed top-16 left-0 z-20 bg-white/70 backdrop-blur-md flex flex-col gap-10 md:gap-5 justify-center items-center '
                            initial={{
                                opacity: 0,
                                y: "-5%"
                            }}
                            animate={{
                                opacity: 1,
                                y: "0%"
                            }}
                            exit={{
                                opacity: 0,
                                y: "-5%"
                            }}
                            transition={{
                                delayChildren: 0.5,
                                default: {
                                    duration: 0.5
                                },
                            }}
                        >
                            <AnchorLink route="/">
                                <Button
                                    style={`side-nav-btn ${page === 'home' ? "page" : null} `}
                                    click={() => handleNav('home')}
                                >
                                    Home
                                </Button>
                            </AnchorLink>
                            <AnchorLink route="/about">
                                <Button
                                    style={`side-nav-btn ${page === 'about' ? "page" : null} `}
                                    click={() => handleNav('about')}
                                >
                                    About
                                </Button>
                            </AnchorLink>
                            <AnchorLink route="/events">
                                <Button
                                    style={`side-nav-btn ${page === 'events' ? "page" : null} `}
                                    click={() => handleNav('events')}
                                >
                                    events
                                </Button>
                            </AnchorLink>
                            <AnchorLink route="/podcasts">
                                <Button
                                    style={`side-nav-btn ${page === 'podcasts' ? "page" : null} `}
                                    click={() => handleNav('podcasts')}
                                >
                                    podcasts
                                </Button>
                            </AnchorLink>
                            <AnchorLink route="/donate">
                                <Button
                                    style={`side-nav-btn ${page === 'donate' ? "page" : null} `}
                                    click={() => handleNav('donate')}
                                >
                                    donate
                                </Button>
                            </AnchorLink>
                            <AnchorLink route="/contact">
                                <Button
                                    style={`side-nav-btn ${page === 'contact' ? "page" : null} `}
                                    click={() => handleNav('contact')}
                                >
                                    Contact
                                </Button>
                            </AnchorLink>
                        </motion.nav>
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default Navigation