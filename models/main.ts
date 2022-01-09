export interface IMuseum {
  id: string;
  title: string;
  slug: string;
  museumType: string;
  description: string;
  image: IImage;
  headerImage: IImage;
}

export interface IEvent {
  id: string;
  title: string;
  slug: string;
  image: IImage;
  date: string;
  shortDescription: string;
  description: string;
}

export enum NewsType {
  EVENT = "event",
  NEWS = "news",
}

export enum CardType {
  SMALL = "card__news--small",
  MEDIUM = "card__news--medium",
  BIG = "card__news--big",
}

export interface INews {
  id: string;
  postType: NewsType;
  type: string;
  title: string;
  slug: string;
  image: IImage;
  eventDate: string;
  createdAt: string;
  shortDescription: string;
  tag: {
    title: string;
  };
  description: string;
}

export interface ITicket {
  id: string;
  title: string;
  price: number;
  quantity: number;
  type?: string;
}

export interface IImage {
  url: string;
  width?: string;
  height?: string;
  blurDataURL?: string;
}

export interface IGalleryImage {
  url: string;
}

export interface IOpenDay {
  day: string;
  timeOpen: string;
  timeClose: string;
  isWeekend: boolean;
}

export interface IOpenHours {
  museum: Array<IOpenDay>;
  openspace: Array<IOpenDay>;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  type: string;
  phone: string;
  position: string;
}
