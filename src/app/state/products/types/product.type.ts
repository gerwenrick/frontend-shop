export interface ProductRespons {
  shopName: string;
  shopKeeper: string;
  items: Product[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  categories: string[];
  tags: string[];
  imageUrl: string;
  stock: number;
  isFeatured: boolean;
  discount: number;
  wishlist: boolean;
  wishQuantity: number;
  reviews?: Review[];
}

export interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}
