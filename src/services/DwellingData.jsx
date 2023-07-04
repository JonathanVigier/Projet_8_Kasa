import { HttpRequestHandler } from "../utils/ErrorHandler.jsx";

let dwellings = [];

export const getAllDwellings = async () => {
  let response;

  try {
    response = await fetch("http://localhost:3001/api/dwellings");
    const contentLength = response.headers.get("Content-Length");

    HttpRequestHandler(response);
    console.log(response);
    console.log(contentLength);

    if (contentLength > 0) {
      const data = await response.json();
      dwellings = data.homes;
    } else {
      dwellings = [];
    }
    return dwellings;
  } catch (error) {
    console.error(error);
  }
};

export const getDwellingById = async (id) => {
  try {
    const dwelling = dwellings.find((dwelling) => dwelling.id === id);
    return dwelling;
  } catch {
    console.error("Impossible de trouver le logement demandé !");
  }
};
