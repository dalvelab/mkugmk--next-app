export interface MuseumProps {
  title: string;
  slug: string;
  museumType: string;
  description: string;
  image: Image;
  shortDescription: string;
}

export interface CardMuseumProps {
  title: string;
  slug: string;
  image: Image;
  shortDescription: string;
}

export interface EventProps {
  title: string;
  slug: string;
  image: Image;
  date: string;
  shortDescription: string;
  description: string;
}

export interface CardEventProps {
  title: string;
  slug: string;
  image: Image;
  date: string;
  shortDescription: string;
}

export interface NewsProps {
  type: string;
  title: string;
  slug: string;
  image: Image;
  createdAt: string;
  shortDescription: string;
  tag: {
    title: string;
  };
  description: string;
}

export interface CardNewsProps {
  type: string;
  title: string;
  slug: string;
  image: Image;
  createdAt: string;
  shortDescription: string;
  tag: {
    title: string;
  };
}

export interface Ticket {
  id: number;
  title: string;
  price: number;
  quantity: number;
  type?: string;
}

export interface GalleryImage {
  url: string;
}

export interface ContainerProps {
  type: string;
  styles?: React.CSSProperties;
  children: React.ReactElement | React.ReactElement[];
}

// SECTIONS

export interface HeadingSectionProps {
  title: string;
  museumType: string;
  image: Image;
  hours: Array<WorkingHours>;
  description: string;
}

export interface NewsSectionProps {
  title: string;
  type: string;
  news: Array<CardNewsProps>;
}

export interface EventsSectionProps {
  type: string;
  events: Array<CardEventProps>;
}

export interface GallerySectionProps {
  type: string;
  gallery: Array<Image>;
}

export interface Day {
  day: string;
  timeOpen: string;
  timeClose: string;
  isWeekend: boolean;
}

export interface WorkingHours {
  workingHoursMuseum: Array<Day>;
  workingHoursOutdoor: Array<Day>;
}

// COMPONENTS

export interface InputProps {
  label: string;
  type: string;
  placeholder: string;
}

export interface Image {
  url: string;
  width?: string;
  height?: string;
  blurDataURL?: string;
}

export interface DropdownProps {
  isActive: boolean;
  setActive: Function;
  label: string;
  text: string;
  placeholder: string;
  setText: Function;
  setPrice: Function;
  setID: Function;
  tickets: Array<Ticket>;
}
