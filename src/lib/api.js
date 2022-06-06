export * from "./pages";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

// NAVIGATION REQUESTS
// export async function getMuseumLinksForNavigation() {
//   const data = await fetchAPI(
//     `
//     {
//       museums {
//         id
//         title
//         slug
//       }
//     }
//   `
//   );
//   return data?.museums;
// }
