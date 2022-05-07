import Link from "next/link";

import { Button, Section } from "@components/UI";
import { CardNews } from "@components/Cards";
import { INews } from "@models/main";

import styles from "./NewsContainer.module.scss";

interface IProps {
  title: string;
  news: INews[];
}

export const NewsContainer: React.FC<IProps> = (props) => {
  const { title, news } = props;

  return (
    <Section title={title} margin="20px 0 0 0">
      {news && news.length > 0 && (
        <div className={styles.cardsWrapper}>
          <CardNews post={news[0]} />
          <CardNews post={news[1]} />
          <CardNews post={news[2]} />
          <CardNews post={news[3]} />

          {news.length > 5 && (
            <Link href="/news">
              <div className={styles.cardsNewsMore}>
                <Button type="xl" bgColor="black" text="Больше событий" />
              </div>
            </Link>
          )}
        </div>
      )}
    </Section>
  );
};
