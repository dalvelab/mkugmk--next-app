import { ITicket } from "./main";

export interface RootState {
  UI: {
    language: string;
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
