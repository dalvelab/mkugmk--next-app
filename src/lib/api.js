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
