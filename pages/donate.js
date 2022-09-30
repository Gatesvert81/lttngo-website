import Head from 'next/head';
import React, { useContext, useState, useEffect } from 'react';
import { NavContext } from '../src/Components/Context';
import ItemCard from '../src/Components/ItemCard';
import SectionImage from '../src/Components/SectionImage';
import SectionText from '../src/Components/SectionText';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../src/Components/Button';

function Donate() {
  const [donate, setDonate] = useState(null);

  const [page, setPage] = useContext(NavContext);

  useEffect(() => {
    if (page !== 'donate') setPage('donate');
  }, []);

  return (
    <>
      <div className="py-16">
        <Head>
          <title>LTTNGO | Donate</title>
          <meta name="description" content="Get to know more about Us" />
          <link rel="icon" href="/icons/logo.png" />
        </Head>
        <main className="flex justify-center items-center">
          <h5 className="font-bold">Donate</h5>
        </main>
        <SectionImage image="donations/donation-eat.JPG" title="Orphange" />

        <SectionImage image="donations/donation-shake.JPG" title="Charity" />

        <SectionImage image="donations/donation-smile.JPG" title="NGO" />

        <SectionText title="Donate">
          Help us Reach even more people and contribute into their lifes.
        </SectionText>
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-3 gap-2 px-10 md:px-20 ">
          <ItemCard icon="visa.png" click={() => setDonate('visa')}>
            Visa, Mastercard
          </ItemCard>
          <ItemCard click={() => setDonate('mobile money')} icon="wallet.png">
            Mobile Money
          </ItemCard>
          <ItemCard click={() => setDonate('kind')} icon="parcel.png">
            Donate in Kind
          </ItemCard>
        </div>
      </div>
      <AnimatePresence>
        {donate !== null && (
          <motion.div
            className="'w-full h-full  backdrop-blur-md bg-white/70 rounded-md fixed z-10 top-0 left-0 p-10 "
            onClick={() => setExpand(!expand)}
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.05,
            }}
          >
            <motion.div className="w-fit h-fit rounded bg-white shadow-md shadow-green ">
              <form className="w-full grid grid-cols-1 gap-2">
                <fieldset>
                  <label>Full Name</label>
                  <input type="text" placeholder="Gates Vert" />
                </fieldset>
                <fieldset>
                  <label>Email</label>
                  <input type="email" placeholder="gatesvert@gmail.com" />
                </fieldset>
                <fieldset>
                  <label>Telephone Number</label>
                  <input type="tel" placeholder="054126847" />
                </fieldset>
                <fieldset>
                  <label>Message</label>
                  <textarea
                    type="text"
                    placeholder="I want to give my life to Jesus Christ"
                  />
                </fieldset>
                <fieldset>
                  <Button style=" w-full primary-btn">Send Message</Button>
                </fieldset>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Donate;

