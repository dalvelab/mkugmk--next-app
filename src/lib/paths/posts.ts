import { fetchAPI } from "../api";

export async function getPostsStaticPaths() {
  interface IPostsStaticPaths {
    data: {
      posts: {
        data: [
          {
            attributes: {
              title: string;
              slug: string;
            };
          }
        ];
      };
    };
  }

  const { data }: IPostsStaticPaths = await fetchAPI(`
    query GetPostsStaticPaths {
      posts {
        data {
          attributes {
            title
            slug
          }
        }
      }
    }
  `);

  return data.posts;
}
