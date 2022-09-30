import Image from 'next/image';
import React from 'react';

function ItemCard({ icon, click, children }) {
  return (
    <div
      onClick={click}
      className="w-full h-20vh grid grid-cols-1 justify-items-center text-center gap-5"
    >
      <div className="w-full h-full relative">
        <Image
          src={`/icons/${icon}`}
          alt={children}
          layout="fill"
          className="object-contain"
        />
      </div>
      <h6 className="capitalize">{children}</h6>
    </div>
  );
}

export default ItemCard;

