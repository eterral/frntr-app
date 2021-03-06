import api from "./apiConfig";

export const getProducts = async () => {
  try {
    const res = await api.get("/products");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getFurniture = async () => {
  try {
    const res = await api.get("/products/furniture");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getBackyard = async () => {
  try {
    const res = await api.get("/products/backyard");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getKitchen = async () => {
  try {
    const res = await api.get("/products/kitchen");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (id) => {
  try {
    const res = await api.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (product) => {
  try {
    const res = await api.post("/products", product);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  try {
    const res = await api.put(`/products/${id}`, product);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await api.delete(`/products/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const addToCart = async (id, cartItemId) => {
  try {
    const res = await api.post(`/users/${id}/cart/${cartItemId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getCart = async (id) => {
  try {
    const res = await api.get(`users/${id}/cart`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const removeFromCart = async (id, cartItemId) => {
  try {
    const res = await api.delete(`/users/${id}/cart/${cartItemId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const clearCart = async (id) => {
  try {
    const res = await api.delete(`/users/${id}/cart`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
