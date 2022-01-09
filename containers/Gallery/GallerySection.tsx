// TYPES
import { IImage } from "@models/main";

// HOOKS
import { useTranslate } from "hooks/useTranslate";

// COMPONENTS
import { Container, ReactImage } from "@components/UI";
import { SwipeSection } from "@components/SwipeSection";

interface IProps {
  type: string;
  gallery: IImage[];
}

export const GallerySection: React.FC<IProps> = ({ gallery, type }) => {
  const translate = useTranslate();
  return (
    <>
      {gallery && gallery.length > 0 && (
        <section className={`${type} section__gallery`}>
          <Container type="container--flex">
            <h2 className="section__heading">{translate.titles.gallery}</h2>
            <SwipeSection length={gallery.length}>
              {gallery.map((image, index: number) => (
                <div className="gallery__image" key={index}>
                  <ReactImage
                    src={image.url}
                    width="960"
                    height="350"
                    alt="Gallery Image"
                  />
                </div>
              ))}
            </SwipeSection>
          </Container>
        </section>
      )}
    </>
  );
};