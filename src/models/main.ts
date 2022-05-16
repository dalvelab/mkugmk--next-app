export interface IMuseum {
  id: string;
  title: string;
  slug: string;
  description: string;
  cardImage: IImage;
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

export interface IImage {
  url: string;
  width?: string;
  height?: string;
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
