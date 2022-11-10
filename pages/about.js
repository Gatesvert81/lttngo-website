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
      <SectionText title="LTTNGO is a commission that believes in Jesus, a church that loves God and people">
        Life to the Nations Global Outreach (LTTNGO) is a global commission
        spearheaded by Reverend Joshua Takyi with the mandate to carry the life
        of God to the nations of the world.
      </SectionText>
      <SectionText>
        The dream is to be realised by the conscious equipping of the believer
        with the required tools that makes for success as a leader in his
        jurisdiction.
      </SectionText>

      <section className="h-fit w-full grid grid-cols-1 gap-5">
        <PastorCard
          name="Rev. Joshua A. Takyi"
          image="pastor-joshua-1.JPG"
          position="Lead Pastor, President"
        >
          Reverend Joshua Takyi is the lead Pastor, President and Founder of the esteemed commission Life To The Nations Global Outreach. He Is a seasoned servant of God with a ministry set apart by the infallible grace of God through his preachings. Having the strong love and passion for God, he yielded to the path of ministry quite early and has since birthed Life To The Nations Global Outreach and his church, Calvary Power Chapel. As founder and head pastor for LTTNGO, he is a voice and force for pushing the life of Christ to the nations. His mandate lies in raising and nurturing Christian leaders to actualise their God given purposes wherever they find themselves aside that, he is very zealous about raising ministers and leaders who will become patterns for men to emulate. Power, Signs and wonders have not ceased to mark his ministry and works, reaffirming the great hand of God upon him. He is indeed a gift to the body of Christ.
        </PastorCard>
        <PastorCard
          name="Sir Kwabena Nuamah"
          image="Sir Kwabena.JPG"
          position="CEO"
        >
          Stands as a selfless,committed pillar of the commission and a great aide to the man of God, Pastor Joshua Takyi. Sir Kwabena is the founder of Living Epistles Fellowship which has the mandate to raise Kingdom emissaries in every field of life.  Being a keen student of finance, he established Aspiron which is a firm targeted at championing financial data and its dissemination across all levels. Coming from a solid Christian foundation, his passion and love for the things of God is almost enviable if not adored. Sir Kwabena serves as the Chief Executive Officer of the Life To The Nations Global Outreach. Under his auspices, he oversees the church&#39;s overall operations, directs agendas and supervises all strategies and the church&#39;s organisational structure. Since he took hold of office, the church and the work within has seen a tremendous quality of being outstanding; a true mark of an exemplary leader.
        </PastorCard>
        <PastorCard
          name="Sir Paul Kwame Dzeha"
          image="Sir Paul.JPG"
          position="Coordinator"
        >
          Paul Kwame Dzeha is a final year student pursuing a Bachelor of Arts degree in Economics and Mathematics. As a young avid Christian leader, he pioneered Royal Priesthood; a vibrant youth ministry nurturing the gifts of many young believers. Paul doubles as the coordinator for the Life To The Nations Global Outreach in supporting the vision of esteemed Pastor Joshua Takyi in sending the life of God to the nations. In his capacity as a coordinator, he supervises various departments in many aspects concerning the activities of the commission, while upholding them to excellence. Among his many duties, a few worth noting are the mobilisation of external suppliers to deliver services that can&#39;t be provided by the ministry as well as the apt analysis of all situations at every given point. The execution of his roles in the church is nothing short of commendable and hardworking to say the least. His poise and charisma with which he works is one to be admired.
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
