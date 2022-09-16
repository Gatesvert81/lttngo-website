import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import { NavContext } from '../src/Components/Context'
import ItemCard from '../src/Components/ItemCard'
import SectionImage from '../src/Components/SectionImage'
import SectionText from '../src/Components/SectionText'

function Donate() {

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
        if (page !== "donate") setPage('donate')
    }, [])

    return (
        <div className='py-16'>
            <Head>
                <title>LTNGO | Donate</title>
                <meta name="description" content="Get to know more about Us" />
                <link rel="icon" href="/icons/logo.png" />
            </Head>
            <main className='flex justify-center items-center' >
                <h5 className='font-bold' >
                    Donate
                </h5>
            </main>
            <SectionImage title="Orphange" />

            <SectionImage title="Charity" />

            <SectionImage title="NGO" />

            <SectionText title="Donate">
                Help us Reach even more people and contribute into their lifes.
            </SectionText>
            <div className='w-full h-fit grid grid-cols-1 md:grid-cols-3 gap-2 px-10 md:px-20 ' >
                <ItemCard icon="visa.png">
                    Visa, Mastercard
                </ItemCard>
                <ItemCard icon="wallet.png">
                    Mobile Money
                </ItemCard>
                <ItemCard icon="parcel.png">
                    Donate in Kind
                </ItemCard>
            </div>
        </div>
    )
}

export default Donate