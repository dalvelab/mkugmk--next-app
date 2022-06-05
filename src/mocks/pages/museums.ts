import { graphql } from "msw";

export const getSingleMuseumPage = graphql.query(
  "GetSingleMuseumPage",
  (req, res, ctx) => {
    return res(
      ctx.data({
        data: {
          id: "611d5e4aafbd6d3deda434f8",
          attributes: {
            title: "Музей военной техники",
            slug: "muzei-voennoi-tekhniki",
            cardImage: {
              data: {
                attributes: {
                  url: "/uploads/war_17940875de.jpeg",
                },
              },
            },
            headerImage: {
              data: {
                attributes: {
                  url: "/uploads/large_19_06_10_27_09_bb793f09a4.jpg",
                },
              },
            },
            description: "Большое описание",
            gallery: {
              data: [
                {
                  id: "1",
                  attributes: {
                    url: "/uploads/war_17940875de.jpeg",
                  },
                },
              ],
            },
          },
        },
      })
    );
  }
);
