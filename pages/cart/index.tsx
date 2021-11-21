import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

// TYPES
import { NextPage } from "next";
import { RootState } from "@models/state";

// HOOKS
import { useTranslate } from "hooks/useTranslate";

// ACTIONS
import { cartAddTicket } from "../../redux/actions/cartActions";
import { UITicketPricesHandle } from "../../redux/actions/uiActions";

// COMPONENTS
import Head from "next/head";
import { Container } from "@components/UI";
import { Button } from "@components/UI";
import { CardTicket } from "@components/Cards";
import { InputDropdown, Input, InputAmountSelect } from "@components/Input";

const CartPage: NextPage = () => {
  const dispatch = useDispatch();

  const translate = useTranslate();

  // REDUX STATE
  const cart = useSelector((state: RootState) => state.cart.tickets);
  const language = useSelector((state: RootState) => state.UI.language);

  // TICKETS CATEGORIES FROM STATE
  const { tickets } = useSelector((state: RootState) => state.UI.prices);

  // LOCAL STATE
  const [amount, setAmount] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [isTableOpened, setIsTableOpened] = useState(true);
  const [ticket, addTicket] = useState({ id: "", title: "", price: 0 });

  useEffect(() => {
    dispatch(UITicketPricesHandle(language));
  }, [language]);

  const handleTicketAdd = () => {
    dispatch(
      cartAddTicket(
        {
          id: ticket.id,
          title: ticket.title,
          price: ticket.price,
        },
        amount
      )
    );
    addTicket({ id: "", title: "", price: 0 });
    setAmount(1);
  };

  const handleTicketsAmount = (type: string) => {
    if (type === "increase" && amount < 10) {
      setAmount(amount + 1);
    } else if (type === "decrease" && amount > 1) {
      setAmount(amount - 1);
    } else {
      setAmount(amount);
    }
  };

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
                <div className="tickets__checkout--form">
                  <Input
                    label={translate.cart.form.name}
                    type="text"
                    placeholder={translate.cart.form.namePlaceholder}
                  />
                  <Input
                    label={translate.cart.form.surname}
                    type="text"
                    placeholder={translate.cart.form.surnamePlaceholder}
                  />
                  <Input
                    label={translate.cart.form.email}
                    type="email"
                    placeholder={translate.cart.form.emailPlaceholder}
                  />
                  <Input
                    label={translate.cart.form.emailRepeat}
                    type="email"
                    placeholder={translate.cart.form.emailPlaceholder}
                  />
                  <InputDropdown
                    isOpened={isActive}
                    setOpened={setIsActive}
                    label={translate.cart.form.ticketType}
                    placeholder={translate.cart.form.ticketTypePlaceholder}
                    items={tickets ? tickets : []}
                    text={ticket.title}
                    selectItem={addTicket}
                  />
                  <InputAmountSelect
                    label={translate.cart.form.visitorsAmount}
                    changeAmount={handleTicketsAmount}
                    amount={amount}
                  />
                  <div className="input__wrapper">
                    <Button
                      type="tickets__button btn--x1 btn--black font--medium"
                      text={translate.cart.addTicketButton}
                      action={handleTicketAdd}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="tickets__column tickets__cart">
              <span className="column__title">{translate.cart.cartTitle}</span>
              <div className="tickets__divider"></div>
              {cart.map((ticket: any, index: number) => (
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
