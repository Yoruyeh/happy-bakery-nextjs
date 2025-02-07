import { fetchWrapper } from '../config/config';
import {
  GetCartResponse,
  AddToCartResponse,
  UpdateCartItemResponse,
  DeleteCartItemResponse,
} from '../types/cart';

export const CartService = {
  getCart: async () => {
    return fetchWrapper<GetCartResponse>('/cart');
  },

  addToCart: async (id: number) => {
    return fetchWrapper<AddToCartResponse>(`/cart/${id}`, {
      method: 'POST',
    });
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
