// TYPES
import { FC } from "react";

// COMPONENETS
import Link from "next/link";
import Image from "next/image";
import Button from "@components/Button";

interface CardProps {
  data: {
    slug: string;
    image: string;
    title: string;
    shortDescription: string;
  };
}

const CardMuseum: FC<CardProps> = ({ data }: CardProps) => {
  return (
    <div className="card__museum">
      <div className="card__image">
        <Image src={data.image} width={380} height={250} layout="responsive" />
      </div>
      <h3 className="card__title">{data.title}</h3>
      <span className="card__description">{data.shortDescription}</span>
      <Link href={`/museums/${data.slug}`}>
        <a>
          <Button
            type="btn--x2 btn--black font--medium"
            text="Подробнее"
          ></Button>
        </a>
      </Link>
    </div>
  );
};

export default CardMuseum;
