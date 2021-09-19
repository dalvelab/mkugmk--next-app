import {
  CardMuseumProps,
  CardNewsProps,
  MuseumProps,
  EventProps,
  NewsProps,
  GalleryImage,
  WorkingHours,
  Image,
} from "./main";

export interface WelcomePageProps {
  pageInfo: {
    title: string;
    description: string;
    image: Image;
  };
  museums: Array<CardMuseumProps>;
  events: Array<EventProps>;
  news: Array<CardNewsProps>;
  gallery: Array<GalleryImage>;
  hours: Array<WorkingHours>;
}

export interface MuseumSinglePageProps {
  museum: MuseumProps;
  hours: Array<WorkingHours>;
  gallery: Array<GalleryImage>;
  news: Array<CardNewsProps>;
  events: Array<EventProps>;
}

export interface NewsPageProps {
  news: Array<CardNewsProps>;
}
