import { CART_ITEM_ADD, CART_ITEM_REMOVE } from "../constants/cartConstants";

export const cartAddTicket = (data, quantity) => async (dispatch, getState) => {
  dispatch({
    type: CART_ITEM_ADD,
    payload: {
      id: data.id,
      title: data.title,
      price: data.price,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.items));
};

export const cartRemoveTicket = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_ITEM_REMOVE,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
