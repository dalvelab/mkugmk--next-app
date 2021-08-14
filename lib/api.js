async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.API_URL}/graphql`, {
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

// WELCOME PAGE REQUESTS

export async function getAllMuseumsForHome(preview) {
  const data = await fetchAPI(
    `
    {
      museums {
        title,
        slug,
        shortDescription,
        image {
          url
        }
      }
    }
  `
  );
  return data?.museums;
}

export async function getEventsForHome() {
  const data = await fetchAPI(
    `
    {
      events(limit: 4) {
        title,
        slug,
        shortDescription,
        image {
          url
        },
        date
      }
    }
  `
  );
  return data?.events;
}

export async function getNewsForHome() {
  const data = await fetchAPI(
    `
    {
      posts(limit: 5) {
        title,
        slug,
        image {
          url
        },
        date,
        shortDescription,
        tag {
          title
        }
      }
    }
  `
  );
  return data?.posts;
}

export async function getGalleryForHome() {
  const data = await fetchAPI(
    `
    {
      museums {
        gallery(limit: 2) {
          url
        }
      }
    }
  `
  );
  return data?.museums;
}
