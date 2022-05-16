import { graphql } from "msw";

export const getWelcomePageInfo = graphql.query(
  "GetWelcomePageInfo",
  (req, res, ctx) => {
    return res(
      ctx.data({
        data: {
          welcome: {
            data: {
              attributes: {
                title: "МУЗЕЙНЫЙ КОМПЛЕКС ВОЕННОЙ И ГРАЖДАНСКОЙ ТЕХНИКИ",
                image: {
                  data: {
                    attributes: {
                      url: "/uploads/war_17940875de.jpeg",
                    },
                  },
                },
                description: "Описание",
              },
            },
          },
          museums: {
            data: [
              {
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
                },
              },
              {
                id: "611d5e04afbd6d3deda434f4",
                attributes: {
                  title: "Музей автомобильной техники",
                  slug: "muzei-avtomobilnoi-tekhniki",
                  cardImage: {
                    data: {
                      attributes: {
                        url: "/uploads/BMW_Dixi_paint_copy3_2_e8d388c0e9.jpg",
                      },
                    },
                  },
                },
              },
              {
                id: "611d5dbaafbd6d3deda434ee",
                attributes: {
                  title: 'Музей "Крылья победы"',
                  slug: 'muzei-"krilya-pobedi"',
                  cardImage: {
                    data: {
                      attributes: {
                        url: "/uploads/avia_43fd98adb1.jpeg",
                      },
                    },
                  },
                },
              },
              {
                id: "611d5d58afbd6d3deda434e5",
                attributes: {
                  title: "Парадный расчёт",
                  slug: "paradnii-raschyot",
                  cardImage: {
                    data: {
                      attributes: {
                        url: "/uploads/parad_1454c354e9.jpeg",
                      },
                    },
                  },
                },
              },
              {
                id: "611d5bd3afbd6d3deda434d9",
                attributes: {
                  title: "Открытая площадка",
                  slug: "otkritaya-ploshchadka",
                  cardImage: {
                    data: {
                      attributes: {
                        url: "/uploads/openspace_e59a6a4552.jpeg",
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
