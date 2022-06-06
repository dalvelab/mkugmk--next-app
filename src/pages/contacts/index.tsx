import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { useState, useCallback, useRef, Ref } from "react";

import { Section } from "@components/UI";
import { TableContacts } from "@components/Tables";
import { ContactsContainer } from "@containers/ContactsContainers";
import { useTranslate } from "@hooks/useTranslate";
import { getContactsPageInfo } from "@lib/pages";
import { IContact, IOpeningHours } from "@models/main";

import styles from "./ContactsPage.module.scss";

interface IContactsProps {
  contacts: IContact[];
  museums: {
    id: string;
    title: string;
    openingHours: IOpeningHours[];
  }[];
}

const Contacts: NextPage<IContactsProps> = (props) => {
  const { contacts, museums } = props;

  const translate = useTranslate();

  const [isHovered, setIsHovered] = useState(false);
  const [isOverlayDisabled, setIsOverlayDisabled] = useState(false);

  const map: Ref<HTMLIFrameElement> = useRef(null);

  const handleMapBlur = useCallback(() => {
    setIsHovered(true);
    setIsOverlayDisabled(false);
  }, []);

  const onMapUnblur = useCallback(() => {
    setIsOverlayDisabled(false);
    setIsHovered(false);
  }, []);

  const onOverlayClick = useCallback(() => {
    setIsHovered(false);
    setIsOverlayDisabled(true);
  }, []);

  return (
    <>
      <Head>
        <title>Контакты | Музейный комплекс УГМК</title>
      </Head>
      <Section title={translate.contactsPage.title} isBackLink>
        <ContactsContainer contacts={contacts} />
      </Section>

      <Section title="Часы работы" margin="24px 0 0 0">
        <TableContacts openingHours={museums} />
      </Section>
      <Section title="Как добраться" margin="24px 0 32px 0">
        <div className={styles.mapWrapper}>
          {isHovered && !isOverlayDisabled && (
            <div
              className={styles.mapOverlay}
              onClick={onOverlayClick}
              onMouseLeave={onMapUnblur}
            >
              <div className={styles.overlayText}>
                Нажмите на карту для работы
              </div>
            </div>
          )}
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4a18c5739a078ec65fab77ebc20a509248f21534ca59e3defa8a17620f82a2de&amp;source=constructor"
            width="100%"
            height="650px"
            frameBorder="0"
            className={styles.iframeMap}
            ref={map}
            onMouseEnter={handleMapBlur}
          ></iframe>
        </div>
      </Section>
    </>
  );
};

export default Contacts;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const { contacts, museums } = (await getContactsPageInfo(locale)) || [];
  return {
    props: {
      contacts,
      museums,
    },
  };
};
