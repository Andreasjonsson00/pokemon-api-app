import apiClient from "./axiosConfig";

//GET
export const getAllPokemon = async () => {
  try {
    const response = await apiClient.get("/pokemon");
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error(`Failed to fetch pokemon: ${error.message}`);
  }
};
