import Head from "next/head";
import React, { useContext, useState, useEffect } from "react";
import { NavContext } from "../src/Components/Context";
import ItemCard from "../src/Components/ItemCard";
import SectionImage from "../src/Components/SectionImage";
import SectionText from "../src/Components/SectionText";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../src/Components/Button";
import VisaForm from "../src/Components/VisaForm";
import MomoForm from "../src/Components/MomoForm";
import KindForm from "../src/Components/KindForm";

function Donate() {
  const [donate, setDonate] = useState(null);

  const [page, setPage] = useContext(NavContext);

  useEffect(() => {
    if (page !== "donate") setPage("donate");
  }, []);

  const donationMethod = () => {
    switch (donate) {
      case "visa":
        return <VisaForm />;
      case "momo":
        return <MomoForm />;
      case "kind":
        return <KindForm />;
      default:
        break;
    }
  };

  return (
    <>
      <div className="py-16">
        <Head>
          <title>LTTNGO | Donate</title>
          <meta name="description" content="Get to know more about Us" />
          <link rel="icon" href="/icons/main-logo-white.png" />
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
        <div className="w-full flex pb-3 justify-center  " >
          <Button style="primary-btn" click={() => setDonate("visa") } >
            Donate Now
          </Button>
        </div>
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-3 gap-2 px-10 md:px-20 ">
          <ItemCard icon="visa.png" click={() => setDonate("visa")}>
            Visa, Mastercard
          </ItemCard>
          <ItemCard click={() => setDonate("momo")} icon="wallet.png">
            Mobile Money
          </ItemCard>
          <ItemCard click={() => setDonate("kind")} icon="parcel.png">
            Donate in Kind
          </ItemCard>
        </div>
      </div>
      <AnimatePresence>
        {donate !== null && (
          <motion.div
            className="w-full h-full flex flex-col justify-center items-center backdrop-blur-md bg-white/70 rounded-md fixed z-10 top-0 left-0 p-10  "
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
              scale: 0.95,
            }}
          >
            <motion.div
              data-isOpen={donate !== "visa"}
              className="w-fit h-fit rounded bg-white shadow-md shadow-green p-5 "
            >
              <div className="pb-2">
                <h4>Donation Methods</h4>
                <div className="w-full h-fit flex justify-center gap-5 items-center ">
                  <Button
                    style={donate === "visa" ? "primary-btn" : "secondary-btn"}
                    click={() => setDonate("visa")}
                  >
                    Visa
                  </Button>
                  <Button
                    style={donate === "momo" ? "primary-btn" : "secondary-btn"}
                    click={() => setDonate("momo")}
                  >
                    Mobile Money
                  </Button>
                  <Button
                    style={donate === "kind" ? "primary-btn" : "secondary-btn"}
                    click={() => setDonate("kind")}
                  >
                    Kind
                  </Button>
                </div>
              </div>
              <div className="w-full h-fit">{donationMethod()}</div>
              <div className="w-full flex justify-center py-1">
                <Button
                  click={() => setDonate(null)}
                  style="primary-btn text-red-400"
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Donate;
