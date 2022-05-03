import { useRef } from "react";

import styles from "./SwipeSection.module.scss";

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
    <div className={styles.swiperCards}>
      <div className={styles.contentWrapper}>
        {length > 2 && (
          <>
            <button
              onClick={() => handleSwipe("left")}
              className={styles.buttonSwipeLeft}
            >
              <i className="far fa-chevron-left"></i>
            </button>
            <button
              onClick={() => handleSwipe("right")}
              className={styles.buttonSwipeRight}
            >
              <i className="far fa-chevron-right"></i>
            </button>
          </>
        )}
        <div
          ref={elementRef}
          className={styles.cardsWrapper}
          style={{ gap: gap }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
