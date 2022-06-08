import { fetchAPI } from "../api";

import { IMuseumStrapi, IContactStrapi } from "@models/api";
import { weekDaysShortEn } from "@models/common";

interface IContactsPageInfoResponse {
  contact: {
    data: {
      attributes: {
        contact: IContactStrapi[];
      };
    };
  };
  museums: {
    data: IMuseumStrapi[];
  };
}

export async function getContactsPageInfo(locale?: string) {
  const { contact, museums }: IContactsPageInfoResponse = await fetchAPI(
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
          id
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
    contacts: contact.data.attributes.contact.map((contact) => {
      console.log(contact);
      return {
        id: contact.id,
        name: contact.name,
        segment: contact.segment,
        email: contact.email,
        phone: contact.phone,
      };
    }),
    museums: museums.data.map((museum) => {
      console.log(museum);
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
