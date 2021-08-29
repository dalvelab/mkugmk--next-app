import { CART_ITEM_ADD, CART_ITEM_REMOVE } from "../constants/cartConstants";

export const cartReducer = (state = { tickets: [] }, action) => {
  switch (action.type) {
    case CART_ITEM_ADD: {
      const ticket = action.payload;

      let existTicket = state.tickets.find((x) => x.id === ticket.id);

      if (existTicket) {
        existTicket.quantity = existTicket.quantity + ticket.quantity;
        return {
          ...state,
          tickets: state.tickets.map((x) =>
            x.id === existTicket.id ? existTicket : x
          ),
        };
      } else {
        return {
          ...state,
          tickets: [...state.tickets, ticket],
        };
      }
    }
    case CART_ITEM_REMOVE: {
      return {
        ...state,
        tickets: state.tickets.filter((x) => x.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
