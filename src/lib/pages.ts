import { fetchAPI } from "./api";

import { IImage } from "@models/main";
import { IMuseumStrapi } from "@models/api";

interface IWelcomePageInfoResponse {
  data: {
    museums: {
      data: IMuseumStrapi[];
    };
    welcome: {
      data: {
        attributes: {
          title: string;
          description: string;
          image: {
            data: {
              attributes: IImage;
            };
          };
        };
      };
    };
  };
}

export async function getWelcomePageInfo(locale?: string) {
  const { data }: IWelcomePageInfoResponse = await fetchAPI(
    `
    query GetWelcomePageInfo($locale: String) {
      museums(locale: $locale, sort: "createdAt:desc") {  
        data {
          id
          attributes {
            title,
            slug,
            cardImage {
              data {
                attributes {
                  url
                }
              }
            }
            openingHours {
              id
              isClosed
              timeOpen
              timeClose
            }
          }
        }
      }
      welcome {
        data {
          id,
          attributes {
            title
            image {
              data {
                attributes {
                  url
                }
              }
            }
            description
          }
        }
      }
    }
  `,
    {
      variables: {
        locale,
      },
    }
  );

  const transformedResponse = {
    welcome: {
      title: data.welcome.data.attributes.title,
      description: data.welcome.data.attributes.description,
      image: data.welcome.data.attributes.image.data.attributes,
    },
    museums: data.museums.data.map((museum) => {
      return {
        id: museum.id,
        title: museum.attributes.title,
        slug: museum.attributes.slug,
        cardImage: museum.attributes.cardImage.data.attributes,
      };
    }),
  };

  return transformedResponse;
}
