import { Container } from "@components/UI";
import { useTranslate } from "hooks/useTranslate";

import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  const translate = useTranslate();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerTop}>
          <div className={styles.footerTopLeft}>
            <div className={styles.footerAddress}>
              {translate.footer.address.city}
              <a
                href={`https://yandex.ru/maps/?um=constructor%3A4a18c5739a078ec65fab77ebc20a509248f21534ca59e3defa8a17620f82a2de&source=constructorLink`}
                rel="noopener noreferrer"
                target="_blank"
                className="footer__address--link"
                aria-label="Адрес музея"
              >
                <span>{translate.footer.address.street}</span>
              </a>
            </div>
            <div className={styles.footerContacts}>
              <div className={styles.footerContactsText}>
                <div>
                  <a
                    href="tel:+73436846784"
                    rel="noopener noreferrer"
                    aria-label="Телефон голосового помощника"
                  >
                    +7 (343-68) 684-67-84{" "}
                  </a>
                  - {translate.footer.contacts.phone_support}
                </div>
                <div>
                  <a
                    href="tel:+73436847217"
                    rel="noopener noreferrer"
                    aria-label="Телефон для сотрудничества"
                  >
                    +7 (343-68) 684-72-17{" "}
                  </a>
                  - {translate.footer.contacts.phone_cooperation}
                </div>
              </div>
              {/* <div className="footer__contacts--text">
                <div>
                  <a href="">support@mkugmk.ru</a> -{" "}
                  {translate.footer.contacts.emailSupport}
                </div>
                <div>
                  <a href="">tickets@mkugmk.ru</a> -{" "}
                  {translate.footer.contacts.emailTickets}
                </div>
              </div> */}
            </div>
          </div>
          <div className={styles.footerTopRight}>
            <div className={styles.footerSocialWrapper}>
              <span>{translate.footer.socials.mat}</span>
              <div className={styles.socialLinks}>
                <a
                  href="https://vk.com/museum_ummc"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Вконтакте"
                >
                  ВКонтакте
                </a>
              </div>
            </div>
            <div className={styles.footerSocialWrapper}>
              <span>{translate.footer.socials.mvt}</span>
              <div className={styles.socialLinks}>
                <a
                  href="https://vk.com/museum_ummc"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Вконтакте"
                >
                  ВКонтакте
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            Материалы сайта доступны по лицензии Creative Commons
            «Attribution-ShareAlike» 4.0 International, если не указан иной
            источник
          </div>
          <div className={styles.footerDocuments}>
            <a href="#">Публичная оферта</a>
            <a href="#">Пользовательское соглашение</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
