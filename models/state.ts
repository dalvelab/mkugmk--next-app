import { Ticket } from "./main";

export interface RootState {
  UI: {
    language: string;
    sidebar: {
      isOpen: boolean;
    };
    links: {
      linksMuseum: {
        loading: boolean;
        museums: MuseumLink[];
      };
    };
  };
  cart: {
    tickets: Ticket[];
  };
}

interface MuseumLink {
  title: string;
  slug: string;
}
