import axios from "axios";
import authHeader from "./services/auth-header";

export default axios.create({
  baseURL: "http://localhost:3001/",
  headers: authHeader()
//  headers: Object.assign({}, {
//    "Content-type": "application/json",
//  }, authHeader())
});
