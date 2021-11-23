import { useState, useRef } from "react";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { LegacyRef } from "react";
import { IContact } from "@models/main";

// LIB
import { getContacts } from "@lib/api";

// HOOKS
import { useTranslate } from "hooks/useTranslate";

// CONTAINERS
import { ContactsContainer } from "@containers/Contacts";

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
    setIsDisabled(true);
    setIsActive(false);
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
          <ContactsContainer
            contacts={contacts}
            title="Руководство"
            type="management"
          />
          <ContactsContainer
            contacts={contacts}
            title="Для СМИ и медиа"
            type="media"
          />
          <ContactsContainer
            contacts={contacts}
            title="Сотрудничество"
            type="cooperation"
          />
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
        </Container>
        <Container type="container--flex container--map">
          <div className="map__wrapper">
            <div
              className={`${
                isActive
                  ? "map__overlay overlay--active"
                  : isDisabled
                  ? "map__overlay overlay--disabled"
                  : "map__overlay overlay"
              }`}
              onClick={handleMapActive}
              onMouseOver={handleMapBlur}
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
              onMouseLeave={handleMapUnblur}
            ></iframe>
          </div>
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
