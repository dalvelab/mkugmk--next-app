import { graphql } from "msw";

interface GraphQLRequest {
  query: string;
  variables?: Record<string, any>;
}

export const handlers = [
  graphql.query("AllMuseums", (req, res, ctx) => {
    return res(
      ctx.data({
        museums: [
          {
            id: "611d5bd3afbd6d3deda434d9",
            title: "Открытая площадка",
            slug: "otkritaya-ploshchadka",
          },
        ],
      })
    );
  }),
];
