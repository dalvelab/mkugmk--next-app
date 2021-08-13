import { UI_LANGUAGE_SET } from "../constants/uiConstants";

export const handleUILanguage = (language) => async (dispatch) => {
  dispatch({ type: UI_LANGUAGE_SET, payload: language });
};
