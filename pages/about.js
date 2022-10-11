import axios from "axios";
import Head from "next/head";
import React, { useContext, useEffect } from "react";
import { NavContext } from "../src/Components/Context";
import PastorCard from "../src/Components/PastorCard";
import SectionImage from "../src/Components/SectionImage";
import SectionText from "../src/Components/SectionText";

function About() {
  const [page, setPage] = useContext(NavContext);

  useEffect(() => {
    if (page !== "about") setPage("about");
  }, []);

  return (
    <div className="py-16">
      <Head>
        <title>LTNGO | About</title>
        <meta name="description" content="Get to know more about Us" />
        <link rel="icon" href="/icons/main-logo-white.png" />
      </Head>
      <main className="flex justify-center items-center">
        <h5 className="font-bold">About</h5>
      </main>
      <SectionText title="LTTNGO is a church that believes in Jesus, a church that loves God and people">
        Life to the Nations Global Outreach (LTTNGO) is a global commission
        spearheaded by Reverend Joshua Takyi with the mandate to carry the life
        of God to the nations of the world.
      </SectionText>
      <SectionText>
        The dream is to be realised by the conscious equipping of the believer
        with the required tools that makes for success as a leader in his
        jurisdiction.
      </SectionText>

      <section className="h-fit w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        <PastorCard
          name="Rev. Joshua Takyi"
          image="pastor-joshua-1.JPG"
          position="Head Pastor, Founder"
        >
          To reach and influence the world by building a large Christ-centered,
          Bible-based church, changing mindsets and empowering people to lead
          and impact in every spere of life.
        </PastorCard>
        <PastorCard
          name="Sir Paul Dzeha"
          image="Sir Paul.JPG"
          position="Head Pastor, Founder"
        >
          To reach and influence the world by building a large Christ-centered,
          Bible-based church, changing mindsets and empowering people to lead
          and impact in every spere of life.
        </PastorCard>
        <PastorCard
          name="Sir Kwabena"
          image="Sir Kwabena.JPG"
          position="Head Pastor, Founder"
        >
          To reach and influence the world by building a large Christ-centered,
          Bible-based church, changing mindsets and empowering people to lead
          and impact in every spere of life.
        </PastorCard>
      </section>

      <SectionText title="Mission Statement">
        The commission is poised on raising seasoned ministers of Christ who
        will stand in the various fields of human civilization and culture to
        minister the character and principles of the kingdom of God.
      </SectionText>

      <SectionImage
        title="Come worship with us"
        btnText="Join Us"
        route="/contact"
        image="services/service-writing.JPG"
      >
        Join us on every Tuesday at the UPSA Vice chancellors Complex for our
        Impact Service where our man of God Shares snippets on what it means to
        stand out as a leader and bear to touch of hope to the dying world.
      </SectionImage>
    </div>
  );
}

export default About;
