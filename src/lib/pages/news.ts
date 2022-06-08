import { head, isNil } from "ramda";

import { fetchAPI } from "../api";

import { IPostStrapi } from "@models/api";

interface IPostsPageInfoResponse {
  posts: {
    data: IPostStrapi[];
  };
}

export async function getNewsPageInfo(locale?: string) {
  const { posts }: IPostsPageInfoResponse = await fetchAPI(
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
    posts: posts.data.map((post) => {
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
  posts: {
    data: IPostStrapi[];
  };
}

export async function getSinglePostPage(slug?: string | string[]) {
  const { posts }: IPostSinglePageInfoResponse = await fetchAPI(
    `
    query GetSinglePostPage($slug: String) {
      posts(filters: { slug: { eq: $slug }}) {
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

  console.log(posts);

  const post = head(posts.data);

  if (isNil(post)) {
    return null;
  }

  const transformedResponse = {
    post: {
      id: post.id,
      title: post.attributes.title,
      slug: post.attributes.slug,
      image: post.attributes.image.data.attributes,
      description: post.attributes.description,
      createdAt: post.attributes.createdAt,
      eventDate: post.attributes.eventDate,
      postType: post.attributes.postType,
    },
  };

  return transformedResponse;
}
