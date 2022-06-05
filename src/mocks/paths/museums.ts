import { graphql } from "msw";

export const getMuseumsStaticPaths = graphql.query(
  "GetMuseumsStaticPaths",
  (req, res, ctx) => {
    return res(
      ctx.data({
        data: {
          museums: {
            data: [
              {
                attributes: {
                  title: "Музей военной техники",
                  slug: "muzei-voennoi-tekhniki",
                },
              },
            ],
          },
        },
      })
    );
  }
);
