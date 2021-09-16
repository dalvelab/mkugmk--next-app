import { API_URL } from "./constants";

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Ошибка при запросе к API");
  }

  return json.data;
}

// GET STATIC PATHS

export async function getAllMuseumsWithSlug() {
  const data = fetchAPI(`
    {
      museums {
        slug
      }
    }
  `);
  return data?.allMuseums;
}

export async function getAllEventsWithSlug() {
  const data = fetchAPI(`
    {
      events {
        slug
      }
    }
  `);
  return data?.allEvents;
}

export async function getAllNewsWithSlug() {
  const data = fetchAPI(`
    {
      posts {
        slug
      }
    }
  `);
  return data?.allPosts;
}

// NAVIGATION REQUEST

export async function getMuseumLinks(locale) {
  const data = await fetchAPI(
    `
    query Museums($locale: String) {
        museums(locale: $locale) {  
          title,
          slug,
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

// WELCOME PAGE REQUESTS

export async function getAllMuseumsForHome(locale) {
  const data = await fetchAPI(
    `
    query Museums($locale: String) {
        museums(locale: $locale, sort: "createdAt:desc") {  
          title,
          slug,
          shortDescription,
          image {
            url
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
  return data?.museums;
}

export async function getEventsForHome(locale) {
  const data = await fetchAPI(
    `
    query Events($locale: String) {
      events(locale: $locale, limit: 4, sort: "createdAt:desc") {
        title,
        slug,
        shortDescription,
        image {
          url
        },
        date
      }
    }
  `,
    {
      variables: {
        locale,
      },
    }
  );
  return data?.events;
}

export async function getNewsForHome(locale) {
  const data = await fetchAPI(
    `
    query News($locale: String) {
      posts(locale: $locale, limit: 5, sort: "createdAt:desc") {
        title,
        slug,
        image {
          url
        },
        createdAt
        shortDescription,
        tag {
          title
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
  return data?.posts;
}

export async function getGalleryForHome() {
  const data = await fetchAPI(
    `
    {
      museums {
        gallery {
          url
        }
      }
    }
  `
  );
  return data?.museums;
}

// HEADING SECTION REQUESTS
export async function getHoursForHeading() {
  const data = await fetchAPI(
    `
    query {
      hours {
        workingHoursMuseum {
          day
          timeOpen
          timeClose
          isWeekend
        }
        workingHoursOutdoor {
          day
          timeOpen
          timeClose
          isWeekend
        }
      }
    }
  `
  );
  return data?.hours;
}

// SINGLE MUSEUMS PAGE REQUESTS
export async function getSingleMuseum(slug, locale) {
  const data = await fetchAPI(
    `
    query Museums($where: JSON, $locale: String) {
        museums(where: $where, locale: $locale) {  
          title,
          slug,
          shortDescription,
          image {
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

export async function getSingleMuseumGallery(slug, locale) {
  const data = await fetchAPI(
    `
    query Museums($where: JSON, $locale: String) {
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

// NAVIGATION REQUESTS
export async function getMuseumLinksForNavigation() {
  const data = await fetchAPI(
    `
    {
      museums {
        title,
        slug
      }
    }
  `
  );
  return data?.museums;
}

// EVENTS PAGE REQUEST
export async function getAllEvents(locale) {
  const data = await fetchAPI(
    `
    query Events($locale: String) {
        events(locale: $locale, sort: "createdAt:desc") {  
          title,
          slug,
          shortDescription,
          image {
            url
          }
          date
        }
      }
  `,
    {
      variables: {
        locale,
      },
    }
  );
  return data?.events;
}

// SINGLE EVENT PAGE REQUEST
export async function getSingleEvent(slug, locale) {
  const data = await fetchAPI(
    `
    query Event($where: JSON, $locale: String) {
        events(where: $where, locale: $locale) {  
          title,
          slug,
          shortDescription,
          image {
            url
          },
          description,
          date
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

// NEWS PAGE REQUEST
export async function getAllNews(locale) {
  const data = await fetchAPI(
    `
    query News($locale: String) {
      posts(locale: $locale, sort: "createdAt:desc") {
        title,
        slug,
        image {
          url
        },
        createdAt
        shortDescription,
        tag {
          title
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
  return data?.posts;
}

// SINGLE EVENT PAGE REQUEST
export async function getSingleNews(slug, locale) {
  const data = await fetchAPI(
    `
    query News($where: JSON, $locale: String) {
        posts(where: $where, locale: $locale) {  
          title,
          slug,
          shortDescription,
          image {
            url
          },
          createdAt,
          description,
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

// GALLERY PAGE REQUEST
export async function getAllGallery() {
  const data = await fetchAPI(
    `
    query GalleryAll {
        museums {  
          gallery {
            url
          }
        }
      }
  `
  );
  return data;
}
