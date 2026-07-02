import api from './api';

/**
 * Example service to demonstrate GET and POST requests.
 * Since the Vite proxy redirects `/api` to `http://localhost:8080`,
 * requests here are made to `/v1/products` which translates to
 * `http://localhost:8080/api/v1/products` on the backend.
 */

export const exampleService = {
  /**
   * Fetch all products (Example GET request)
   */
  getProducts: async () => {
    try {
      const response = await api.get('/v1/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  /**
   * Create a new product (Example POST request)
   * @param {Object} productData - The product information to save.
   */
  createProduct: async (productData) => {
    try {
      const response = await api.post('/v1/products', productData);
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }
};
