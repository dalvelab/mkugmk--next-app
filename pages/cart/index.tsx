import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// LOCALES
import en from "../../locales/en";
import ru from "../../locales/ru";

// TYPES
import { NextPage } from "next";

// ACTIONS
import {
  cartAddTicket,
  cartRemoveTicket,
} from "../../redux/actions/cartActions";

//  COMPONENTS
import Head from "next/head";
import Container from "@components/Container";
import Button from "@components/Button";

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

  const handleTicketDelete = (id: number) => {
    dispatch(cartRemoveTicket(id));
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

  const handleDropdown = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const handleDropdownSelect = (id: number, text: string, price: number) => {
    setActiveText(text);
    setActivePrice(price);
    setActiveId(id);
    setIsActive(false);
  };

  return (
    <>
      <Head>
        <title>Корзина | Музейный комплекс УГМК</title>
      </Head>
      <section className="section__tickets">
        <Container type="container--flex">
          <h2 className="section__heading">Купить билет</h2>
          <div className="tickets__wrapper">
            <div className="tickets__form">
              <div className="input__wrapper">
                <label className="label__tickets" htmlFor="text">
                  Введите Ваш Email
                </label>
                <input
                  className="input__tickets"
                  type="email"
                  placeholder="Ваш Email"
                />
              </div>
              <div className="input__wrapper">
                <label className="label__tickets" htmlFor="text">
                  Введите Ваш Email повторно
                </label>
                <input
                  className="input__tickets"
                  type="email"
                  placeholder="Ваш Email"
                />
              </div>
              <div className="input__wrapper">
                <label className="label__tickets" htmlFor="text">
                  Выберите тип билета
                </label>
                <input
                  className="input__tickets input__dropdown"
                  type="text"
                  placeholder="Нажмите чтобы выбрать"
                  value={activeText}
                  readOnly
                  onClick={handleDropdown}
                />
                <div
                  className={
                    isActive ? "dropdown dropdown--active" : "dropdown"
                  }
                >
                  <div
                    className="dropdown__element"
                    onClick={() =>
                      handleDropdownSelect(1, "Билет в 1ВЦ (250 Р)", 250)
                    }
                  >
                    Билет в 1ВЦ (250 Р)
                  </div>
                  <div
                    className="dropdown__element"
                    onClick={() =>
                      handleDropdownSelect(
                        2,
                        "Билет в 1ВЦ (льготный) (200 Р)",
                        200
                      )
                    }
                  >
                    Билет в 1ВЦ (льготный) (200 Р)
                  </div>
                  <div
                    className="dropdown__element"
                    onClick={() =>
                      handleDropdownSelect(3, "Билет в 2ВЦ (500 Р)", 500)
                    }
                  >
                    Билет в 2ВЦ (500 Р)
                  </div>
                </div>
              </div>
              <div className="input__wrapper">
                <label className="label__tickets" htmlFor="text">
                  Выберите кол-во посетителей
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
                  type="tickets__form--btn btn--x1 btn--black font--medium"
                  text="Добавить"
                  action={handleTicketAdd}
                />
              </div>
            </div>
            <div className="cart__wrapper">
              <span className="cart__title">Корзина</span>
              <div className="cart__divider"></div>
              {cart.map((ticket: any, index: number) => (
                <div key={index}>
                  <div className="cart__order">
                    <div className="cart__order--icon">
                      <i className="fal fa-ticket-alt"></i>
                    </div>
                    <div className="cart__order--description">
                      <span className="cart__order--title">{ticket.title}</span>
                      <span className="cart__order--amount">
                        {ticket.price} ₽ x {ticket.quantity} шт
                      </span>
                    </div>
                    <button
                      className="cart__order--button-remove"
                      onClick={() => handleTicketDelete(ticket.id)}
                    >
                      <i className="fal fa-times"></i>
                    </button>
                  </div>
                  <div className="cart__divider"></div>
                </div>
              ))}
              <Button
                type="cart__button btn--x1 btn--green font--medium"
                text="Перейти к оплате"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Cart;
