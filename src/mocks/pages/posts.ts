import { graphql } from "msw";

import { PostType } from "@models/main";

export const getPostsPageInfo = graphql.query(
  "GetNewsPageInfo",
  (req, res, ctx) => {
    return res(
      ctx.data({
        data: {
          posts: {
            data: [
              {
                id: "1",
                attributes: {
                  title: "ВЦ 'Парадный расчет' вновь готов принимать гостей",
                  postType: "event",
                  slug: "muzeinii-kompleks-pozdravlyaet-s-nastupayushchim-novim-godom-8-1-2022-test",
                  shortDescription:
                    "Короткое описание на три строчки максимум, если будет больше то контент будет обрезаться тремя точками",
                  description: "",
                  eventDate: "2022-05-30T03:24:00",
                  createdAt: new Date(),
                  image: {
                    data: {
                      id: "1",
                      attributes: {
                        url: "/uploads/small_6_Jbhb39xa_As_5eb926e4b4.jpg",
                      },
                    },
                  },
                },
              },
              {
                id: "2",
                attributes: {
                  title: "Новость-1",
                  postType: "news",
                  slug: "muzeinii-kompleks-pozdravlyaet-s-nastupayushchim-novim-godom-8-1-2022",
                  shortDescription:
                    "Короткое описание на три строчки максимум, если будет больше то контент будет обрезаться тремя точками",
                  description: "",
                  eventDate: "",
                  createdAt: new Date(),
                  image: {
                    data: {
                      id: "1",
                      attributes: {
                        url: "/uploads/large_19_06_10_27_09_bb793f09a4.jpg",
                      },
                    },
                  },
                },
              },
              {
                id: "3",
                attributes: {
                  title: "Новость-2",
                  postType: "news",
                  slug: "muzeinii-kompleks-pozdravlyaet-s-nastupayushchim-novim-godom-8-1-2022",
                  shortDescription:
                    "Короткое описание на три строчки максимум, если будет больше то контент будет обрезаться тремя точками",
                  description: "",
                  eventDate: "",
                  createdAt: new Date(),
                  image: {
                    data: {
                      id: "1",
                      attributes: {
                        url: "/uploads/war_17940875de.jpeg",
                      },
                    },
                  },
                },
              },
              {
                id: "4",
                attributes: {
                  title: "Новость-3",
                  postType: "news",
                  slug: "muzeinii-kompleks-pozdravlyaet-s-nastupayushchim-novim-godom-8-1-2022",
                  shortDescription:
                    "Короткое описание на три строчки максимум, если будет больше то контент будет обрезаться тремя точками",
                  description: "",
                  eventDate: "",
                  createdAt: new Date(),
                  image: {
                    data: {
                      id: "1",
                      attributes: {
                        url: "/uploads/war_17940875de.jpeg",
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      })
    );
  }
);

export const getSinglePostPage = graphql.query(
  "GetSinglePostPage",
  (req, res, ctx) => {
    return res(
      ctx.data({
        data: {
          id: "1",
          attributes: {
            title: "ВЦ 'Парадный расчет' вновь готов принимать гостей",
            postType: PostType.EVENT,
            slug: "muzeinii-kompleks-pozdravlyaet-s-nastupayushchim-novim-godom-8-1-2022-test",
            shortDescription:
              "Короткое описание на три строчки максимум, если будет больше то контент будет обрезаться тремя точками",
            eventDate: "2022-06-30T19:00:00",
            createdAt: "2022-05-30T19:00:00",
            image: {
              data: {
                attributes: {
                  id: "1",
                  url: "/uploads/small_6_Jbhb39xa_As_5eb926e4b4.jpg",
                },
              },
            },
            description: "Текст новости",
          },
        },
      })
    );
  }
);
