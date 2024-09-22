import type { Review } from './review.type';

export type Product = {
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
  reviews?: Review[];
};
