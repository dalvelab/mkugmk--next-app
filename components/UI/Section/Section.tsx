import { Container } from "../Container";

import styles from "./Section.module.scss";

interface IProps {
  margin?: string;
  title?: string;
  classContainer?: string;
}

export const Section: React.FC<IProps> = (props) => {
  const { children, title, margin, classContainer = "container--flex" } = props;

  return (
    <section className={styles.section} style={{ margin }}>
      <Container className={classContainer}>
        <h2 className={styles.sectionHeading}>{title}</h2>
        {children}
      </Container>
    </section>
  );
};
