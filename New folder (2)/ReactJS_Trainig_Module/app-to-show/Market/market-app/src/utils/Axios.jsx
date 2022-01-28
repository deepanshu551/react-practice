import axios from "axios";
import url from "./URL";
export const api =axios.create({

    baseURL:url,
})