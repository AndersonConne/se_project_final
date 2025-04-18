export const BASE_URL = "https://newsapi.org/v2/everything";
export const API_KEY = "360d6ec59a024290b893fb87fdc855fd";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export default async function getNewsArticles(
  userSearch,
  from,
  to,
  pageSize = 100
) {
  try {
    const url = `${BASE_URL}?q=${userSearch}&apiKey=${API_KEY}&from=${from}&to=${to}&pageSize=${pageSize}`;

    const response = await fetch(url);
    console.log(userSearch);
    return await checkResponse(response);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export async function getSavedArticles() {
  try {
    const savedArticles = localStorage.getItem("savedArticles");
    console.log("localStorage content:", localStorage.getItem("savedArticles"));
    if (!savedArticles) {
      return [];
    }

    const parsedArticles = JSON.parse(savedArticles);
    return parsedArticles;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export async function saveArticle(articleData) {
  console.log("api.js - Received article data:", articleData);
  try {
    const currentSavedArticles = await getSavedArticles();

    // Properly structure the source
    console.log("Article data before saving:", {
      originalSource: articleData.source,
      typeof: typeof articleData.source,
      hasName: articleData.source?.name,
    });
    let sourceName;
    if (articleData.source) {
      sourceName =
        typeof articleData.source === "object"
          ? articleData.source.name
          : articleData.source;
    }

    const newArticle = {
      ...articleData,
      source: {
        name: sourceName || "Unknown Source",
      },
    };
    const isDuplicate = currentSavedArticles.some(
      (article) => article.title === articleData.title
    );

    if (!isDuplicate) {
      currentSavedArticles.push(newArticle);
      localStorage.setItem(
        "savedArticles",
        JSON.stringify(currentSavedArticles)
      );
      return newArticle;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export async function removeArticle(articleTitle) {
  try {
    const currentSavedArticles = await getSavedArticles();
    const updatedArticles = currentSavedArticles.filter(
      (article) => article.title !== articleTitle
    );
    localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
    console.log("removeArticle function called with:", articleTitle);
    return updatedArticles;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
