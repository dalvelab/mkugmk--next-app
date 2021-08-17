import {
  UI_LANGUAGE_SET,
  UI_SIDEBAR_OPEN,
  UI_SIDEBAR_CLOSE,
} from "../constants/uiConstants";

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
