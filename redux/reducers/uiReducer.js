import {
  UI_LANGUAGE_SET,
  UI_SIDEBAR_OPEN,
  UI_SIDEBAR_CLOSE,
} from "../constants/uiConstants";

// LANGUAGE
export const UILanguageReducer = (state = {}, action) => {
  switch (action.type) {
    case UI_LANGUAGE_SET:
      return action.payload;
    default:
      return state;
  }
};

// SIDEBAR
export const UISidebarReducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case UI_SIDEBAR_OPEN:
      return { isOpen: action.payload };
    case UI_SIDEBAR_CLOSE:
      return {
        isOpen: action.payload,
      };
    default:
      return state;
  }
};
