import { useDispatch } from "react-redux";

// ACTIONS
import { cartRemoveTicket } from "@redux/actions/cartActions";

interface IProps {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

export const CardTicket: React.FC<IProps> = ({
  id,
  title,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();

  const handleTicketDelete = (id: string) => {
    dispatch(cartRemoveTicket(id));
  };

  return (
    <>
      <div className="cart__order">
        <div className="cart__order--icon">
          <i className="fal fa-ticket-alt"></i>
        </div>
        <div className="cart__order--description">
          <span className="cart__order--title">{title}</span>
          <span className="cart__order--amount">
            {price} ₽ x {quantity} шт
          </span>
        </div>
        <button
          className="cart__order--button-remove"
          onClick={() => handleTicketDelete(id)}
        >
          <i className="fal fa-times"></i>
        </button>
      </div>
      <div className="tickets__divider"></div>
    </>
  );
};
