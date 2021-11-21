import { useRef } from "react";

interface GallerySwipeProps {
  length: number;
  children: React.ReactNode;
}

export const SwipeSection: React.FC<GallerySwipeProps> = ({
  length,
  children,
}) => {
  const elementRef: React.LegacyRef<HTMLDivElement> = useRef(null);

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
    <div className="section__swiper-cards">
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
    </div>
  );
};
