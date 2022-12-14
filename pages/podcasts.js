import Head from "next/head";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import AnchorLink from "../src/Components/AnchorLink";
import Button from "../src/Components/Button";
import { NavContext } from "../src/Components/Context";
import ItemCard from "../src/Components/ItemCard";
import PodcastCard from "../src/Components/PodcastCard";
import SectionText from "../src/Components/SectionText";

function Podcasts() {
  const [page, setPage] = useContext(NavContext);

  useEffect(() => {
    if (page !== "podcasts") setPage("podcasts");
  }, []);

  return (
    <div className="py-16">
      <Head>
        <title>LTTNGO | Podcasts</title>
        <meta name="description" content="Listern to our inspiring messages" />
        <link rel="icon" href="icons/main-logo-white.png" />
      </Head>
      <main className="flex flex-col justify-center items-center">
        <h5 className="font-bold flex items-center">Podcasts</h5>
      </main>
      <section className="relative">
        <div className="w-full h-full absolute -z-10 top-0 left-0 bg-transparent flex flex-col justify-center items-center text-center">
          <h6 className=" w-[60%] capitalize text-black transition duration-500 ease-in-out animate-pulse  ">
            Please wait, loading Podcasts ...
          </h6>
        </div>
        <iframe
          className="rounded-sm"
          src="https://open.spotify.com/embed/artist/59cJa2xHGePphp15DFSI2D?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </section>
      {/* <script
        className="w-full h-40"
        async
        src="https://telegram.org/js/telegram-widget.js?21"
        dataTelegramPost="lttn_global/81"
        dataWidth="100%"
      ></script>
 */}
      <SectionText title="Podcast channels">
        Subscribe to our podcast channels to listen to our messages and
        teachings
      </SectionText>
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-3 gap-1 px-10 md:px-20 ">
        <AnchorLink
          route="https://open.spotify.com/artist/59cJa2xHGePphp15DFSI2D"
          pass
          target
        >
          <ItemCard icon="spotify.png">lttngo Podcast</ItemCard>
        </AnchorLink>
        <AnchorLink
          route="https://www.youtube.com/c/LIFETOTHENATIONSGLOBALOUTREACH"
          pass
          target
        >
          <ItemCard icon="youtube.png">lttngo</ItemCard>
        </AnchorLink>

        <AnchorLink
          route="https://t.me/lttn_global"
          pass
          target
        >
          <ItemCard icon="tg.png">Lttngo WorldHub</ItemCard>
        </AnchorLink>
              </div>
    </div>
  );
}

export default Podcasts;
