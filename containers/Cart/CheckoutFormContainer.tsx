import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

// TYPES
import { FC } from "react";
import { RootState } from "@models/state";

// HOOKS
import { useTranslate } from "hooks/useTranslate";

// ACTIONS
import { cartAddTicket } from "../../redux/actions/cartActions";

// COMPONENTS
import { Button } from "@components/UI";
import { InputDropdown, Input, InputAmountSelect } from "@components/Input";

export const CheckoutFormContainer: FC = () => {
  const translate = useTranslate();

  const dispatch = useDispatch();

  const { tickets } = useSelector((state: RootState) => state.UI.prices);

  // LOCAL STATE
  const [amount, setAmount] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [ticket, addTicket] = useState({ id: "", title: "", price: 0 });

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

  return (
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
  );
};
