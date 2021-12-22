// TYPES
import { FC } from "react";
import { IContact } from "@models/main";

interface IProps {
  title: string;
  type: string;
  contacts: IContact[];
}

export const ContactsContainer: FC<IProps> = (props) => {
  const { contacts, title, type } = props;

  return (
    <>
      {contacts.filter((contact) => contact.type === type).length > 0 && (
        <div className="contacts__row">
          <h5>{title}</h5>
          <div className="cards__wrapper wrapper--flex">
            {contacts
              .filter((contact) => contact.type === type)
              .map((contact) => (
                <div className="card__contact" key={contact.id}>
                  <span className="card__job">{contact.position}</span>
                  <span className="card__name">{contact.name}</span>
                  <div className="card__contacts--list">
                    <div className="contact">{contact.email}</div>
                    <div className="contact">{contact.phone}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
