import { fetchWrapper } from '../config/config';
import {
  ProductQuery,
  GetProductsResponse,
  GetCategoryResponse,
  GetProductDetailResponse,
} from '../types/product';

export const ProductService = {
  getProducts: async (params: ProductQuery) => {
    const queryString = new URLSearchParams(params as any).toString();
    return fetchWrapper<GetProductsResponse>(`/products?${queryString}`);
  },

  getCategories: async () => {
    return fetchWrapper<GetCategoryResponse>(`/category`);
  },

  getProductDetail: async (id: number) => {
    return fetchWrapper<GetProductDetailResponse>(`/products/${id}`);
  },
};
