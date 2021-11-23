import { useState, useRef } from "react";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { LegacyRef } from "react";
import { IContact } from "@models/main";

// LIB
import { getContacts } from "@lib/api";

// HOOKS
import { useTranslate } from "hooks/useTranslate";

//  COMPONENTS
import Head from "next/head";
import { PageHeader } from "@components/Page";
import { Container } from "@components/UI";

interface IContactsProps {
  contacts: IContact[];
}

const Contacts: NextPage<IContactsProps> = ({ contacts }) => {
  const translate = useTranslate();

  const [isActive, setIsActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const map: LegacyRef<HTMLIFrameElement> = useRef(null);

  const handleMapBlur = () => {
    setIsActive(true);
  };

  const handleMapUnblur = () => {
    setIsActive(false);
    setIsDisabled(false);
  };

  const handleMapActive = () => {
    setIsActive(false);
    setIsDisabled(true);
  };

  return (
    <>
      <Head>
        <title>Контакты | Музейный комплекс УГМК</title>
      </Head>
      <PageHeader />
      <section className="section__contacts">
        <Container type="container--flex">
          <h2 className="section__heading">{translate.contactsPage.title}</h2>
          <div className="contacts__row">
            {contacts.filter((contact) => contact.type === "management")
              .length > 0 && <h5>Руководство</h5>}
            <div className="cards__wrapper wrapper--flex">
              {contacts
                .filter((contact) => contact.type === "management")
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
          <div className="contacts__row">
            {contacts.filter((contact) => contact.type === "media").length >
              0 && <h5>Для СМИ и медиа</h5>}
            <div className="cards__wrapper wrapper--flex">
              {contacts
                .filter((contact) => contact.type === "media")
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
          <div className="contacts__row">
            {contacts.filter((contact) => contact.type === "cooperation")
              .length > 0 && <h5>Сотрудничество</h5>}
            <div className="cards__wrapper wrapper--flex">
              {contacts
                .filter((contact) => contact.type === "cooperation")
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
        </Container>
      </section>
      <section className="section__contacts--working-hours">
        <Container type="container--flex">
          <h2 className="section__heading">Часы работы</h2>
        </Container>
      </section>
      <section className="section__contacts--yandex-map">
        <Container type="container--flex">
          <h2 className="section__heading">Как добраться</h2>
          <div
            className={`${
              isActive
                ? "map__overlay overlay--active"
                : isDisabled
                ? "map__overlay overlay--disabled"
                : "map__overlay"
            }`}
            onClick={handleMapActive}
            onMouseOver={handleMapBlur}
            onMouseLeave={handleMapUnblur}
            onTouchStart={handleMapBlur}
          >
            <div className="overlay__text">Нажмите на карту для работы</div>
          </div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4a18c5739a078ec65fab77ebc20a509248f21534ca59e3defa8a17620f82a2de&amp;source=constructor"
            width="100%"
            height="650px"
            frameBorder="0"
            ref={map}
          ></iframe>
        </Container>
      </section>
    </>
  );
};

export default Contacts;

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const contacts = (await getContacts()) || null;
  return {
    props: {
      contacts,
    },
  };
};
