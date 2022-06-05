import ReactMarkdown from "react-markdown";
import { takeLast, isNil } from "ramda";

import { Container, Button, Section, ReactImage } from "@components/UI";
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

  const mediaPath = process.env.NEXT_PUBLIC_API_URL;

  const getMediaType = (url: string) => {
    if (isNil(url)) {
      return;
    }
    const format = takeLast(1, url.split("."))[0];
    const regImgFormats = /(jpg|gif|png|jpeg|tiff|gif|webp)/g;
    if (regImgFormats.test(format)) {
      return <ReactImage src={image.url} layout="fill" />;
    } else {
      return (
        <video autoPlay loop muted playsInline>
          <source src={`${mediaPath}${image.url}`} />
        </video>
      );
    }
  };

  return (
    <section className={styles.sectionHeader}>
      <div className={styles.headerImage}>{getMediaType(image.url)}</div>
      <Container>
        <div className={styles.titleWrapper}>
          <h1>{title}</h1>
          <Button
            type="xl"
            bgColor="black"
            text={translate.buttons.buttonBuyTicket}
          />
        </div>
      </Container>
      <Section title={translate.headingSection.about}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.textWrapper}>
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        </div>
      </Section>
    </section>
  );
};
