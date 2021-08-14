export interface CardMuseumProps {
  slug: string;
  image: {
    url: string;
  };
  title: string;
  shortDescription: string;
}

export interface CardEventProps {
  title: string;
  slug: string;
  image: {
    url: string;
  };
  date: string;
  shortDescription: string;
}

export interface CardNewsProps {
  type: string;
  title: string;
  slug: string;
  image: {
    url: string;
  };
  date: string;
  shortDescription: string;
  tag: {
    title: string;
  };
}
