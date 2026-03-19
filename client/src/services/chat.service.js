import axios from "axios";

// Используем переменную окружения VITE_API_URL
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api"
});


export const sendMessage = async (message) => {
  try {
    const response = await API.post("/chat", { message });
    return response.data;
  } catch (error) {
    console.error("Ошибка отправки сообщения:", error.response?.data || error.message);
    throw error;
  }
};