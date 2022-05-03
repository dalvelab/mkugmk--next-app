import { IContact } from "@models/main";

interface IProps {
  contact: IContact;
}

import styles from "./CardContact.module.scss";

export const CardContact: React.FC<IProps> = (props) => {
  const { contact } = props;

  return (
    <div className={styles.cardContact} key={contact.id}>
      <span className={styles.cardJob}>{contact.position}</span>
      <span className={styles.cardName}>{contact.name}</span>
      <div className={styles.contactsList}>
        <div className={styles.contact}>{contact.email}</div>
        <div className={styles.contact}>{contact.phone}</div>
      </div>
    </div>
  );
};
