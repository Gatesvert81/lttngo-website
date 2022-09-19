import Head from "next/head";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-3  justify-items-center">
        <div className="w-full h-fit flex justify-start items-center">
          <Button style="icon">
            <Image
              src="/icons/left-prev.png"
              alt="previous"
              layout="fill"
              className="object-contain"
            />
          </Button>
          <Button style="icon">
            <Image
              src="/icons/right-prev.png"
              alt="previous"
              layout="fill"
              className="object-contain"
            />
          </Button>
        </div>
        <h5 className="font-bold flex items-center">Podcasts</h5>
        <div className="w-full md:h-12 flex justify-end">
          <input
            type="search"
            placeholder="Search"
            className="hidden md:h-12 md:block"
          />
          <Button style="icon md:h-full bg-black">
            <Image
              src="/icons/search.png"
              alt="previous"
              layout="fill"
              className="object-contain"
            />
          </Button>
        </div>
      </main>
      <section>
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

      <SectionText title="Podcast channels">
        Subscribe to our podcast channels to listen to our messages and
        teachings
      </SectionText>
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-3 gap-1 px-10 md:px-20 ">
        <ItemCard icon="spotify.png">lttngo Podcast</ItemCard>
        <ItemCard icon="youtube.png">lttngo</ItemCard>
        <ItemCard icon="apple-music.png">thelttngopodcast</ItemCard>
      </div>
    </div>
  );
}

export default Podcasts;
