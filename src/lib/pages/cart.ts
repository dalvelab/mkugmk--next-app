import { fetchAPI } from "../api";

import { ICartPageResponse } from "@models/api";

export async function getCartPage(locale?: string) {
  const { museums, ticket }: ICartPageResponse = await fetchAPI(
    `
    query GetCartPage($locale: I18NLocaleCode) {
      museums(locale: $locale, sort: "createdAt:desc") {  
        data {
          id
          attributes {
            title
            isTickets
            cardImage {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
      ticket(locale: $locale) {
        data {
          attributes {
            ticket {
              id
              title
              link
              museum {
                data {
                  id
                  attributes {
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        locale,
      },
    }
  );

  const transformedResponse = {
    museums: museums.data.map((museum) => {
      return {
        id: museum.id,
        title: museum.attributes.title,
        isTickets: museum.attributes.isTickets,
        cardImage: museum.attributes.cardImage.data.attributes,
      };
    }),
    tickets: ticket.data.attributes.ticket.map((ticket) => {
      return {
        id: ticket.id,
        link: ticket.link,
        museum: ticket.museum.data.map((museum) => {
          return {
            id: museum.id,
            title: museum.attributes.title,
          };
        }),
        ticketId: ticket.museum.data.map((museum) => museum.id),
      };
    }),
  };

  return transformedResponse;
}
