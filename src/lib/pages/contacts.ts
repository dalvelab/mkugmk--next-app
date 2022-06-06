import { fetchAPI } from "../api";

import { IMuseumStrapi, IContactStrapi } from "@models/api";
import { weekDaysShortEn } from "@models/common";

interface IContactsPageInfoResponse {
  data: {
    contact: {
      attributes: {
        contact: IContactStrapi[];
      };
    };
    museums: {
      data: IMuseumStrapi[];
    };
  };
}

export async function getContactsPageInfo(locale?: string) {
  const { data }: IContactsPageInfoResponse = await fetchAPI(
    `
    query GetContactsPageInfo($locale: I18NLocaleCode) {
      contact(locale: $locale) {
        data {
          attributes {
            contact {
              id
              segment
              phone
              name
              email
            }
          }
        }
      }
      museums(locale: $locale) {
        data {
          attributes {
            title
            openingHours {
              id
              weekDay
              isClosed
              timeOpen
              timeClose
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
    contacts: data.contact.attributes.contact.map((contact) => {
      return {
        id: contact.id,
        name: contact.name,
        segment: contact.segment,
        email: contact.email,
        phone: contact.phone,
      };
    }),
    museums: data.museums.data.map((museum) => {
      return {
        id: museum.id,
        title: museum.attributes.title,
        openingHours: museum.attributes.openingHours.map((day) => {
          return {
            ...day,
            dayIndex: weekDaysShortEn.indexOf(day.weekDay),
          };
        }),
      };
    }),
  };

  return transformedResponse;
}
