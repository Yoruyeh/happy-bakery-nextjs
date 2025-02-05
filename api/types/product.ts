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
