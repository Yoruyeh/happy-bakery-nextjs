import { fetchWrapper } from '../config/config';
import {
  ProductQuery,
  GetProductsResponse,
  GetProductDetailResponse,
} from '../types/product';

export const ProductService = {
  getProducts: async (params: ProductQuery) => {
    const queryString = new URLSearchParams(params as any).toString();
    return fetchWrapper<GetProductsResponse>(`/products?${queryString}`);
  },

  getProductDetail: async (id: string) => {
    return fetchWrapper<GetProductDetailResponse>(`/products/${id}`);
  },
};
