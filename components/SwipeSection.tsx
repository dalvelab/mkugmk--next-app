import { useRef } from "react";

// TYPES
import { FC, LegacyRef, ReactNode } from "react";

// COMPONENTS
import Container from "@components/Container";

interface GallerySwipeProps {
  title: string;
  type: string;
  length: number;
  children: ReactNode;
}

const GallerySwipe: FC<GallerySwipeProps> = ({
  title,
  type,
  length,
  children,
}) => {
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
    <section className={`${type} section__cards--swipe`}>
      <Container type="container--flex">
        <h2 className="section__heading">{title}</h2>
        <div className="content__wrapper">
          {length > 2 ? (
            <>
              <button
                onClick={() => handleSwipe("left")}
                className="button__swipe--left"
              >
                <i className="far fa-chevron-left"></i>
              </button>
              <button
                onClick={() => handleSwipe("right")}
                className="button__swipe--right"
              >
                <i className="far fa-chevron-right"></i>
              </button>
            </>
          ) : null}
          <div ref={elementRef} className="cards__wrapper wrapper--flex">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GallerySwipe;
