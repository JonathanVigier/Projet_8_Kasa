export const getAllDwellings = async () => {
  const response = await fetch("/database/homes.json");
  const data = await response.json();

  return data.homes;
};

export const getDwellingById = async (id) => {
  const dwellings = await getAllDwellings();

  const dwelling = dwellings.find((dwelling) => dwelling.id === id);

  return dwelling;
};
