import { fetchWrapper } from '../../config/config';
import {
  GetOrdersResponse,
  GetOrderDetailResponse,
  CreateOrderResponse,
  CreateOrderPayload,
} from '../../types/(user)/order';

export const OrderService = {
  getOrders: async () => {
    return fetchWrapper<GetOrdersResponse>('/users/orders');
  },

  getOrderDetail: async (id: number) => {
    return fetchWrapper<GetOrderDetailResponse>(`/orders/${id}`);
  },

  createOrder: async (payload: CreateOrderPayload) => {
    return fetchWrapper<CreateOrderResponse>('/orders', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};
