import React from "react";
import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, desc }) => {
  return (
    <div className='card1'>
      <div className='card-1'>
        <div className='front'>
          <Image
            src={imageUrl}
            width={800/2}
            height={500/2}
            alt="Picture"
            style={{
              borderRadius: "2rem"
            }}
          />
        </div>
        <div className='back'>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
