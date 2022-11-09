import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect } from "react";
import upcomingEvents from "../src/assets/upcomingEvents";
import AnchorLink from "../src/Components/AnchorLink";
import Button from "../src/Components/Button";
import { NavContext } from "../src/Components/Context";
import EventCard from "../src/Components/EventCard";
import SectionImage from "../src/Components/SectionImage";
import SectionText from "../src/Components/SectionText";

export default function Home() {
  const [page, setPage] = useContext(NavContext);

  useEffect(() => {
    if (page !== "home") setPage("home");
  }, []);

  return (
    <div className="">
      <Head>
        <title>LTTNGO | Home</title>
        <meta
          name="description"
          content="Life to the Nations Global Outreach"
        />
        <link rel="icon" href="/icons/main-logo-white.png" />
      </Head>

      <main className="h-screen bg-[url('/images/pastors/pastor-preaching.JPG')] bg-norepeat bg-cover bg-center p-0">
        <div className="w-full h-full bg-black/25 flex flex-col justify-center items-center text-white text-center gap-5 ">
          <div>
            <h2>our year of open heavens.</h2>
            <p className="medium-text">love. serve. grow</p>
          </div>
          <div>
            <p className="medium-text">Tuesdays</p>
            <p className="medium-text">7:00 PM | 9:00 PM</p>
            <AnchorLink
              route="https://www.youtube.com/c/LIFETOTHENATIONSGLOBALOUTREACH"
              pass
              target
            >
              <Button style="primary-btn">Watch our live tuesday service</Button>
            </AnchorLink>
          </div>
        </div>
      </main>

      <SectionText title="Our vision to the world">
        Life To The Nations Global Outreach, popularly known as International
        Ministers Incorporated is a non denominational, interdenominational
        global movement geared towards impacting the nations of the world with
        the life of Christ.
      </SectionText>
      <SectionImage
        title="LTTNGO Channel"
        // route="https://www.youtube.com/c/LIFETOTHENATIONSGLOBALOUTREACH"
        // btnText="Watch Free"
        image="services/service-channel.JPG"
      >
        You ALL ACCESS PASS to everything that is happening in LTTNGO around the
        globe!
      </SectionImage>

      <section className="flex flex-col text-center justify-center items-center gap-5">
        <div>
          <h5 className="capitalize text-green md:text-">
            Conferences &amp; Events
          </h5>
          <p>Come and experience Christ in a new way.</p>
        </div>
        <div className="w-full h-[35vh] grid grid-cols-1 md:grid-cols-2">
          <div className="w-full h-full relative">
            <Image
              src="/images/events/ims.jpg"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className=" w-full h-full flex flex-col justify-between  ">
            <div className="text-left">
              <h6>International Ministers Summit</h6>
              <p className="small-text">
                Come and hihfa biuaf bpia he diuc yu p hdf paf iu 8ef
                fpadfshf8ef hvadf aiudbi fbaiufbs biusf aiuf aisuf aiiu fbisuf.
              </p>
            </div>
            <div className="w-full grid grid-cols-2">
              <Button style="secondary-btn">Save a seat</Button>
              <Button style="primary-btn">All Programs</Button>
            </div>
          </div>
        </div>
      </section>

      <SectionImage
        title="Donation"
        route="/donate"
        btnText="Donate now"
        image="donations/donations-products.JPG"
      >
        Who ever is generous to the poor lends to the Lord, and He will repay
        him for his deed.
      </SectionImage>
    </div>
  );
}
