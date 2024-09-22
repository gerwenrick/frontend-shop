import { createReducer } from '@ngrx/store';
import { Product } from './types/product.type';

export const PRODUCT_FEATURE_KEY = 'products';

export const initialProductsState: Product[] = [
  {
    id: 0,
    name: '',
    description: '',
    rating: 0,
    price: 0,
    categories: [],
    tags: [],
    imageUrl: '',
    stock: 0,
    isFeatured: false,
    discount: 0,
    wishlist: false,
    reviews: [],
  },
];

export const productsReducer = createReducer(initialProductsState);
