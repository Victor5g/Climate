import api from "./api";
import config from "../config/api";

export const getClimate = async (lat: number, long: number) => {
  try {
    let response = await api(config.BASE_URL)
      .get(
        `?lat=${lat}&lon=${long}&appid=${config.API_KEY}&lang=pt&units=metric`
      )
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });

    if (response.status !== 200) {
      return response;
    }
    return response.data;
  } catch (error) {
    console.log(`Error-getClimate(): ${error}`);
  }
};
