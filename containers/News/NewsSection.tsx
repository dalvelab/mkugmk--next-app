// TYPES
import { CardType, INews } from "@models/main";

// COMPONENTS
import Link from "next/link";
import { Container } from "@components/UI";
import { Button } from "@components/UI";
import { CardNews } from "@components/Cards";

// HOOKS
import { useWindowSize } from "hooks/useWindowSize";

interface IProps {
  title: string;
  type: string;
  news: INews[];
}

export const NewsSection: React.FC<IProps> = ({ type, title, news }) => {
  const { width } = useWindowSize();

  return (
    <>
      {news && news.length > 0 && (
        <section className={`${type} section__news`}>
          <Container type="container--flex">
            <h2 className="section__heading">{title}</h2>
            <div className="cards__wrapper wrapper--grid">
              <CardNews type={CardType.BIG} post={news[0]} />
              <CardNews
                type={width > 1290 ? CardType.MEDIUM : CardType.BIG}
                post={news[1]}
              />
              <CardNews
                type={width > 1290 ? CardType.SMALL : CardType.BIG}
                post={news[2]}
              />
              <CardNews
                type={width > 1290 ? CardType.MEDIUM : CardType.BIG}
                post={news[3]}
              />
              <Link href="/news">
                <div className="card__news--more">
                  <Button type="btn--x1 btn--black " text="Больше событий" />
                </div>
              </Link>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};
