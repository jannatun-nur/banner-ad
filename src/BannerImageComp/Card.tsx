"use client";
import Image from "next/image";

const Card = ({ background, onEdit }) => {
  const { image, description, title, cta, bkground } = background;
  const width = 150; // Default width
  const height = 150; // Default height

  return (
    <div
      style={{ background: `url(${bkground})` }}
      className="lg:h-[380px] h-[380px] bg-cover bg-center"
    >
      <div className="lg:flex lg:gap-24 lg:px-4 grid-cols-1">
        <div className="w-full lg:w-1/2 lg:mt-24">
        <h1 className="text-center text-xl lg:text-3xl font-bold text-blue-800 bg-white py-3
         rounded-se-2xl px-2 shadow-gray-300 shadow-xl">
          {" "}
          {title}{" "}
        </h1>
        <p className="py-6 text-xl text-center font-bold">{description}</p>
        <button className="px-3 py-1 ml-24 md:ml-32 lg:ml-0 lg:px-5 lg:py-2 rounded-xl 
        bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-white"> {cta} </button>

        </div>
        <div className="lg:mt-20 mt-3 md:mt-3">
          <Image
            src={image}
            alt="image"
            width={width}
            height={height}
            className="rounded-full border-2 border-gray-800 ml-20 md:ml-28 lg:ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
