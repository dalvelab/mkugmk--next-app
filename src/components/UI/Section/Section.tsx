import { Container } from "../Container";
import { PageHeader } from "@components/Page";

import styles from "./Section.module.scss";

interface IProps {
  margin?: string;
  title?: string;
  classContainer?: string;
  padding?: string;
  bgColor?: string;
  isBackLink?: boolean;
  isFullPageHeight?: boolean;
}

export const Section: React.FC<IProps> = (props) => {
  const {
    children,
    title,
    margin,
    classContainer = "container--flex",
    padding,
    bgColor = "#ffffff",
    isBackLink = false,
    isFullPageHeight = false,
  } = props;

  return (
    <section
      className={styles.section}
      style={{ margin, padding, backgroundColor: bgColor }}
    >
      <Container className={classContainer}>
        {isBackLink && <PageHeader />}
        {title && <h2 className={styles.sectionHeading}>{title}</h2>}
        {children}
      </Container>
    </section>
  );
};
