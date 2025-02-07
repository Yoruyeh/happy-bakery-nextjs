import { fetchWrapper } from '../config/config';
import { GetCartResponse } from '../types/cart';

export const CartService = {
  getCart: async () => {
    return fetchWrapper<GetCartResponse>('/cart');
  },
};
