export interface ProductInCart {
  id: number;
  name: string;
  cover: string;
}

export interface CartItemType {
  quantity: number;
  price_each: number;
  Product: ProductInCart;
}

export interface AddProductToCartPayload {
  id: number;
  quantity: number;
  price: number;
}

export interface newCartItemType {
  productId: number;
  quantity: number;
  priceEach: number;
}

export interface GetCartResponse {
  status: 'success' | 'error';
  message: string;
  cartItems: CartItemType[];
}

export interface AddToCartResponse {
  status: 'success' | 'error';
  message: string;
  newCartItem: newCartItemType;
}

export interface UpdateCartItemResponse {
  status: 'success' | 'error';
  message: string;
}

export interface DeleteCartItemResponse {
  status: 'success' | 'error';
  message: string;
}
