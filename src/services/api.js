import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const detectFlower = () => API.get("/detect");
export const checkInfection = (symptoms) =>
  API.post("/infection", { symptoms });
export const startPollination = () => API.get("/pollinate");
