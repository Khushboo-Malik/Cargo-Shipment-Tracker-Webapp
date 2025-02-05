import axios from "axios";

const API_BASE_URL = "https://cargo-shipment-tracker.onrender.com"; 

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default instance;
