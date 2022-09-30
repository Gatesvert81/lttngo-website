import Image from 'next/image';
import React from 'react';
import AnchorLink from './AnchorLink';
import Button from './Button';

function SectionImage({ title, children, image, btnText, route }) {
  return (
    <section className="h-30vh bg-blue-300 p-0 relative">
      <div className="w-full h-full relative">
        <Image
          src={`/images/${image}`}
          layout="fill"
          className="object-cover object-top"
        />
      </div>
      <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center p-10 text-center gap-5 bg-black/60 ">
        <h5 className="text-white normal-case ">{title}</h5>
        <p className="md:w-[60%] text-light-gray ">{children}</p>
        {btnText && (
          <AnchorLink route={route}>
            <Button style="primary-btn text-white">{btnText}</Button>
          </AnchorLink>
        )}
      </div>
    </section>
  );
}

export default SectionImage;
