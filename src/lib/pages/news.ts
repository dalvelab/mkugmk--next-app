import { isNil } from "ramda";

import { fetchAPI } from "../api";

import { IPostStrapi } from "@models/api";

interface IPostsPageInfoResponse {
  data: {
    posts: {
      data: IPostStrapi[];
    };
  };
}

export async function getNewsPageInfo(locale?: string) {
  const { data }: IPostsPageInfoResponse = await fetchAPI(
    `
    query GetNewsPageInfo($locale: I18NLocaleCode) {
      posts(locale: $locale) {
        data {
          id
          attributes {
            title
            postType
            shortDescription
            slug
            description
            eventDate
            createdAt
            image {
              data {
                id
                attributes {
                  url
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
    posts: data?.posts?.data.map((post) => {
      return {
        id: post.id,
        title: post.attributes.title,
        slug: post.attributes.slug,
        postType: post.attributes.postType,
        shortDescription: post.attributes.shortDescription,
        description: post.attributes.description,
        image: post.attributes.image.data.attributes,
        eventDate: post.attributes.eventDate,
        createdAt: post.attributes.createdAt,
      };
    }),
  };

  return transformedResponse;
}

interface IPostSinglePageInfoResponse {
  data: IPostStrapi;
}

export async function getSinglePostPage(slug?: string | string[]) {
  const { data }: IPostSinglePageInfoResponse = await fetchAPI(
    `
    query GetSinglePostPage($locale: I18NLocaleCode) {
      post(filters: { slug: { eq: $slug }}) {
        data {
          id
          attributes {
            title
            postType
            shortDescription
            slug
            description
            createdAt
            eventDate
            image {
              data {
                id
                attributes {
                  url
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
        slug: slug,
      },
    }
  );

  if (isNil(data)) return;

  const transformedResponse = {
    post: {
      id: data.id,
      title: data.attributes.title,
      slug: data.attributes.slug,
      image: data.attributes.image.data.attributes,
      description: data.attributes.description,
      createdAt: data.attributes.createdAt,
      eventDate: data.attributes.eventDate,
      postType: data.attributes.postType,
    },
  };

  return transformedResponse;
}
