import { graphql } from "msw";

export const museumHandlers = [
  graphql.query("AllMuseums", (req, res, ctx) => {
    return res(
      ctx.data({
        museums: [
          {
            id: "611d5e4aafbd6d3deda434f8",
            title: "Музей военной техники",
            slug: "muzei-voennoi-tekhniki",
            image: {
              url: "/uploads/war_17940875de.jpeg",
            },
          },
          {
            id: "611d5e04afbd6d3deda434f4",
            title: "Музей автомобильной техники",
            slug: "muzei-avtomobilnoi-tekhniki",
            image: {
              url: "/uploads/BMW_Dixi_paint_copy3_2_e8d388c0e9.jpg",
            },
          },
          {
            id: "611d5dbaafbd6d3deda434ee",
            title: "Музей автомобильной техники",
            slug: "muzei-avtomobilnoi-tekhniki",
            image: {
              url: "/uploads/BMW_Dixi_paint_copy3_2_e8d388c0e9.jpg",
            },
          },
          {
            id: "611d5dbaafbd6d3deda434ee",
            title: 'Музей "Крылья победы"',
            slug: 'muzei-"krilya-pobedi"',
            image: {
              url: "/uploads/avia_43fd98adb1.jpeg",
            },
          },
          {
            id: "611d5d58afbd6d3deda434e5",
            title: "Парадный расчёт",
            slug: "paradnii-raschyot",
            image: {
              url: "/uploads/parad_1454c354e9.jpeg",
            },
          },
          {
            id: "611d5bd3afbd6d3deda434d9",
            title: "Открытая площадка",
            slug: "otkritaya-ploshchadka",
            image: {
              url: "/uploads/openspace_e59a6a4552.jpeg",
            },
          },
        ],
      })
    );
  }),
  graphql.query("MuseumsLinks", (req, res, ctx) => {
    return res(
      ctx.data({
        museums: [
          {
            id: "611d5bd3afbd6d3deda434d9",
            title: "Музей военной техники",
            slug: "muzei-voennoi-tekhniki",
          },
          {
            id: "611d5e04afbd6d3deda434f4",
            title: "Музей автомобильной техники",
            slug: "muzei-avtomobilnoi-tekhniki",
          },
          {
            id: "611d5dbaafbd6d3deda434ee",
            title: "Музей автомобильной техники",
            slug: "muzei-avtomobilnoi-tekhniki",
          },
          {
            id: "611d5dbaafbd6d3deda434ee",
            title: 'Музей "Крылья победы"',
            slug: 'muzei-"krilya-pobedi"',
          },
          {
            id: "611d5d58afbd6d3deda434e5",
            title: "Парадный расчёт",
            slug: "paradnii-raschyot",
          },
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
