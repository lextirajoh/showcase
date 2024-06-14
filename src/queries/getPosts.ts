const query = `
  query {
    postCollection {
      items {
        sys {
          id
        }
        title
        slug
        description
        body {
          json
        }
      }
    }
  }
`;

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

export const getPosts = async () => {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status code: ${response.status}`);
    }

    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
};
