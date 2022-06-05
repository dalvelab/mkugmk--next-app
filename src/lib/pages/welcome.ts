import { flatten } from "ramda";

import { fetchAPI } from "../api";

import { IWelcomePageInfoResponse } from "@models/api";
import { weekDaysShortEn } from "@models/common";

export async function getWelcomePageInfo(locale?: string) {
  const { data }: IWelcomePageInfoResponse = await fetchAPI(
    `
    query GetWelcomePageInfo($locale: String) {
      museums(locale: $locale, sort: "createdAt:desc") {  
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
            openingHours {
              id
              weekDay
              isClosed
              timeOpen
              timeClose
            }
            gallery(pagination: {limit: 1}) {
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
      posts (sort: "createdAt:desc", pagination: {limit: 6}) {
        data {
          id
          attributes {
            title
            postType
            shortDescription
            slug
            image {
              data {
                id
                attributes {
                  url
                }
              }
            }
            eventDate
            createdAt
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
      image: data.welcome.data.attributes.media.data.attributes,
    },
    museums: data.museums.data.map((museum) => {
      return {
        id: museum.id,
        title: museum.attributes.title,
        slug: museum.attributes.slug,
        cardImage: museum.attributes.cardImage.data.attributes,
        openingHours: museum.attributes.openingHours.map((day) => {
          return {
            ...day,
            dayIndex: weekDaysShortEn.indexOf(day.weekDay),
          };
        }),
        tags: museum.attributes.tags,
      };
    }),
    posts: data.posts.data.map((post) => {
      return {
        id: post.id,
        title: post.attributes.title,
        slug: post.attributes.slug,
        postType: post.attributes.postType,
        shortDescription: post.attributes.shortDescription,
        image: post.attributes.image.data.attributes,
        eventDate: post.attributes.eventDate,
        createdAt: post.attributes.createdAt,
      };
    }),
    gallery: flatten(
      data.museums.data.map((museum) =>
        museum.attributes.gallery.data.map((image) => {
          return {
            id: image.id,
            url: image.attributes.url,
          };
        })
      )
    ),
  };

  return transformedResponse;
}
