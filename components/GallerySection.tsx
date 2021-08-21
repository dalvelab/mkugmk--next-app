import { useSelector } from "react-redux";

// TYPES
import { FC } from "react";

// LOCALES
import en from "../locales/en";
import ru from "../locales/ru";

// COMPONENTS
import Image from "next/image";
import Container from "@components/Container";
import SwipeSection from "@components/SwipeSection";

interface GallerySectionProps {
  gallery: any;
  type: string;
}

interface RootState {
  UI: {
    language: string;
  };
}

const GallerySection: FC<GallerySectionProps> = ({ gallery, type }) => {
  const language = useSelector((state: RootState) => state.UI.language);

  const translate = language === "ru" ? ru : en;

  return (
    <>
      {gallery && gallery.length > 0 ? (
        <section className={`${type} section__gallery`}>
          <Container type="container--flex">
            <h2 className="section__heading">{translate.titles.gallery}</h2>
            <SwipeSection length={gallery.length}>
              {gallery.map((image: any, index: number) => (
                <div className="gallery__image" key={index}>
                  <Image
                    src={`${process.env.api}${image.url}`}
                    width="960"
                    height="350"
                    alt="Gallery Image"
                  />
                </div>
              ))}
            </SwipeSection>
          </Container>
        </section>
      ) : null}
    </>
  );
};

export default GallerySection;
