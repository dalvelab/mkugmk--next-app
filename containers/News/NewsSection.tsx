// TYPES
import { INews } from "@models/main";

// COMPONENTS
import Link from "next/dist/client/link";
import { Container } from "@components/UI";
import { Button } from "@components/UI";
import { CardNews } from "@components/Cards";

interface IProps {
  title: string;
  type: string;
  news: INews[];
}

export const NewsSection: React.FC<IProps> = ({ type, title, news }) => {
  return (
    <>
      {news && news.length > 0 ? (
        <section className={`${type} section__news`}>
          <Container type="container--flex">
            <h2 className="section__heading">{title}</h2>
            <div className="cards__wrapper wrapper--grid">
              <CardNews
                type="card__news--big"
                postType={news[0].postType}
                title={news[0].title}
                slug={news[0].slug}
                image={news[0].image}
                createdAt={news[0].createdAt}
                eventDate={news[0].eventDate}
                tag={news[0].tag}
                shortDescription={news[0].shortDescription}
              />
              {news.length > 1 ? (
                <div className="card__news-small--column-wrapper">
                  {news.slice(1, news.length > 4 ? 4 : news.length).map((n) => (
                    <CardNews
                      key={n.id}
                      type="card__news--small"
                      postType={n.postType}
                      title={n.title}
                      slug={n.slug}
                      image={n.image}
                      eventDate={n.eventDate}
                      createdAt={n.createdAt}
                      tag={n.tag}
                      shortDescription={n.shortDescription}
                    />
                  ))}
                </div>
              ) : null}
              {news.length > 4 && (
                <CardNews
                  type="card__news--medium"
                  postType={news[3].postType}
                  title={news[3].title}
                  slug={news[3].slug}
                  image={news[3].image}
                  eventDate={news[3].eventDate}
                  createdAt={news[3].createdAt}
                  tag={news[3].tag}
                  shortDescription={news[3].shortDescription}
                />
              )}
              {news.length > 4 ? (
                <div className="card__news card__news--more">
                  <Link href="/news">
                    <a>
                      <Button
                        type="btn--x2 btn--black font--medium"
                        text="Больше новостей"
                      ></Button>
                    </a>
                  </Link>
                </div>
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
};
