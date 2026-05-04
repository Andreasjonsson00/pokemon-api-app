import apiClient from "./axiosConfig";

//GET
export const getAllPokemon = async () => {
  try {
    const response = await apiClient.get("/pokemon?limit=151");

    const detailedPokemon = await Promise.all(
      response.data.results.map(async (p) => {
        const res = await apiClient.get(p.url);
        return res.data;
      }),
    );

    return detailedPokemon;
  } catch (error) {
    throw new Error(`Failed to fetch pokemon: ${error.message}`, {
      cause: error,
    });
  }
};
