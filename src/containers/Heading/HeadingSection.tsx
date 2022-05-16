import { GetStaticProps } from "next";
import classNames from "classnames";

import { Container, Button, ReactImage, Section } from "@components/UI";
import { IImage } from "@models/main";
import { useTranslate } from "@hooks/useTranslate";

import styles from "./HeadingSection.module.scss";

interface IProps {
  title: string;
  image: IImage;
  description: string;
}

export const HeadingSection: React.FC<IProps> = ({
  title,
  image,
  description,
}) => {
  const translate = useTranslate();

  return (
    <section className={styles.sectionHeader}>
      <div className={styles.headerImage}>
        <ReactImage
          src={image ? image.url : ""}
          width="1920"
          height="1080"
          alt="Heading Museum Image"
        />
      </div>
      <Container>
        <div className={styles.titleWrapper}>
          <h1>{title}</h1>
          {/* <div className={styles.openStatus}>
            <div
              className={classNames([styles.statusIcon], {
                [styles.statusIconOpened]: !currentDay.isWeekend,
                [styles.statusIconClosed]: currentDay.isWeekend,
              })}
            ></div>
            <span className={styles.statusText}>
              {currentDay.isWeekend
                ? `${translate.headingSection.todayIsWeekend}`
                : `${
                    translate.headingSection.openFrom
                  } ${currentDay.timeOpen.slice(0, 5)} ${
                    translate.headingSection.openTo
                  } ${currentDay.timeClose.slice(0, 5)}`}
            </span>
          </div> */}
          <Button
            type="xl"
            bgColor="black"
            text={translate.buttons.buttonBuyTicket}
          />
        </div>
      </Container>
      <Section title={translate.headingSection.about}>
        <div className={styles.descriptionWrapper}>
          <div className="textWrapper">{description}</div>
        </div>
      </Section>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const hours = (await getHoursForHeading()) || null;
  return {
    props: {},
  };
};
