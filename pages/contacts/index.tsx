import { useState, useRef } from "react";

// TYPES
import { NextPage } from "next";
import { LegacyRef } from "react";

// HOOKS
import { useTranslate } from "hooks/useTranslate";

//  COMPONENTS
import Head from "next/head";
import Container from "@components/Container";

const Contacts: NextPage = () => {
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
      <section className="section__contacts">
        <Container type="container--flex">
          <>
            <h2 className="section__heading">{translate.contactsPage.title}</h2>
            <div className="cards__wrapper wrapper--flex">
              <div className="card__contact">
                <span className="card__job">Директор по коммуникацям</span>
                <span className="card__name">Грифон Владислав</span>
                <div className="card__contacts--list">
                  <div className="contact">vevbragin@mkugmk.ru</div>
                  <div className="contact">+79222149178</div>
                </div>
              </div>
              <div className="card__contact">
                <span className="card__job">Руководитель экскурсий</span>
                <span className="card__name">Лепс Григорий</span>
                <div className="card__contacts--list">
                  <div className="contact">lepsgrisha@mkugmk.ru</div>
                  <div className="contact">+792222222</div>
                </div>
              </div>
              <div className="card__contact">
                <span className="card__job">Большой начальник</span>
                <span className="card__name">Шуйвашев Евхений</span>
                <div className="card__contacts--list">
                  <div className="contact">e.shuyvashev@mkugmk.ru</div>
                  <div className="contact">+792222222</div>
                </div>
              </div>
            </div>
          </>
        </Container>
      </section>
      <section className="section__contacts--yandex-map">
        <Container type="container--flex">
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
