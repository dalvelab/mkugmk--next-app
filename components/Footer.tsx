import { useSelector } from "react-redux";

// TYPES
import { RootState } from "@models/state";

// LOCALES
import en from "../locales/en";
import ru from "../locales/ru";

// COMPONENTS
import Container from "@components/Container";

const Footer: React.FC = () => {
  const language = useSelector((state: RootState) => state.UI.language);

  const translate = language === "ru" ? ru : en;

  return (
    <footer className="footer__default">
      <Container type="container--flex">
        <div className="footer__top">
          <div className="footer__top--left">
            <div className="footer__text--address">
              {translate.footer.address.city}
              <a
                href={`https://yandex.ru/maps/?um=constructor%3A4a18c5739a078ec65fab77ebc20a509248f21534ca59e3defa8a17620f82a2de&source=constructorLink`}
                rel="noopener noreferrer"
                target="_blank"
                className="footer__address--link"
                aria-label="Адрес магазина"
              >
                <span>{translate.footer.address.street}</span>
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
                  - {translate.footer.contacts.phone}
                </div>
              </div>
              <div className="footer__contacts--text">
                <div>
                  <a href="">support@mkugmk.ru</a> -{" "}
                  {translate.footer.contacts.emailSupport}
                </div>
                <div>
                  <a href="">tickets@mkugmk.ru</a> -{" "}
                  {translate.footer.contacts.emailTickets}
                </div>
              </div>
            </div>
          </div>
          <div className="footer__top--right">
            <div className="footer__social--wrapper">
              <span>{translate.footer.socials.mat}</span>
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
              <span>{translate.footer.socials.mvt}</span>
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
