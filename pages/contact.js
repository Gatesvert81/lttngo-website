import Head from "next/head";
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../src/Components/Button";
import SectionImage from "../src/Components/SectionImage";
import SectionText from "../src/Components/SectionText";
import { NavContext } from "../src/Components/Context";

function Contact() {
  const [page, setPage] = useContext(NavContext);

  useEffect(() => {
    if (page !== "contact") setPage("contact");
  }, []);

  return (
    <div className="py-16">
      <Head>
        <title>LTTNGO | Contact</title>
        <meta name="description" content="Get in touch with us" />
        <link rel="icon" href="/icons/main-logo-white.png" />
      </Head>
      <main className="flex justify-center items-center">
        <h5 className="font-bold">Stay connected</h5>
      </main>
      <SectionText
        title="Can We Pray With You?"
        btnText="Submit a prayer request"
      >
        The prayer of a person living right with God is something to be reckoned
        with - James 5:16 MSG
      </SectionText>

      <SectionImage
        title="Join our online Service"
        btnText="Join online"
        route="#contact-form"
        image="services/online service.JPG"
      >
        Join from anywhere around the world and listen to our messages.
      </SectionImage>

      <motion.section
        id="contact-form"
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
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
            <input type="tel" placeholder="0507242212" />
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
        <motion.div className="w-full h-40vh bg-sea-blue before:w-full before:h-full before:absolute  before:-z-10 before:top-0 before:left-0 relative flex flex-col justify-center items-center before:content['Loading Location'] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d127051.88126240631!2d-0.24198300011831644!3d5.659320398923445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xfdf9de510d6dd45%3A0x5fc5ebbba6c380bc!2supsa%20vice%20chancellor&#39;s%20complex!3m2!1d5.6593247!2d-0.1719742!5e0!3m2!1sen!2sgh!4v1667929554751!5m2!1sen!2sgh"
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Contact;
