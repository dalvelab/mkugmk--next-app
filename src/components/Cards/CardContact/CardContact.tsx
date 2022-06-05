import { isEmpty } from "ramda";

import { IContact } from "@models/main";

interface IProps {
  contact: IContact;
}

import styles from "./CardContact.module.scss";

export const CardContact: React.FC<IProps> = (props) => {
  const { contact } = props;

  return (
    <div className={styles.cardContact}>
      <span className={styles.cardSegment}>{contact.segment}</span>
      <span className={styles.cardName}>{contact.name}</span>
      <div className={styles.contactsList}>
        {!isEmpty(contact.phone) && (
          <a href={`tel:${contact.phone}`} className={styles.contact}>
            {contact.phone}
          </a>
        )}
        {!isEmpty(contact.email) && (
          <a href={`mailto:${contact.email}`} className={styles.contact}>
            {contact.email}
          </a>
        )}
      </div>
    </div>
  );
};
