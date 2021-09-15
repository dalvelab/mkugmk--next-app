import { useSelector } from "react-redux";

// MODELS
import { MuseumProps } from "@models/main";
import { RootState } from "@models/state";

// LOCALES
import en from "../locales/en";
import ru from "../locales/ru";

// COMPONENETS
import Link from "next/link";
import Image from "next/image";
import Button from "@components/Button";

const CardMuseum: React.FC<MuseumProps> = ({
  title,
  slug,
  image,
  shortDescription,
}) => {
  const language = useSelector((state: RootState) => state.UI.language);

  const translate = language === "ru" ? ru : en;
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

export default CardMuseum;
