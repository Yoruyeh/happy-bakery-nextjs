export interface ProductQuery {
  page: number;
  category?: number;
  sort?: string;
  keyword?: string;
}

interface Category {
  name: string;
}

export interface Product {
  id: number;
  name: string;
  category_id: number;
  cover: string;
  stock_quantity: number;
  price_regular: number;
  price_sale: number;
  create_date: string;
  Category: Category;
}

export interface GetProductsResponse {
  status: 'success' | 'error';
  message: string;
  productCount: number;
  products: Product[];
}

export interface ProductImage {
  name: string;
  image_path: string;
}

export interface ProductDetail {
  id: number;
  name: string;
  cover: string;
  stock_quantity: number;
  price_regular: number;
  price_sale: number;
  description: string;
  ProductImages: ProductImage[];
}

export interface GetProductDetailResponse {
  status: 'success' | 'error';
  message: string;
  productCount: number;
  product: ProductDetail;
}
