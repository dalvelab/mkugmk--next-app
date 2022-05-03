import { ITicket } from "./main";
import { LanguageList } from "./common";

export interface RootState {
  UI: {
    language: LanguageList;
    sidebar: {
      isOpen: boolean;
    };
    links: {
      linksMuseum: {
        loading: boolean;
        museums: {
          title: string;
          slug: string;
        }[];
      };
    };
    prices: {
      tickets: ITicket[];
    };
  };
  cart: {
    tickets: ITicket[];
  };
}
