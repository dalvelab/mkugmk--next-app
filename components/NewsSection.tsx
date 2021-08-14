// TYPES
import { FC } from "react";
import { CardNewsProps } from "../types/main";

interface NewsSectionProps {
  type: string;
  news: Array<CardNewsProps>;
}

// COMPONENTS
import Link from "next/dist/client/link";
import Container from "@components/Container";
import Button from "@components/Button";
import CardNews from "@components/CardNews";

const NewsSection: FC<NewsSectionProps> = ({ type, news }) => {
  return (
    <>
      {news && news.length > 0 ? (
        <section className={`${type} section__news`}>
          <Container type="container--flex">
            <h2 className="section__heading">Новости</h2>
            <div className="cards__wrapper wrapper--grid">
              {news.map((n, index) => (
                <CardNews
                  key={index}
                  type="card__news--big"
                  title={n.title}
                  slug={n.slug}
                  image={n.image}
                  date={n.date}
                  tag={n.tag}
                  shortDescription={n.shortDescription}
                />
              ))}
              <Link href="/news/1">
                <div className="card__news card__news--small">
                  <div className="card__content">
                    <h6 className="card__title">
                      В Музейном комплексе УГМК открылся выставочный центр
                      «Крылья Победы»
                    </h6>
                    <span className="card__description">
                      Новый, уже четвертый, выставочный центр открылся в
                      Музейном комплексе УГМК. «Крылья Победы» - один из самых
                      крупных российских музеев авиации
                    </span>
                  </div>
                  <div className="card__bottom">
                    <span className="card__date">6 мая, 2021</span>
                    <div className="card__tag">Крылья победы</div>
                  </div>
                </div>
              </Link>
              <Link href="/news/1">
                <div className="card__news card__news--small">
                  <div className="card__content">
                    <h6 className="card__title">
                      В Музейном комплексе УГМК открылся выставочный центр
                      «Крылья Победы»
                    </h6>
                    <span className="card__description">
                      Новый, уже четвертый, выставочный центр открылся в
                      Музейном комплексе УГМК. «Крылья Победы» - один из самых
                      крупных российских музеев авиации
                    </span>
                  </div>
                  <div className="card__bottom">
                    <span className="card__date">6 мая, 2021</span>
                    <div className="card__tag">Крылья победы</div>
                  </div>
                </div>
              </Link>
              <Link href="/news/1">
                <div className="card__news card__news--small">
                  <div className="card__content">
                    <h6 className="card__title">
                      В Музейном комплексе УГМК открылся выставочный центр
                      «Крылья Победы»
                    </h6>
                    <span className="card__description">
                      Новый, уже четвертый, выставочный центр открылся в
                      Музейном комплексе УГМК. «Крылья Победы» - один из самых
                      крупных российских музеев авиации
                    </span>
                  </div>
                  <div className="card__bottom">
                    <span className="card__date">6 мая, 2021</span>
                    <div className="card__tag">Крылья победы</div>
                  </div>
                </div>
              </Link>
              <Link href="/news/1">
                <div className="card__news card__news--medium">
                  <div className="card__content">
                    <h6 className="card__title">
                      В Музейном комплексе УГМК открылся выставочный центр
                      «Крылья Победы»
                    </h6>
                    <span className="card__description">
                      Новый, уже четвертый, выставочный центр открылся в
                      Музейном комплексе УГМК. «Крылья Победы» - один из самых
                      крупных российских музеев авиации
                    </span>
                  </div>
                  <div className="card__bottom">
                    <span className="card__date">6 мая, 2021</span>
                    <div className="card__tag">Крылья победы</div>
                  </div>
                </div>
              </Link>
              {news.length > 4 ? (
                <div className="card__news card__news--more">
                  <Link href={"/news/1"}>
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
