import { fetchAPI } from "../api";

import { IMuseumStrapi } from "@models/api";

interface IMuseumSinglePageInfoResponse {
  data: IMuseumStrapi;
}

export async function getSingleMuseumPage(slug?: string | string[]) {
  const { data }: IMuseumSinglePageInfoResponse = await fetchAPI(
    `
    query GetSingleMuseumPage {
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

  const transformedResponse = {
    museum: {
      id: data.id,
      title: data.attributes.title,
      slug: data.attributes.slug,
      cardImage: data.attributes.cardImage.data.attributes,
      headerImage: data.attributes.headerImage.data.attributes,
      description: data.attributes.description,
      gallery: data.attributes.gallery.data.map((image) => {
        return {
          id: image.id,
          url: image.attributes.url,
        };
      }),
    },
  };

  return transformedResponse;
}
