import { graphql } from "msw";

export const getGalleryPage = graphql.query(
  "GetGalleryPage",
  (req, res, ctx) => {
    return res(
      ctx.data({
        data: {
          museums: {
            data: [
              {
                id: "611d5e4aafbd6d3deda434f8",
                attributes: {
                  title: "Музей военной техники",
                  slug: "muzei-voennoi-tekhniki",
                  description: "",
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
        },
      })
    );
  }
);
