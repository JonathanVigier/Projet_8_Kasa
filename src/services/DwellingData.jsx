import { HttpRequestHandler } from "../utils/ErrorHandler.jsx";

export const getAllDwellings = async () => {
  let response;
  let dwellings;

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
    const dwellings = await getAllDwellings();
    const dwelling = dwellings.find((dwelling) => dwelling.id === id);
    return dwelling;
  } catch {
    console.error("Impossible de trouver le logement demandé !");
  }
};
