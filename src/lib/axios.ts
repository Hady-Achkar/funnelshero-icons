import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const FlatAxios = axios.create({
  baseURL: "https://api.flaticon.com/v3",
});

FlatAxios.defaults.headers.common["Content-Type"] = "multipart/form-data";
FlatAxios.defaults.headers.common["Accept"] = "application/json";
FlatAxios.defaults.headers.common["Authorization"] = "string";

export default FlatAxios;
