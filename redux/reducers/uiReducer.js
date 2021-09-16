import {
  UI_LANGUAGE_SET,
  UI_SIDEBAR_OPEN,
  UI_SIDEBAR_CLOSE,
  UI_MUSEUM_LINKS_REQUEST,
  UI_MUSEUM_LINKS_SUCCESS,
  UI_MUSEUM_LINKS_FAIL,
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

export const UIMuseumLinksReducer = (state = { museums: [] }, action) => {
  switch (action.type) {
    case UI_MUSEUM_LINKS_REQUEST:
      return {
        loading: true,
      };
    case UI_MUSEUM_LINKS_SUCCESS:
      return { loading: false, museums: action.payload };
    case UI_MUSEUM_LINKS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
