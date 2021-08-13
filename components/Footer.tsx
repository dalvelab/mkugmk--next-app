// TYPES
import { FC } from "react";

// COMPONENTS
import Container from "@components/Container";

const Footer: FC = () => {
  return (
    <footer className="footer__default">
      <Container type="container--flex">
        <div className="footer__top">
          <div className="footer__top--left">
            <div className="footer__text--address">
              Верхняя Пышма
              <a
                href=""
                rel="noopener noreferrer"
                target="_blank"
                className="footer__address--link"
                aria-label="Адрес магазина"
              >
                <span>ул. Александра Козицына, 2</span>
              </a>
            </div>
            <div className="footer__contacts">
              <div className="footer__contacts--text">
                <div>
                  <a
                    href="tel:+79122000199"
                    rel="noopener noreferrer"
                    aria-label="Телефон книжного"
                  >
                    +79222149178{" "}
                  </a>
                  - телефон музея
                </div>
              </div>
              <div className="footer__contacts--text">
                <div>
                  <a href="">support@mkugmk.ru</a> - подддержка
                </div>
                <div>
                  <a href="">tickets@mkugmk.ru</a> - билеты
                </div>
              </div>
            </div>
          </div>
          <div className="footer__top--right">
            <div className="footer__social--wrapper">
              <span>Музей автомобильной техники</span>
              <div className="social__links">
                <a
                  href="https://www.instagram.com/auto_ugmk/"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Инстаграм"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="footer__social--wrapper">
              <span>Музей военной техники</span>
              <div className="social__links">
                <a
                  href="https://www.instagram.com/mvt_ugmk/"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Инстаграм"
                >
                  Instagram
                </a>
                <a
                  href="https://vk.com/museum_ummc"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Вконтакте"
                >
                  ВКонтакте
                </a>
                <a
                  href="https://www.facebook.com/museum.ummc/"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Фейсбук"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">
            Материалы сайта доступны по лицензии Creative Commons
            «Attribution-ShareAlike» 4.0 International, если не указан иной
            источник
          </div>
          <div className="footer__documents">
            <a href="">Публичная оферта</a>
            <a href="">Пользовательское соглашение</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
