import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// UI
import { UILanguageReducer, UISidebarReducer } from "./reducers/uiReducer";

const reducer = combineReducers({
  UI: combineReducers({
    language: UILanguageReducer,
    sidebar: UISidebarReducer,
  }),
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
