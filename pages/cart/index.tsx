import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

// TYPES
import { NextPage } from "next";
import { RootState } from "@models/state";

// HOOKS
import { useTranslate } from "hooks/useTranslate";

// ACTIONS
import { UITicketPricesHandle } from "../../redux/actions/uiActions";

// CONTAINERS
import { CheckoutFormContainer } from "@containers/Cart";

// COMPONENTS
import Head from "next/head";
import { Container } from "@components/UI";
import { Button } from "@components/UI";
import { CardTicket } from "@components/Cards";

const CartPage: NextPage = () => {
  const dispatch = useDispatch();

  const translate = useTranslate();

  // REDUX STATE
  const cart = useSelector((state: RootState) => state.cart.tickets);
  const language = useSelector((state: RootState) => state.UI.language);

  // TICKETS CATEGORIES FROM STATE
  const { tickets } = useSelector((state: RootState) => state.UI.prices);

  // LOCAL STATE
  const [isTableOpened, setIsTableOpened] = useState(true);

  useEffect(() => {
    dispatch(UITicketPricesHandle(language));
  }, [language]);

  const openTicketTable = () => {
    setIsTableOpened(!isTableOpened);
  };

  const cartTotal = useMemo(() => {
    if (cart.length > 0) {
      const ticketsCount = cart
        .map((ticket) => ticket.quantity)
        .reduce((a, b) => a + b);
      const priceTotal = cart
        .map((ticket) => ticket.price * ticket.quantity)
        .reduce((a, b) => a + b);
      return `${ticketsCount} бил. на ${priceTotal} ₽`;
    }
  }, [cart]);

  return (
    <>
      <Head>
        <title>Купить билет | Музейный комплекс УГМК</title>
      </Head>
      <section className="section__tickets">
        <Container type="container--flex">
          <h2 className="section__heading">{translate.cart.title}</h2>
          <div className="tickets__flex--wrapper">
            <div className="wrapper">
              <div className="tickets__column tickets__table--prices">
                <span className="column__title">
                  {translate.cart.tableTitle}
                </span>
                <div className="tickets__divider"></div>
                <button
                  className="column__icon--dropdown"
                  onClick={openTicketTable}
                >
                  {isTableOpened ? (
                    <i className="far fa-chevron-down icon__reversed"></i>
                  ) : (
                    <i className="far fa-chevron-down "></i>
                  )}
                </button>
                <div
                  className={
                    isTableOpened
                      ? "table__content table__content--active"
                      : "table__content"
                  }
                >
                  <div className="table__row">
                    <div>Выставочный центр (ВЦ)</div>
                    <div>Стандарт</div>
                    <div>Льготный / Детский</div>
                  </div>
                </div>
              </div>
              <div className="tickets__column tickets__checkout mt-2">
                <span className="column__title">
                  {translate.cart.formTitle}
                </span>
                <div className="tickets__divider"></div>
                <CheckoutFormContainer />
              </div>
            </div>
            <div className="tickets__column tickets__cart">
              <span className="column__title">{translate.cart.cartTitle}</span>
              <div className="tickets__divider"></div>
              {cart.map((ticket, index: number) => (
                <CardTicket
                  key={index}
                  id={ticket.id}
                  title={ticket.title}
                  price={ticket.price}
                  quantity={ticket.quantity}
                />
              ))}
              <span className="column__title mb-2">
                {cart.length > 0 ? `Итого: ${cartTotal}` : null}
              </span>
              <Button
                type="tickets__button btn--x1 btn--green font--medium"
                text={translate.cart.checkoutButton}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CartPage;
