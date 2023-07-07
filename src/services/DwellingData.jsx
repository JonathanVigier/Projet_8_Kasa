import { HttpRequestHandler } from "../utils/ErrorHandler.jsx";

let dwellings;

export const getAllDwellings = async () => {
  let response;

  try {
    response = await fetch("/database/homes.json");

    HttpRequestHandler(response);

    if (response.ok) {
      const data = await response.json();
      dwellings = data.homes;

      return dwellings;
    }
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
