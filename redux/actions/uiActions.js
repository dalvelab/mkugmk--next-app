import {
  UI_LANGUAGE_SET,
  UI_SIDEBAR_OPEN,
  UI_SIDEBAR_CLOSE,
  UI_MUSEUM_LINKS_REQUEST,
  UI_MUSEUM_LINKS_SUCCESS,
  UI_MUSEUM_LINKS_FAIL,
} from "../constants/uiConstants";

import { getMuseumLinks } from "@lib/api";

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
    console.log(error);
    dispatch({
      type: UI_MUSEUM_LINKS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};
