const API_URL = "http://mkugmk-admin.vmff.ru";

export async function fetchAPI(query, { variables } = {}) {
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
        id
        slug
      }
    }
  `);
  return data?.allMuseums;
}

export async function getAllNewsWithSlug() {
  const data = fetchAPI(`
    {
      posts {
        id
        slug
      }
    }
  `);
  return data?.allPosts;
}

// NAVIGATION REQUEST
// WELCOME PAGE REQUESTS

export async function getWelcomePageInfo(locale) {
  const data = await fetchAPI(
    `
    query WelcomePage($locale: String) {
        welcomePage(locale: $locale) {
          title
          description
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
  return data?.welcomePage;
}

export async function getNewsForHome(locale) {
  const data = await fetchAPI(
    `
    query News($locale: String) {
      posts(locale: $locale, limit: 5, sort: "createdAt:desc") {
        id
        postType
        title
        slug
        image {
          url
        }
        eventDate
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
    	hour {
        openspace {
          id
          isWeekend
          timeOpen
          timeClose
          day
        }
        museum {
					id
          isWeekend
          timeOpen
          timeClose
          day
        }
      }  
    }
  `
  );
  return data?.hour;
}

// NAVIGATION REQUESTS
export async function getMuseumLinksForNavigation() {
  const data = await fetchAPI(
    `
    {
      museums {
        id
        title
        slug
      }
    }
  `
  );
  return data?.museums;
}

// NEWS PAGE REQUEST
export async function getAllNews(locale) {
  const data = await fetchAPI(
    `
    query News($locale: String) {
      posts(locale: $locale, sort: "createdAt:desc") {
        id
        postType
        title
        slug
        image {
          url
        },
        eventDate
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

// SINGLE NEWS PAGE REQUEST
export async function getSingleNews(slug, locale) {
  const data = await fetchAPI(
    `
    query News($where: JSON, $locale: String) {
        posts(where: $where, locale: $locale) {  
          title
          slug
          postType
          shortDescription
          image {
            url
          },
          eventDate,
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
export async function getAllMuseumGalleries() {
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

  const gallery = [];

  data.museums.map((museum) => gallery.push(...museum.gallery));

  return gallery;
}

// TICKETS PRICES
export async function getTicketPrices(locale) {
  const data = await fetchAPI(
    `
    query Tickets($locale: String) {
        tickets(locale: $locale) {  
          id,
          title,
          price,
          type
        }
      }
  `,
    {
      variables: {
        locale,
      },
    }
  );
  return data?.tickets;
}

// ALL CONTACTS
export async function getContacts() {
  const data = await fetchAPI(
    `
    query {
      contactsPage {
        contacts {
          id
          name
          email
          phone
          type
          position
        }
      }
    }
  `
  );
  return data?.contactsPage.contacts;
}
