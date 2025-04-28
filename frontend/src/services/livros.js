import axios from "axios";

const livrosApi = axios.create({
  baseURL: "https://potential-orbit-pw6wwwpp54pcr449-8000.app.github.dev" // ou o domínio onde sua API está hospedada
});

async function getLivros() {
  const response = await livrosApi.get("/livros");
  return response.data;
}

export {
  getLivros
};