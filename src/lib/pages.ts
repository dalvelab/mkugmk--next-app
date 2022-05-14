import { fetchAPI } from "./api";

export async function getWelcomePageTest(locale?: string) {
  const data = await fetchAPI(
    `
    query WelcomePageTest($locale: String) {
        museums(locale: $locale, sort: "createdAt:desc") {  
          id
          title,
          slug,
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
  return data;
}
