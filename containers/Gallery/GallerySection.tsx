import { Section, ReactImage } from "@components/UI";
import { SwipeSection } from "@components/UI/Swipe";
import { useTranslate } from "@hooks/useTranslate";
import { IImage } from "@models/main";

import styles from "./GalleryContainer.module.scss";

interface IProps {
  gallery: IImage[];
}

export const GallerySection: React.FC<IProps> = (props) => {
  const { gallery } = props;

  const translate = useTranslate();
  return (
    <Section title={translate.titles.gallery} margin="24px 0 32px 0">
      {gallery && gallery.length > 0 && (
        <SwipeSection length={gallery.length}>
          {gallery.map((image, index: number) => (
            <div className={styles.galleryImage} key={index}>
              <ReactImage src={image.url} layout="fill" alt="Gallery Image" />
            </div>
          ))}
        </SwipeSection>
      )}
    </Section>
  );
};
