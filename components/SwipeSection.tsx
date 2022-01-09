import { useRef } from "react";

interface IProps {
  length: number;
  children: React.ReactNode;
  gap?: string;
}

export const SwipeSection: React.FC<IProps> = (props) => {
  const { gap, length, children } = props;

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
        {length > 2 && (
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
        )}
        <div ref={elementRef} className="cards__wrapper" style={{ gap: gap }}>
          {children}
        </div>
      </div>
    </div>
  );
};
