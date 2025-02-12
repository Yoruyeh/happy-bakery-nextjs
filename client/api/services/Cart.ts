import { fetchWrapper } from '../config/config';
import {
  GetCartResponse,
  AddProductToCartPayload,
  AddToCartResponse,
  UpdateCartItemResponse,
  DeleteCartItemResponse,
} from '../types/cart';

export const CartService = {
  getCart: async () => {
    return fetchWrapper<GetCartResponse>('/cart');
  },

  addToCart: async (payload: AddProductToCartPayload) => {
    return fetchWrapper<AddToCartResponse>('/cart', {
      method: 'POST',
      body: JSON.stringify(payload),
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
