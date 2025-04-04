import axios from "axios";
import { BASE_URL } from "./constants";
import { VEHICLES_API, VEHICLES_IMAGES_API } from "./constants";

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to register a user
export const registerUser = async (email, password, confirmPassword) => {
  try {
    const response = await api.post("/accounts/register/api/", {
      email,
      password,
      password2: confirmPassword,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Function to log in a user
export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/accounts/token/api/", {
      email,
      password,
    });
    return response.data; // Returns tokens (access & refresh)
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Function to refresh the token
export const refreshToken = async (refreshToken) => {
  try {
    const response = await api.post("/accounts/token/refresh/api/", {
      refresh: refreshToken,
    });
    return response.data; // Returns new access token
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Fetch featured cars
export const fetchFeaturedCars = async () => {
  try {
      const response = await axios.get(VEHICLES_API);
      return response.data.filter(car => car.is_featured);
  } catch (error) {
      console.error("Error fetching featured cars:", error);
      return [];
  }
};

// Fetch car images
export const fetchCarImages = async (carId) => {
  try {
      const response = await axios.get(VEHICLES_IMAGES_API);
      return response.data.filter(image => image.car === carId);
  } catch (error) {
      console.error(`Error fetching images for car ${carId}:`, error);
      return [];
  }
};


export const fetchAuctions = async (query = "", filters = {}) => {
  try {
    const params = new URLSearchParams();
    if (query) {
      params.append("search", query);
    }
    for (const key in filters) {
      if (filters[key]) {
        params.append(key, filters[key]);
      }
    }

    const response = await fetch(`${BASE_URL}/auctions/auctions/?${params.toString()}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching auctions:", error);
    throw error; // Re-throw the error so the component can handle it
  }
};

export default api;