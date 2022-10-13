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
    <div className="py-16">
      <Head>
        <title>LTTNGO | Home</title>
        <meta
          name="description"
          content="Life to the Nations Global Outreach"
        />
        <link rel="icon" href="/icons/main-logo-white.png" />
      </Head>

      <main className="flex flex-col justify-center items-center gap-8 text-center">
        <div className="w-full h-full flex  justify-center items-center gap-5">
          <h6 className="text-sm">Accra, Gh</h6>
          <h6 className="text-sm">2022</h6>
          <h6 className="text-sm">2nd June</h6>
        </div>
        <h2 className="font-bold text-5xl ">Our Year of Open heavens</h2>
        <p>
          You cannot touch on the greatness of God without His glory
          manifesting. This is your time.
        </p>
        <AnchorLink route="/contact">
          <Button style="primary-btn">Join us</Button>
        </AnchorLink>
      </main>

      <section className="h-40vh py-0 ">
        <div className="w-full h-full relative">
          <Image
            src="/images/pastors/pastor-joshua-1.JPG"
            layout="fill"
            className="object-cover object-top "
          />
        </div>
      </section>

      <SectionText title="Our vision to the world">
        Life To The Nations Global Outreach, popularly known as International
        Ministers Incorporated is a non denominational, interdenominational
        global movement geared towards impacting the nations of the world with
        the life of Christ.
      </SectionText>

      <section className="flex flex-col md:grid md:grid-cols-4  gap-5">
        <div className="flex flex-col md:py-5 gap-1 md:justify-between md:border-r-[1px] ">
          <h5 className="capitalize text-green md:text-">
            Conferences &amp; Events
          </h5>
          <p>Come and experience Christ in a new way.</p>
        </div>
        {upcomingEvents.map((event, index) => (
          <div className="w-full " key={index}>
            <EventCard title={event.title} image={event.image} button>
              {event.description}
            </EventCard>
          </div>
        ))}
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
