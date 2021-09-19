// TYPES
import { GallerySectionProps, GalleryImage } from "@models/main";

// HOOKS
import { useTranslate } from "hooks/useTranslate";

// COMPONENTS
import Image from "next/image";
import Container from "@components/Container";
import SwipeSection from "@components/SwipeSection";

const GallerySection: React.FC<GallerySectionProps> = ({ gallery, type }) => {
  const translate = useTranslate();
  return (
    <>
      {gallery && gallery.length > 0 ? (
        <section className={`${type} section__gallery`}>
          <Container type="container--flex">
            <h2 className="section__heading">{translate.titles.gallery}</h2>
            <SwipeSection length={gallery.length}>
              {gallery.map((image: GalleryImage, index: number) => (
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
