// TYPES
import { FC } from "react";

// COMPONENETS
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  data: {
    slug: string;
    image: string;
    title: string;
    time: string;
    shortDescription: string;
  };
}

const CardEvent: FC<CardProps> = ({ data }: CardProps) => {
  return (
    <Link href={`/events/${data.slug}`}>
      <div className="card__event">
        <div className="card__image">
          <Image src={data.image} layout="fill" />
        </div>
        <div className="card__content">
          <h3 className="card__title">{data.title}</h3>
          <span className="card__time">{data.time}</span>
          <span className="card__description">{data.shortDescription}</span>
        </div>
      </div>
    </Link>
  );
};

export default CardEvent;
