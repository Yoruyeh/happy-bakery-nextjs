export interface UserOrder {
  id: number;
  order_date: string;
  total_price: number;
  status: string;
}

export interface ProductInOrder {
  id: number;
  name: string;
  cover: string;
}

export interface OrderItem {
  quantity: number;
  price_each: string;
  Product: ProductInOrder;
}

export interface UserOrderDetail {
  id: number;
  order_date: string;
  total_price: number;
  status: string;
  customer_name: string;
  email: string;
  address: string;
  phone: string;
  shipping_method: string;
  payment_method: string;
  OrderItems: OrderItem[];
  items_count: number;
  shipping_fee: number;
}

export interface NewOrder {
  id: number;
  userId: number;
  status: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  orderDate: string;
  totalPrice: number;
  paymentMethod: string;
  shippingMethod: string;
  updatedAt: string;
  createdAt: string;
}

export interface NewOrderItem {
  id: number;
  productId: number;
  quantity: number;
  priceEach: number;
  orderId: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrderItem {
  id: number;
  quantity: number;
  price: number;
}

export interface ShipmentData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  shippingMethod: string;
}

export interface PaymentData {
  paymentMethod: string;
}

export interface CreateOrderPayload {
  orderItems: CreateOrderItem[];
  total: number;
  shipment: ShipmentData;
  payment: PaymentData;
}

export interface GetOrdersResponse {
  status: 'success' | 'error';
  message: string;
  userOrders: UserOrder[];
}

export interface GetOrderDetailResponse {
  status: 'success' | 'error';
  message: string;
  order: UserOrderDetail;
}

export interface CreateOrderResponse {
  status: 'success' | 'error';
  message: string;
  newOrder: NewOrder;
  newOrderItem: NewOrderItem[];
}
