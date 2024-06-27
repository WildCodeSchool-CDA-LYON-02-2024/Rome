import axios from 'axios';

let apiSingleton = null;

export default function useApi() {
  if (!apiSingleton) {
    apiSingleton = axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL, 
    });
  }
console.dir(apiSingleton)
  return apiSingleton;
}
