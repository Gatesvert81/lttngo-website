import Image from "next/image";
import React  from "react";
import Button from "./Button";

function PastorCard({ name, position, children, image }) {
  return (
    <div className="w-full min-h-[60vh] grid grid-cols-1 md:grid-cols-2  ">
      <div className="w-full self-center h-full relative">
        <Image
          src={`/images/pastors/${image}`}
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-start gap-3 text-base text-center px-5">
        <div className="text-center">
          <h6>{name}</h6>
          <p className="text-xs capitalize font-semibold">{position}</p>
        </div>
        <p className="small-text text-left">{children}</p>
      </div>
    </div>
  );
}

export default PastorCard;
