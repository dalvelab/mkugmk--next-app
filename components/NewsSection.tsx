// TYPES
import { NewsSectionProps } from "@models/main";

// COMPONENTS
import Link from "next/dist/client/link";
import Container from "@components/Container";
import Button from "@components/Button";
import CardNews from "@components/CardNews";

const NewsSection: React.FC<NewsSectionProps> = ({ type, title, news }) => {
  return (
    <>
      {news && news.length > 0 ? (
        <section className={`${type} section__news`}>
          <Container type="container--flex">
            <h2 className="section__heading">{title}</h2>
            <div className="cards__wrapper wrapper--grid">
              <CardNews
                type="card__news--big"
                title={news[0].title}
                slug={news[0].slug}
                image={news[0].image}
                createdAt={news[0].createdAt}
                tag={news[0].tag}
                shortDescription={news[0].shortDescription}
              />
              {news.length > 1 ? (
                <div className="card__news-small--column-wrapper">
                  {news
                    .slice(1, news.length > 4 ? 4 : news.length)
                    .map((n, index) => (
                      <CardNews
                        key={index}
                        type="card__news--small"
                        title={n.title}
                        slug={n.slug}
                        image={n.image}
                        createdAt={n.createdAt}
                        tag={n.tag}
                        shortDescription={n.shortDescription}
                      />
                    ))}
                </div>
              ) : null}
              {news.length > 4 ? (
                <CardNews
                  type="card__news--medium"
                  title={news[3].title}
                  slug={news[3].slug}
                  image={news[3].image}
                  createdAt={news[3].createdAt}
                  tag={news[3].tag}
                  shortDescription={news[3].shortDescription}
                />
              ) : null}
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

export default NewsSection;
