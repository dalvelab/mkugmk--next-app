import { useRef } from "react";

// TYPES
import { FC, LegacyRef, ReactNode } from "react";

// COMPONENTS
import Container from "@components/Container";

interface GallerySwipeProps {
  title: string;
  type: string;
  children: ReactNode;
}

const GallerySwipe: FC<GallerySwipeProps> = ({ title, type, children }) => {
  const elementRef: LegacyRef<HTMLDivElement> = useRef(null);

  const handleSwipe = (directrion: string) => {
    const swipeElement = elementRef.current!;

    if (
      swipeElement.scrollLeft + swipeElement.offsetWidth <
        swipeElement.scrollWidth &&
      directrion === "right"
    ) {
      swipeElement.scrollBy({
        left: swipeElement.clientWidth,
        behavior: "smooth",
      });
    }

    if (swipeElement.scrollLeft > 0 && directrion === "left") {
      swipeElement.scrollBy({
        left: -swipeElement.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    // ADD DATA ARRAY LENGTH CHECK, IF IT IS 0 DO NOT SHOW ANYTHING
    <section className={`${type} section__cards--swipe`}>
      <Container type="container--flex">
        <h2 className="section__heading">{title}</h2>
        <div className="content__wrapper">
          <button
            onClick={() => handleSwipe("left")}
            className="button__swipe--left"
          >
            <i className="far fa-chevron-left"></i>
          </button>
          <div ref={elementRef} className="cards__wrapper wrapper--flex">
            {children}
          </div>
          <button
            onClick={() => handleSwipe("right")}
            className="button__swipe--right"
          >
            <i className="far fa-chevron-right"></i>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default GallerySwipe;
