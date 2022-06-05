import { useRef } from "react";
import { equals } from "ramda";

import styles from "./SwipeSection.module.scss";

interface IProps {
  length: number;
  children: React.ReactNode;
  gap?: string;
}

enum SwipeDirection {
  LEFT = "left",
  RIGHT = "right",
}

export const SwipeSection: React.FC<IProps> = (props) => {
  const { gap = "12px", length, children } = props;

  const elementRef: React.Ref<HTMLDivElement> = useRef(null);

  const handleSwipe = (directrion: SwipeDirection) => {
    if (!elementRef.current) {
      return;
    }

    const swipeElement = elementRef.current;

    if (
      swipeElement.scrollLeft + swipeElement.offsetWidth <
        swipeElement.scrollWidth &&
      equals(directrion, SwipeDirection.RIGHT)
    ) {
      swipeElement.scrollBy({
        left: swipeElement.clientWidth,
        behavior: "smooth",
      });
    }

    if (
      swipeElement.scrollLeft > 0 &&
      equals(directrion, SwipeDirection.LEFT)
    ) {
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
              onClick={() => handleSwipe(SwipeDirection.LEFT)}
              className={styles.buttonSwipeLeft}
            >
              <i className="far fa-chevron-left"></i>
            </button>
            <button
              onClick={() => handleSwipe(SwipeDirection.RIGHT)}
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
