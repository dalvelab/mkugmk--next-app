import { WeekDaysShort } from "./common";

export interface IMuseum {
  id: string;
  title: string;
  slug: string;
  isTickets: boolean;
  description: string;
  cardImage: IImage;
  headerImage: IImage;
  tags: string;
  openingHours: IOpeningHours[];
  gallery: IImage[];
}

export interface IPost {
  id: string;
  title: string;
  slug: string;
  image: IImage;
  description: string;
  shortDescription: string;
  eventDate: string;
  postType: PostType;
  createdAt: string;
}

export enum PostType {
  EVENT = "event",
  NEWS = "news",
}

export interface IOpeningHours {
  id: string;
  dayIndex: number;
  weekDay: WeekDaysShort;
  isClosed: boolean;
  timeOpen: string;
  timeClose: string;
}

export interface IImage {
  id: string;
  url: string;
  width?: string;
  height?: string;
}

export interface IGalleryImage {
  url: string;
}

export interface IContact {
  id: string;
  segment: string;
  name: string;
  email: string;
  phone: string;
}
