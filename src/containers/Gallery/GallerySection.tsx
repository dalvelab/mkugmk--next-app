import { isEmpty } from "ramda";

import { Section, ReactImage } from "@components/UI";
import { SwipeSection } from "@components/UI/Swipe";
import { useTranslate } from "@hooks/useTranslate";
import { IImage } from "@models/main";

import styles from "./GalleryContainer.module.scss";

interface IProps {
  gallery: IImage[];
  hasTitle?: boolean;
}

export const GallerySection: React.FC<IProps> = (props) => {
  const { gallery, hasTitle = true } = props;

  const translate = useTranslate();
  return (
    <Section
      title={hasTitle ? translate.titles.gallery : undefined}
      margin="24px 0 32px 0"
    >
      {!isEmpty(gallery) && (
        <SwipeSection length={gallery.length}>
          {gallery.map((image) => (
            <div className={styles.galleryImage} key={image.id}>
              <ReactImage
                src={image.url}
                layout="fill"
                alt="Изображение слайдера"
              />
            </div>
          ))}
        </SwipeSection>
      )}
    </Section>
  );
};
