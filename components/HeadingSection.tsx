// TYPES
import { NextPage } from "next";

// COMPONENTS
import Image from "next/image";
import Container from "@components/Container";
import Button from "@components/Button";

interface HeadingSectionProps {
  title: string;
  workingHours: string;
  image: StaticImageData;
}

const WelcomePage: NextPage<HeadingSectionProps> = ({
  title,
  workingHours,
  image,
}) => {
  return (
    <section className="section__header">
      <div className="header__image">
        <Image src={image} />
      </div>
      <Container type="container--flex">
        <div className="title__wrapper">
          <h1>{title}</h1>
          <div className="open__status">
            <div className="status__icon"></div>
            <span className="status__text">{workingHours}</span>
          </div>
          <Button type="btn--x1 btn--black font--medium" text="Купить билет" />
        </div>
        <div className="description__wrapper">
          <h2>О музейном комплексе</h2>
          <p>
            Музейный комплекс военной и гражданской техники в городе Верхняя
            Пышма Свердловской области (пригороде Екатеринбурга), основанный в
            2006 году, на сегодня является одним из крупнейших в мире
            военно-технических музеев
          </p>
          <p>
            В составе музейного комплекса работает открытая площадка и четыре
            выставочных центра – музей военной техники, музей автомобильной
            техники, Парадный расчёт, музей авиации «Крылья Победы», на которых
            суммарно расположено более 1000 образцов техники.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default WelcomePage;
