import { UI_LANGUAGE_SET } from "../constants/uiConstants";

// LABGUAGE
export const UILanguageReducer = (state = {}, action) => {
  switch (action.type) {
    case UI_LANGUAGE_SET:
      return action.payload;
    default:
      return state;
  }
};
