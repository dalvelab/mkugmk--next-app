import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// LOCALES
import en from "../../locales/en";
import ru from "../../locales/ru";

// TYPES
import { NextPage } from "next";

// ACTIONS
import { cartAddTicket } from "../../redux/actions/cartActions";

//  COMPONENTS
import Head from "next/head";
import Container from "@components/Container";
import Button from "@components/Button";
import Input from "@components/Input";
import CardTicket from "@components/CardTicket";
import Dropdown from "@components/Dropdown";

interface RootState {
  UI: {
    language: string;
  };
  cart: {
    tickets: any;
  };
}

interface TicketsSectionProps {}

const Cart: NextPage<TicketsSectionProps> = () => {
  const dispatch = useDispatch();

  const language = useSelector((state: RootState) => state.UI.language);

  const translate = language === "ru" ? ru : en;

  // REDUX STATE
  const cart = useSelector((state: RootState) => state.cart.tickets);

  // LOCAL STATE
  const [amount, setAmount] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [activeText, setActiveText] = useState("");
  const [activePrice, setActivePrice] = useState(0);
  const [activeId, setActiveId] = useState(0);
  const [isTableOpened, setIsTableOpened] = useState(true);

  const handleTicketAdd = () => {
    dispatch(
      cartAddTicket(
        {
          id: activeId,
          title: activeText,
          price: activePrice,
        },
        amount
      )
    );
    setAmount(1);
    setActiveText("");
    setActivePrice(0);
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
                  <div className="table__row">
                    <div>1 ВЦ</div>
                    <div>300₽</div>
                    <div>100₽</div>
                  </div>
                  <div className="table__row">
                    <div>2 ВЦ</div>
                    <div>550₽</div>
                    <div>180₽</div>
                  </div>
                  <div className="table__row">
                    <div>3 ВЦ</div>
                    <div>800₽</div>
                    <div>250₽</div>
                  </div>
                  <div className="table__row">
                    <div>4 ВЦ</div>
                    <div>1000₽</div>
                    <div>300₽</div>
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
                  <Dropdown
                    isActive={isActive}
                    setActive={setIsActive}
                    label={translate.cart.form.ticketType}
                    placeholder={translate.cart.form.ticketTypePlaceholder}
                    text={activeText}
                    setText={setActiveText}
                    setPrice={setActivePrice}
                    setID={setActiveId}
                  />
                  <div className="input__wrapper">
                    <label className="label__tickets" htmlFor="text">
                      {translate.cart.form.visitorsAmount}
                    </label>
                    <div className="tickets__amount--control">
                      <button
                        className="tickets__amount--button"
                        onClick={() => handleTicketsAmount("decrease")}
                      >
                        <i className="fal fa-minus"></i>
                      </button>
                      <div className="tickets__amount--status">{amount}</div>
                      <button
                        className="tickets__amount--button"
                        onClick={() => handleTicketsAmount("increase")}
                      >
                        <i className="fal fa-plus"></i>
                      </button>
                    </div>
                  </div>
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

export default Cart;
