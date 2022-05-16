import { IImage } from "./main";

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
  };
}
