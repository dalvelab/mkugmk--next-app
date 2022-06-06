import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { equals, head, isNil, includes, isEmpty } from "ramda";
import classNames from "classnames";

import { Button, Section, ReactImage } from "@components/UI";
import { useTranslate } from "@hooks/useTranslate";
import { getCartPage } from "@lib/pages";

import styles from "./CartPage.module.scss";
import { IMuseum } from "@models/main";

interface IProps {
  museums: IMuseum[];
  tickets: {
    id: string;
    link: string;
    museum: {
      id: string;
      link: string;
      museum: {
        id: string;
        title: string;
      }[];
    }[];
    ticketId: string[];
  }[];
}

const CartPage: NextPage<IProps> = (props) => {
  const { museums, tickets } = props;

  const translate = useTranslate();

  const [selected, setSelected] = useState<string[]>([]);

  const handleCheckout = () => {
    const generatedTicket = head(
      tickets.filter((ticket) => equals(ticket.ticketId, selected))
    );

    if (!isNil(generatedTicket)) {
      window.open(generatedTicket.link);
    } else {
      return;
    }
  };

  const onMuseumClick = (id: string) => {
    if (!includes(id, selected)) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((selectedId) => !equals(selectedId, id)));
    }
  };

  const removeSelectedMuseum = (id: string) => {
    setSelected(selected.filter((selectedId) => !equals(selectedId, id)));
  };

  return (
    <>
      <Head>
        <title>Купить билет | Музейный комплекс УГМК</title>
      </Head>
      <Section title={translate.cart.title} bgColor="#f6f7fb" isBackLink>
        <div className={styles.ticketGenerator}>
          <span className={styles.ticketText}>
            Выберите музей (можно сразу несколько)
          </span>
          <div className={styles.wrapper}>
            <div className={styles.tickets}>
              {museums
                .filter((museum) => museum.isTickets)
                .map((museum) => (
                  <div
                    key={museum.id}
                    className={classNames([
                      styles.cardTicket,
                      {
                        [styles.cardTicketActive]: includes(
                          museum.id,
                          selected
                        ),
                      },
                    ])}
                    onClick={() => onMuseumClick(museum.id)}
                  >
                    <div className={styles.image}>
                      <ReactImage src={museum.cardImage.url} layout="fill" />
                    </div>
                    <span className={styles.text}>{museum.title}</span>
                  </div>
                ))}
            </div>
            <div className={styles.customTicket}>
              {!isEmpty(selected) && (
                <div className={styles.ticketWrapper}>
                  <div className={styles.title}>Вы выбрали</div>
                  <div className={styles.list}>
                    {museums.map((museum) => {
                      if (includes(museum.id, selected)) {
                        return (
                          <div key={museum.id} className={styles.item}>
                            <div
                              className={styles.close}
                              onClick={() => removeSelectedMuseum(museum.id)}
                            >
                              <i className="fal fa-times"></i>
                            </div>
                            <div className={styles.image}>
                              <i className="fal fa-ticket-alt"></i>
                            </div>
                            <span className={styles.title}>{museum.title}</span>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <div className={styles.toCheckoutWrapper}>
                    <span className={styles.secondary}>
                      Выбрать кол-во билетов можно далее
                    </span>
                    <Button
                      onClick={handleCheckout}
                      type="xl"
                      text="Перейти к оплате"
                      bgColor="green"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default CartPage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const { museums, tickets } = (await getCartPage(locale)) || {};
  return {
    props: {
      museums,
      tickets,
    },
  };
};
