import { head, isNil } from "ramda";

import { fetchAPI } from "../api";

import { IMuseumStrapi } from "@models/api";

interface IMuseumSinglePageInfoResponse {
  museums: {
    data: IMuseumStrapi[];
  };
}

export async function getSingleMuseumPage(slug?: string | string[]) {
  const { museums }: IMuseumSinglePageInfoResponse = await fetchAPI(
    `
    query GetSingleMuseumPage($slug: String) {
      museums(filters: { slug: { eq: $slug }}) {
        data {
          id
          attributes {
            title
            slug
            tags
            cardImage {
              data {
                attributes {
                  url
                }
              }
            }
            headerImage {
              data {
                attributes {
                  url
                }
              }
            }
            gallery {
              data {
                id 
                attributes {
                  url
                  width
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
        slug: slug,
      },
    }
  );

  const museum = head(museums.data);

  if (isNil(museum)) {
    return null;
  }

  const transformedResponse = {
    museum: {
      id: museum.id,
      title: museum.attributes.title,
      slug: museum.attributes.slug,
      cardImage: museum.attributes.cardImage.data.attributes,
      headerImage: museum.attributes.headerImage.data.attributes,
      description: museum.attributes.description,
      gallery: museum.attributes.gallery.data.map((image) => {
        return {
          id: image.id,
          url: image.attributes.url,
        };
      }),
    },
  };

  return transformedResponse;
}
