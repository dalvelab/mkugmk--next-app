import { graphql } from "msw";

import { PostType } from "@models/main";
import { IWelcomePageInfoResponse } from "@models/api";

export const getWelcomePageInfo = graphql.query<IWelcomePageInfoResponse>(
  "GetWelcomePageInfo",
  (req, res, ctx) => {
    return res(
      ctx.data({
        welcome: {
          data: {
            attributes: {
              title: "МУЗЕЙНЫЙ КОМПЛЕКС ВОЕННОЙ И ГРАЖДАНСКОЙ ТЕХНИКИ",
              media: {
                data: {
                  attributes: {
                    url: "/uploads/masthead_bg_a4faf4a0a4.mp4?updated_at=2022-05-25T17:18:10.001Z",
                  },
                },
              },
              description: `Музейный комплекс военной и гражданской техники в городе Верхняя Пышма Свердловской области (пригороде Екатеринбурга), основанный в 2006 году, на сегодня является одним из крупнейших в мире военно-технических музеев.\n\nВ составе музейного комплекса работает открытая площадка и четыре выставочных центра – музей военной техники, музей автомобильной техники, Парадный расчёт, музей авиации «Крылья Победы», на которых суммарно расположено более 1000 образцов техники.`,
            },
          },
        },
        posts: {
          data: [
            {
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
                description: "",
              },
            },
            {
              id: "2",
              attributes: {
                title: "Новость-1",
                postType: PostType.NEWS,
                slug: "muzeinii-kompleks-pozdravlyaet-s-nastupayushchim-novim-godom-8-1-2022",
                shortDescription:
                  "Короткое описание на три строчки максимум, если будет больше то контент будет обрезаться тремя точками",
                eventDate: "",
                createdAt: "2022-05-30T19:00:00",
                image: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/large_19_06_10_27_09_bb793f09a4.jpg",
                    },
                  },
                },
                description: "",
              },
            },
            {
              id: "3",
              attributes: {
                title: "Новость-2",
                postType: PostType.NEWS,
                slug: "muzeinii-kompleks-pozdravlyaet-s-nastupayushchim-novim-godom-8-1-2022",
                shortDescription:
                  "Короткое описание на три строчки максимум, если будет больше то контент будет обрезаться тремя точками",
                eventDate: "",
                createdAt: "2022-04-30T19:00:00",
                image: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/war_17940875de.jpeg",
                    },
                  },
                },
                description: "",
              },
            },
            {
              id: "4",
              attributes: {
                title: "Новость-3",
                postType: PostType.NEWS,
                slug: "muzeinii-kompleks-pozdravlyaet-s-nastupayushchim-novim-godom-8-1-2022",
                shortDescription:
                  "Короткое описание на три строчки максимум, если будет больше то контент будет обрезаться тремя точками",
                eventDate: "",
                createdAt: "2022-05-30T19:00:00",
                image: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/war_17940875de.jpeg",
                    },
                  },
                },
                description: "",
              },
            },
            {
              id: "5",
              attributes: {
                title: "Новость-4",
                postType: PostType.NEWS,
                slug: "muzeinii-kompleks-pozdravlyaet-s-nastupayushchim-novim-godom-8-1-2022",
                shortDescription:
                  "Короткое описание на три строчки максимум, если будет больше то контент будет обрезаться тремя точками",
                eventDate: "",
                createdAt: "2022-05-30T19:00:00",
                image: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/war_17940875de.jpeg",
                    },
                  },
                },
                description: "",
              },
            },
            {
              id: "6",
              attributes: {
                title: "Новость-5",
                postType: PostType.NEWS,
                slug: "muzeinii-kompleks-pozdravlyaet-s-nastupayushchim-novim-godom-8-1-2022",
                shortDescription:
                  "Короткое описание на три строчки максимум, если будет больше то контент будет обрезаться тремя точками",
                eventDate: "",
                createdAt: "2022-05-30T19:00:00",
                image: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/war_17940875de.jpeg",
                    },
                  },
                },
                description: "",
              },
            },
            {
              id: "7",
              attributes: {
                title: "Новость-6",
                postType: PostType.NEWS,
                slug: "muzeinii-kompleks-pozdravlyaet-s-nastupayushchim-novim-godom-8-1-2022",
                shortDescription:
                  "Короткое описание на три строчки максимум, если будет больше то контент будет обрезаться тремя точками",
                eventDate: "",
                createdAt: "2022-05-30T19:00:00",
                image: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/war_17940875de.jpeg",
                    },
                  },
                },
                description: "",
              },
            },
          ],
        },
        museums: {
          data: [
            {
              id: "611d5e4aafbd6d3deda434f8",
              attributes: {
                title: "Музей военной техники",
                slug: "muzei-voennoi-tekhniki",
                description: "",
                isTickets: true,
                cardImage: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/war_17940875de.jpeg",
                    },
                  },
                },
                headerImage: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/masthead_bg_a4faf4a0a4.mp4?updated_at=2022-05-25T17:18:10.001Z",
                    },
                  },
                },
                gallery: {
                  data: [
                    {
                      id: "1",
                      attributes: {
                        id: "1",
                        url: "/uploads/war_17940875de.jpeg",
                      },
                    },
                  ],
                },
                openingHours: [
                  {
                    id: "1",
                    dayIndex: 1,
                    weekDay: "mon",
                    isClosed: true,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "2",
                    dayIndex: 2,
                    weekDay: "tue",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "3",
                    dayIndex: 3,
                    weekDay: "wed",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "4",
                    dayIndex: 4,
                    weekDay: "thu",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "5",
                    dayIndex: 5,
                    weekDay: "fri",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "6",
                    dayIndex: 6,
                    weekDay: "sat",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "7",
                    dayIndex: 0,
                    weekDay: "sun",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                ],
                tags: "авто, тест",
              },
            },
            {
              id: "611d5e04afbd6d3deda434f4",
              attributes: {
                title: "Музей автомобильной техники",
                slug: "muzei-avtomobilnoi-tekhniki",
                description: "",
                isTickets: true,
                cardImage: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/BMW_Dixi_paint_copy3_2_e8d388c0e9.jpg",
                    },
                  },
                },
                headerImage: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/masthead_bg_a4faf4a0a4.mp4?updated_at=2022-05-25T17:18:10.001Z",
                    },
                  },
                },
                gallery: {
                  data: [
                    {
                      id: "1",
                      attributes: {
                        id: "1",
                        url: "/uploads/BMW_Dixi_paint_copy3_2_e8d388c0e9.jpg",
                      },
                    },
                  ],
                },
                openingHours: [
                  {
                    id: "1",
                    dayIndex: 1,
                    weekDay: "mon",
                    isClosed: true,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "2",
                    dayIndex: 2,
                    weekDay: "tue",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "3",
                    dayIndex: 3,
                    weekDay: "wed",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "4",
                    dayIndex: 4,
                    weekDay: "thu",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "5",
                    dayIndex: 5,
                    weekDay: "fri",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "6",
                    dayIndex: 6,
                    weekDay: "sat",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "7",
                    dayIndex: 0,
                    weekDay: "sun",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                ],
                tags: "авто, тест",
              },
            },
            {
              id: "611d5dbaafbd6d3deda434ee",
              attributes: {
                title: 'Музей "Крылья победы"',
                slug: 'muzei-"krilya-pobedi"',
                description: "",
                isTickets: true,
                cardImage: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/avia_43fd98adb1.jpeg",
                    },
                  },
                },
                headerImage: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/masthead_bg_a4faf4a0a4.mp4?updated_at=2022-05-25T17:18:10.001Z",
                    },
                  },
                },
                gallery: {
                  data: [
                    {
                      id: "1",
                      attributes: {
                        id: "1",
                        url: "/uploads/avia_43fd98adb1.jpeg",
                      },
                    },
                  ],
                },
                openingHours: [
                  {
                    id: "1",
                    dayIndex: 1,
                    weekDay: "mon",
                    isClosed: true,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "2",
                    dayIndex: 2,
                    weekDay: "tue",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "3",
                    dayIndex: 3,
                    weekDay: "wed",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "4",
                    dayIndex: 4,
                    weekDay: "thu",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "5",
                    dayIndex: 5,
                    weekDay: "fri",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "6",
                    dayIndex: 6,
                    weekDay: "sat",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "7",
                    dayIndex: 0,
                    weekDay: "sun",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                ],
                tags: "авто, тест",
              },
            },
            {
              id: "611d5d58afbd6d3deda434e5",
              attributes: {
                title: "Парадный расчёт",
                slug: "paradnii-raschyot",
                description: "",
                isTickets: true,
                cardImage: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/parad_1454c354e9.jpeg",
                    },
                  },
                },
                headerImage: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/masthead_bg_a4faf4a0a4.mp4?updated_at=2022-05-25T17:18:10.001Z",
                    },
                  },
                },
                gallery: {
                  data: [
                    {
                      id: "1",
                      attributes: {
                        id: "1",
                        url: "/uploads/parad_1454c354e9.jpeg",
                      },
                    },
                  ],
                },
                openingHours: [
                  {
                    id: "1",
                    dayIndex: 1,
                    weekDay: "mon",
                    isClosed: true,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "2",
                    dayIndex: 2,
                    weekDay: "tue",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "3",
                    dayIndex: 3,
                    weekDay: "wed",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "4",
                    dayIndex: 4,
                    weekDay: "thu",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "5",
                    dayIndex: 5,
                    weekDay: "fri",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "6",
                    dayIndex: 6,
                    weekDay: "sat",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "7",
                    dayIndex: 0,
                    weekDay: "sun",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                ],
                tags: "авто, тест",
              },
            },
            {
              id: "611d5bd3afbd6d3deda434d9",
              attributes: {
                title: "Открытая площадка",
                slug: "otkritaya-ploshchadka",
                description: "",
                isTickets: false,
                cardImage: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/openspace_e59a6a4552.jpeg",
                    },
                  },
                },
                headerImage: {
                  data: {
                    attributes: {
                      id: "1",
                      url: "/uploads/masthead_bg_a4faf4a0a4.mp4?updated_at=2022-05-25T17:18:10.001Z",
                    },
                  },
                },
                gallery: {
                  data: [
                    {
                      id: "1",
                      attributes: {
                        id: "1",
                        url: "/uploads/openspace_e59a6a4552.jpeg",
                      },
                    },
                  ],
                },
                openingHours: [
                  {
                    id: "1",
                    dayIndex: 1,
                    weekDay: "mon",
                    isClosed: true,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "2",
                    dayIndex: 2,
                    weekDay: "tue",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "3",
                    dayIndex: 3,
                    weekDay: "wed",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "4",
                    dayIndex: 4,
                    weekDay: "thu",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "5",
                    dayIndex: 5,
                    weekDay: "fri",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "6",
                    dayIndex: 6,
                    weekDay: "sat",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                  {
                    id: "7",
                    dayIndex: 0,
                    weekDay: "sun",
                    isClosed: false,
                    timeOpen: "10:00:00.000",
                    timeClose: "19:00:00.000",
                  },
                ],
                tags: "авто, тест",
              },
            },
          ],
        },
      })
    );
  }
);
