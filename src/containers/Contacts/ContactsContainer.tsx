import { CardContact } from "@components/Cards";
import { IContact } from "@models/main";

interface IProps {
  title: string;
  type: string;
  contacts: IContact[];
}

import styles from "./ContactsContainer.module.scss";

export const ContactsContainer: React.FC<IProps> = (props) => {
  const { contacts, title, type } = props;

  return (
    <>
      {contacts.filter((contact) => contact.type === type).length > 0 && (
        <div className={styles.contactsRow}>
          <h5>{title}</h5>
          <div className={styles.cardsWrapper}>
            {contacts
              .filter((contact) => contact.type === type)
              .map((contact) => (
                <CardContact key={contact.id} contact={contact} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};
