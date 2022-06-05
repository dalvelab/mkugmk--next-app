import { graphql } from "msw";

export const getContactsPageInfo = graphql.query(
  "GetContactsPageInfo",
  (req, res, ctx) => {
    return res(
      ctx.data({
        data: {
          contact: {
            attributes: {
              contact: [
                {
                  id: "1",
                  segment: "Общие вопросы",
                  phone: "+7(343-68)46784",
                  name: "Голосовое меню",
                  email: "mk@mkugmk.ru",
                },
                {
                  id: "2",
                  segment: "Вопросы сотрудничества",
                  phone: "+7(343-68)4-67-84",
                  name: "Шустов Алексей Сергеевич",
                  email: "mk@mkugmk.ru",
                },
              ],
            },
          },
          museums: {
            data: [
              {
                id: "611d5e4aafbd6d3deda434f8",
                attributes: {
                  title: "Музей военной техники",
                  openingHours: [
                    {
                      id: "1",
                      weekDay: "mon",
                      isClosed: true,
                      timeOpen: "10:00:00.000",
                      timeClose: "19:00:00.000",
                    },
                    {
                      id: "2",
                      weekDay: "tue",
                      isClosed: false,
                      timeOpen: "10:00:00.000",
                      timeClose: "19:00:00.000",
                    },
                    {
                      id: "3",
                      weekDay: "wed",
                      isClosed: false,
                      timeOpen: "10:00:00.000",
                      timeClose: "19:00:00.000",
                    },
                    {
                      id: "4",
                      weekDay: "thu",
                      isClosed: false,
                      timeOpen: "10:00:00.000",
                      timeClose: "19:00:00.000",
                    },
                    {
                      id: "5",
                      weekDay: "fri",
                      isClosed: false,
                      timeOpen: "10:00:00.000",
                      timeClose: "19:00:00.000",
                    },
                    {
                      id: "6",
                      weekDay: "sat",
                      isClosed: false,
                      timeOpen: "10:00:00.000",
                      timeClose: "19:00:00.000",
                    },
                    {
                      id: "7",
                      weekDay: "sun",
                      isClosed: false,
                      timeOpen: "10:00:00.000",
                      timeClose: "19:00:00.000",
                    },
                  ],
                },
              },
              {
                id: "611d5e04afbd6d3deda434f4",
                attributes: {
                  title: "Музей автомобильной техники",
                  openingHours: [
                    {
                      id: "1",
                      weekDay: "mon",
                      isClosed: true,
                      timeOpen: "10:00:00.000",
                      timeClose: "19:00:00.000",
                    },
                    {
                      id: "2",
                      weekDay: "tue",
                      isClosed: false,
                      timeOpen: "10:00:00.000",
                      timeClose: "19:00:00.000",
                    },
                    {
                      id: "3",
                      weekDay: "wed",
                      isClosed: false,
                      timeOpen: "10:00:00.000",
                      timeClose: "19:00:00.000",
                    },
                    {
                      id: "4",
                      weekDay: "thu",
                      isClosed: false,
                      timeOpen: "10:00:00.000",
                      timeClose: "19:00:00.000",
                    },
                    {
                      id: "5",
                      weekDay: "fri",
                      isClosed: false,
                      timeOpen: "10:00:00.000",
                      timeClose: "19:00:00.000",
                    },
                    {
                      id: "6",
                      weekDay: "sat",
                      isClosed: false,
                      timeOpen: "10:00:00.000",
                      timeClose: "19:00:00.000",
                    },
                    {
                      id: "7",
                      weekDay: "sun",
                      isClosed: false,
                      timeOpen: "10:00:00.000",
                      timeClose: "19:00:00.000",
                    },
                  ],
                },
              },
            ],
          },
        },
      })
    );
  }
);
