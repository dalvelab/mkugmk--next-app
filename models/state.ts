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
  cart: any;
}

interface MuseumLink {
  title: string;
  slug: string;
}
