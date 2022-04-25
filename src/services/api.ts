import axios from "axios";

const api = (baseURL: string) => axios.create({ baseURL: `${baseURL}` });

export default api;
