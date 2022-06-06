import { fetchAPI } from "../api";

import { IMuseumStrapi } from "@models/api";

interface IGalleryPageInfoResponse {
  data: {
    museums: {
      data: IMuseumStrapi[];
    };
  };
}

export async function getGalleryPage(locale?: string) {
  const { data }: IGalleryPageInfoResponse = await fetchAPI(
    `
    query GetGalleryPage($locale: I18NLocaleCode) {
      museums(locale: $locale) {
        data {
          id
          attributes {
            title
            gallery {
              data {
                id 
                attributes {
                  url
                  width
                }
              }
            }
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
    museums: data.museums.data.map((museum) => {
      return {
        id: museum.id,
        title: museum.attributes.title,
        gallery: museum.attributes.gallery.data.map((image) => {
          return {
            id: image.id,
            url: image.attributes.url,
          };
        }),
      };
    }),
  };

  return transformedResponse;
}
