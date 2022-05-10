import { graphql } from "msw";

export const museumHandlers = [
  graphql.query("AllMuseums", (req, res, ctx) => {
    return res(
      ctx.data({
        museums: [
          {
            id: "611d5bd3afbd6d3deda434d9",
            title: "Открытая площадка",
            slug: "otkritaya-ploshchadka",
            image: {
              url: "/uploads/avia_elka_5ef13b0ba3.jpg",
            },
          },
        ],
      })
    );
  }),
];
