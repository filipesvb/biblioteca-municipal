import axios from "axios";

const livrosApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

async function getLivros() {
  const response = await livrosApi.get("/livros");
  return response.data;
}

export { getLivros };
