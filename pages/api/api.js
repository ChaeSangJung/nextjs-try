import axios from "axios";

const api = axios.create();

// export const popularApi = () => api.get("/api/movies");
export const popularApi = () => api.get("http://localhost:8080/api/movies"); // front backend
export const detailApi = id => api.get(`http://localhost:8080/api/movies/${id}`);
export const popularApiPage = page => api.get(`http://localhost:8080/api/movies?page=${page}`);