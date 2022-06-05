import { isEmpty } from "ramda";

import { CardContact } from "@components/Cards";
import { Section } from "@components/UI";
import { TableContacts } from "@components/Tables";
import { IContact } from "@models/main";
import { useTranslate } from "@hooks/useTranslate";

interface IProps {
  contacts: IContact[];
}

import styles from "./ContactsContainer.module.scss";

export const ContactsContainer: React.FC<IProps> = (props) => {
  const translate = useTranslate();

  const { contacts } = props;

  return (
    <div className={styles.cardsWrapper}>
      {!isEmpty(contacts) ? (
        contacts.map((contact) => (
          <CardContact key={contact.id} contact={contact} />
        ))
      ) : (
        <div>Нет контактов</div>
      )}
    </div>
  );
};
