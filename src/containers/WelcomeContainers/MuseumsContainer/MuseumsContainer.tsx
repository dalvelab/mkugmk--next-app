import { CardMuseum } from "@components/Cards";
import { Section } from "@components/UI";
import { IMuseum } from "@models/main";

import styles from "./MuseumsContainer.module.scss";

interface IProps {
  museums: IMuseum[];
}

export const MuseumsContainer: React.FC<IProps> = (props) => {
  const { museums } = props;

  return (
    <Section margin="10px 0 0 0">
      <div className={styles.cardsWrapper}>
        {museums.map((museum) => (
          <CardMuseum key={museum.id} museum={museum} />
        ))}
      </div>
    </Section>
  );
};
