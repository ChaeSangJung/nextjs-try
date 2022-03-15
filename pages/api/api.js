import axios from "axios";

const api = axios.create({});

// export const popularApi = () => api.get("/api/movies");
export const popularApi = () => api.get("http://localhost:3000/api/movies"); // front backend