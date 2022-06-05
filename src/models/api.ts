import { IImage, IOpeningHours, PostType } from "./main";

export interface IMuseumStrapi {
  id: string;
  attributes: {
    title: string;
    slug: string;
    description: string;
    cardImage: {
      data: {
        attributes: IImage;
      };
    };
    headerImage: {
      data: {
        attributes: IImage;
      };
    };
    gallery: {
      data: {
        id: string;
        attributes: IImage;
      }[];
    };
    openingHours: IOpeningHours[];
    tags: string;
  };
}

export interface IPostStrapi {
  id: string;
  attributes: {
    title: string;
    slug: string;
    postType: PostType;
    shortDescription: string;
    description: string;
    image: {
      data: {
        attributes: IImage;
      };
    };
    eventDate: string;
    createdAt: string;
  };
}

export interface IContactStrapi {
  id: string;
  segment: string;
  name: string;
  phone: string;
  email: string;
}

export interface IWelcomePageInfoResponse {
  data: {
    museums: {
      data: IMuseumStrapi[];
    };
    welcome: {
      data: {
        attributes: {
          title: string;
          description: string;
          media: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
      };
    };
    posts: {
      data: IPostStrapi[];
    };
  };
}
