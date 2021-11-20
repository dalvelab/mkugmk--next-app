// TYPES
import { CardMuseumProps } from "@models/main";

// HOOKS
import { useTranslate } from "hooks/useTranslate";

// COMPONENETS
import Link from "next/link";
import Image from "next/image";
import { Button } from "@components/UI";

export const CardMuseum: React.FC<CardMuseumProps> = ({
  title,
  slug,
  image,
  shortDescription,
}) => {
  const translate = useTranslate();
  return (
    <div className="card__museum">
      <div className="card__image">
        <Image
          src={`${process.env.api}${image.url}`}
          width="700"
          height="450"
          alt="Museum Image"
        />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <span className="card__description">{shortDescription}</span>
        <Link href={`/museums/${slug}`} passHref>
          <a>
            <Button
              type="btn--x2 btn--black font--medium"
              text={translate.buttons.buttonLearnMore}
            ></Button>
          </a>
        </Link>
      </div>
    </div>
  );
};
