import Image from "next/image";
import React from "react";
import AnchorLink from "./AnchorLink";
import Button from "./Button";

function Footer() {
  return (
    <footer className="w-full h-fit grid grid-cols-1 md:grid-cols-2 bg-black/90 p-10 text-white">
      <div className="flex flex-col gap-5">
        <h4>Life to the nations global outreach</h4>
        <p className="flex flex-col gap-2">
          <span>(+233) 59 2458 215</span>
          <span>info@lttngo.com</span>
        </p>
        <p className="flex flex-col gap-2">
          <span>UPSA Vice Chancellor Complex</span>
          <span>P. O Box 985 LG</span>
        </p>
        <div className="flex justify-start items-center gap-2">
          <AnchorLink
            route="https://www.instagram.com/lttn_global/"
            pass
            target
          >
            <Button style="icon">
              <Image
                src="/icons/ig.png"
                alt="insatgram"
                layout="fill"
                className="object-contain"
              />
            </Button>
          </AnchorLink>
          <AnchorLink
            route="https://www.youtube.com/c/LIFETOTHENATIONSGLOBALOUTREACH"
            pass
            target
          >
            <Button style="icon">
              <Image
                src="/icons/youtube-white.png"
                alt="youtube"
                layout="fill"
                className="object-contain"
              />
            </Button>
          </AnchorLink>
          <AnchorLink route="https://twitter.com" pass target>
            <Button style="icon">
              <Image
                src="/icons/twitter.png"
                alt="twitter"
                layout="fill"
                className="object-contain"
              />
            </Button>
          </AnchorLink>
        </div>
      </div>
      <div>
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
      </div>
    </footer>
  );
}

export default Footer;
