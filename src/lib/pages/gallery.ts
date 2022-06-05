import { fetchAPI } from "../api";

import { IMuseumStrapi } from "@models/api";

interface IGalleryPageInfoResponse {
  data: {
    museums: {
      data: IMuseumStrapi[];
    };
  };
}

export async function getGalleryPage() {
  const { data }: IGalleryPageInfoResponse = await fetchAPI(
    `
    query GetGalleryPage {
      museums {
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
  `
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

  console.log(transformedResponse);

  return transformedResponse;
}
