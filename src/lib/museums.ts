import { fetchAPI } from "./api";

export async function getMuseumLinks(locale?: string) {
  const data = await fetchAPI(
    `
    query MuseumsLinks($locale: String) {
        museums(locale: $locale) {  
          id
          title
          slug
        }
      }
  `,
    {
      variables: {
        locale,
      },
    }
  );
  return data?.museums;
}

export async function getSingleMuseum(
  slug?: string | string[],
  locale?: string
) {
  const data = await fetchAPI(
    `
    query Museums($where: JSON, $locale: String) {
        museums(where: $where, locale: $locale) {  
          title,
          slug,
          image {
            url
          },
          headerImage {
            url
          },
          description,
          museumType
        }
      }
  `,
    {
      variables: {
        where: { slug },
        locale,
      },
    }
  );
  return data;
}

export async function getSingleMuseumGallery(
  slug?: string | string[],
  locale?: string
) {
  const data = await fetchAPI(
    `
    query SingleMuseumGallery($where: JSON, $locale: String) {
        museums(where: $where, locale: $locale) {  
          gallery {
            url
          }
        }
      }
  `,
    {
      variables: {
        where: { slug },
        locale,
      },
    }
  );
  return data.museums[0].gallery;
}
