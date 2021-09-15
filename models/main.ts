export interface MuseumProps {
  slug: string;
  image: {
    url: string;
  };
  title: string;
  shortDescription: string;
}

export interface EventProps {
  title: string;
  slug: string;
  image: {
    url: string;
  };
  date: string;
  shortDescription: string;
}

export interface NewsProps {
  type: string;
  title: string;
  slug: string;
  image: {
    url: string;
  };
  createdAt: string;
  shortDescription: string;
  tag: {
    title: string;
  };
}

export interface TicketProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface GalleryImage {
  url: string;
}

export interface ContainerProps {
  type: string;
  styles?: React.CSSProperties;
  children: React.ReactElement | React.ReactElement[];
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
}

export interface HeadingSectionProps {
  title: string;
  museumType: string;
  image: {
    src: string;
    width: string;
    height: string;
    blurDataURL: string;
  };
  hours: WorkingHours[];
  description: string;
}

export interface NewsSectionProps {
  title: string;
  type: string;
  news: Array<NewsProps>;
}

export interface EventsSectionProps {
  type: string;
  events: EventProps[];
}

export interface GallerySectionProps {
  type: string;
  gallery: GalleryImage[];
}

export interface Day {
  day: string;
  timeOpen: string;
  timeClose: string;
  isWeekend: boolean;
}

export interface WorkingHours {
  workingHoursMuseum: Day[];
  workingHoursOutdoor: Day[];
}

export interface InputProps {
  label: string;
  type: string;
  placeholder: string;
}
