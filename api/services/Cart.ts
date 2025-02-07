import { fetchWrapper } from '../config/config';
import {
  GetCartResponse,
  UpdateCartItemResponse,
  DeleteCartItemResponse,
} from '../types/cart';

export const CartService = {
  getCart: async () => {
    return fetchWrapper<GetCartResponse>('/cart');
  },

  updateCartItem: async (id: number, quantity: number) => {
    return fetchWrapper<UpdateCartItemResponse>(`/cart/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity }),
    });
  },

  deleteCartItem: async (id: number) => {
    return fetchWrapper<DeleteCartItemResponse>(`/cart/${id}`, {
      method: 'DELETE',
    });
  },
};
