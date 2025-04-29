import axios from "axios";
import handleErrors from "./handleErrors"


const livrosApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});



async function getLivros() {
  try {
    const response = await livrosApi.get("/livros");
    return response.data;
  } catch (error) {
    return handleErrors(error);
  }
}

export { getLivros };
