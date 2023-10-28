import axios from "axios";
import { API_KEY } from "../constants";

const getQuotes = async (category) => {
  // const encodedParams = new URLSearchParams();
  // encodedParams.set("category", category);

  const options = {
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
    headers: {
      "X-Api-Key": API_KEY,
    },
    // data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log("from call", response);
    return new Promise((res, rej) => res(response.data));
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getQuotes;
