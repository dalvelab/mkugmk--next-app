import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// UI
import {
  UILanguageReducer,
  UISidebarReducer,
  UIMuseumLinksReducer,
} from "./reducers/uiReducer";

// CART
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  UI: combineReducers({
    language: UILanguageReducer,
    sidebar: UISidebarReducer,
    links: combineReducers({
      linksMuseum: UIMuseumLinksReducer,
    }),
  }),
  cart: cartReducer,
});

const initialState = {
  UI: {
    language: "ru",
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
