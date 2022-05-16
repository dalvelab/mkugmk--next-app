import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useState, useRef, LegacyRef } from "react";
import classNames from "classnames";

import { PageHeader } from "@components/Page";
import { Section } from "@components/UI";
import { ContactsContainer } from "@containers/Contacts";
import { getContacts } from "@lib/api";
import { IContact } from "@models/main";
import { useTranslate } from "@hooks/useTranslate";

import styles from "./ContactsPage.module.scss";

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
      <Section title={translate.contactsPage.title}>
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
      </Section>
      <Section title="Часы работы" margin="24px 0 0 0">
        <div className={styles.workingHoursWrapper}>
          <div className={styles.cardWorkingHours}>
            <div className={styles.title}>ПН</div>
            <span className={styles.time}>Выходной</span>
          </div>
          <div className={styles.cardWorkingHours}>
            <div className={styles.title}>ВТ</div>
            <span className={styles.time}>10:00 - 19:00</span>
          </div>
        </div>
      </Section>
      <Section title="Как добраться" margin="24px 0 32px 0">
        <div className={styles.mapWrapper}>
          <div
            className={classNames([
              styles.mapOverlay,
              {
                [styles.overlayActive]: isActive,
                [styles.overlayDisabled]: isDisabled,
                [styles.overlay]: !isDisabled,
              },
            ])}
            onClick={handleMapActive}
            onMouseOver={handleMapBlur}
            onTouchStart={handleMapBlur}
          >
            <div className={styles.overlayText}>
              Нажмите на карту для работы
            </div>
          </div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4a18c5739a078ec65fab77ebc20a509248f21534ca59e3defa8a17620f82a2de&amp;source=constructor"
            width="100%"
            height="650px"
            frameBorder="0"
            className={styles.iframeMap}
            ref={map}
            onMouseLeave={handleMapUnblur}
          ></iframe>
        </div>
      </Section>
    </>
  );
};

export default Contacts;

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const contacts = (await getContacts()) || [];
  return {
    props: {
      contacts,
    },
  };
};
