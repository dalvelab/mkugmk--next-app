import { fetchAPI } from "../api";

export async function getMuseumsStaticPaths() {
  interface IMuseumsStaticPaths {
    data: {
      museums: {
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

  const { data }: IMuseumsStaticPaths = await fetchAPI(`
    query GetMuseumsStaticPaths {
      museums {
        data {
          attributes {
            title
            slug
          }
        }
      }
    }
  `);

  return data?.museums;
}
