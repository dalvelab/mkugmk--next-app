import { graphql } from "msw";

export const museumHandlers = [
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
