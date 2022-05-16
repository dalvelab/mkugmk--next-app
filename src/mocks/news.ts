import { graphql } from "msw";

export const newsHandlers = [
  graphql.query("NewsForHome", (req, res, ctx) => {
    return res(
      ctx.data({
        news: [
          {
            id: "123456789",
            postType: "news",
            title: "Новость 1",
            slug: "novost-1-561",
            image: {
              url: "/uploads/war_17940875de.jpeg",
            },
            eventDate: new Date("12-05-2022"),
            createAt: new Date("12-05-2022"),
            shortDescription: "Короткое описание",
          },
        ],
      })
    );
  }),
];
