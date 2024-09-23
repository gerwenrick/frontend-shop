import { createReducer, on } from '@ngrx/store';
import {
  addProductToWishlistAction,
  getAllProductsSuccessAction,
  removeProductFromWishlistAction,
  updateProductQuantityAction,
} from './actions/products.actions';
import { Product } from './types/product.type';

export const PRODUCT_FEATURE_KEY = 'products';

export type ProductFeatureState = {
  shopName: string;
  shopKeeper: string;
  items: Product[];
  wishlistItems: number[];
};

export const initialProductsState: ProductFeatureState = {
  shopName: '',
  shopKeeper: '',
  items: [],
  wishlistItems: [],
};

export const productsReducer = createReducer(
  initialProductsState,
  on(getAllProductsSuccessAction, (state, { products }) => ({
    ...state,
    items: products,
  })),
  on(addProductToWishlistAction, (state, { productId }) => {
    if (state.wishlistItems.includes(productId)) {
      return state;
    }
    return {
      ...state,
      wishlistItems: [...state.wishlistItems, productId],
    };
  }),
  on(removeProductFromWishlistAction, (state, { productId }) => ({
    ...state,
    wishlistItems: state.wishlistItems.filter((id) => id !== productId),
  })),
  on(updateProductQuantityAction, (state, { productId, newQuantity }) => {
    const updatedProducts = state.items.map((product) => {
      if (product.id === productId) {
        const updatedQuantity = Math.min(newQuantity, product.stock);
        return { ...product, quantity: updatedQuantity };
      }
      return product;
    });

    return { ...state, products: updatedProducts };
  }),
);
