import {
  UI_LANGUAGE_SET,
  UI_SIDEBAR_OPEN,
  UI_SIDEBAR_CLOSE,
  UI_MUSEUM_LINKS_REQUEST,
  UI_MUSEUM_LINKS_SUCCESS,
  UI_MUSEUM_LINKS_FAIL,
  UI_PRICES_REQUEST,
  UI_PRICES_SUCCESS,
  UI_PRICES_FAIL,
} from "../constants/uiConstants";

import { getMuseumLinks, getTicketPrices } from "@lib/api";

export const handleUILanguage = (language) => async (dispatch) => {
  localStorage.setItem("locale", JSON.stringify(language));
  dispatch({ type: UI_LANGUAGE_SET, payload: language });
};

export const UISidebarHandle = (status) => async (dispatch) => {
  if (status === true) {
    dispatch({ type: UI_SIDEBAR_OPEN, payload: status });
  } else {
    dispatch({ type: UI_SIDEBAR_CLOSE, payload: status });
  }
};

export const UIMuseumLinksHandle = (language) => async (dispatch) => {
  try {
    dispatch({ type: UI_MUSEUM_LINKS_REQUEST });

    const data = await getMuseumLinks(language);

    dispatch({
      type: UI_MUSEUM_LINKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UI_MUSEUM_LINKS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

export const UITicketPricesHandle = (language) => async (dispatch) => {
  try {
    dispatch({ type: UI_PRICES_REQUEST });

    const data = await getTicketPrices(language);

    dispatch({
      type: UI_PRICES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UI_PRICES_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};
