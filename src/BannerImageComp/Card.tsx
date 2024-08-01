// Card.jsx
'use client' 
import Image from "next/image";

const Card = ({ background, onEdit }) => {
  const { image, description, title , cta} = background;
  const width = 400; // Default width
  const height = 600; // Default height

  return (
    <div>
      <div className="hero bg-white h-[500px] ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={image} alt="image" width={width} height={height} />
          <div>
            <h1 className="text-5xl font-bold"> {title} </h1>
            <p className="py-6">
              {description}
            </p>
            <button className="btn btn-primary"> {cta} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;