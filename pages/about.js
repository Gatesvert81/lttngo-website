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
        <link rel="icon" href="/icons/logo.png" />
      </Head>
      <main className="flex justify-center items-center">
        <h5 className="font-bold">About</h5>
      </main>
      <SectionText title="LTTNGO is a church that believes in Jesus, a church that loves God and people">
        Overwhelmed by the gift of salvation we have found in Jesus, we have a
        heart for authentic worship, are passionate about the ocal church, and
        are on a mission to see God&#39;s Kingdom established across the earth.
      </SectionText>
      <SectionText>
        Overwhelmed by the gift of salvation we have found in Jesus, we have a
        heart for authentic worship, are passionate about the ocal church, and
        are on a mission to see God&#39;s Kingdom established across the earth.
      </SectionText>

      <section className="h-fit w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        <PastorCard name="Ben Fizgeraid" position="Head Pastor, Founder">
          To reach and influence the world by building a large Christ-centered,
          Bible-based church, changing mindsets and empowering people to lead
          and impact in every spere of life.
        </PastorCard>
        <PastorCard name="Ben Fizgeraid" position="Head Pastor, Founder">
          To reach and influence the world by building a large Christ-centered,
          Bible-based church, changing mindsets and empowering people to lead
          and impact in every spere of life.
        </PastorCard>
        <PastorCard name="Ben Fizgeraid" position="Head Pastor, Founder">
          To reach and influence the world by building a large Christ-centered,
          Bible-based church, changing mindsets and empowering people to lead
          and impact in every spere of life.
        </PastorCard>
      </section>

      <SectionText title="Mission Statement">
        To reach and influence the world by building a large Christ-centered,
        Bible-based church, changing mindsets and empowering people to lead and
        impact in every spere of life.
      </SectionText>

      <SectionImage
        title="Come worship with us"
        btnText="Join Us"
        route="/contact"
	image="services/service-writing.JPG"
      >
        Come experience Christ in a new way.
      </SectionImage>
    </div>
  );
}

export default About;

