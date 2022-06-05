import { graphql } from "msw";

export const getPostsStaticPaths = graphql.query(
  "GetPostsStaticPaths",
  (req, res, ctx) => {
    return res(
      ctx.data({
        data: {
          posts: {
            data: [
              {
                attributes: {
                  title: "ВЦ 'Парадный расчет' вновь готов принимать гостей",
                  slug: "muzeinii-kompleks-pozdravlyaet-s-nastupayushchim-novim-godom-8-1-2022-test",
                },
              },
            ],
          },
        },
      })
    );
  }
);
