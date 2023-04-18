import axios, { AxiosError } from "axios";

export const fetcher = axios.create({
  baseURL: "",
});

fetcher.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    return {
      error: {
        message: error.message,
        code: error.response?.status,
      },
    };
  }
);
