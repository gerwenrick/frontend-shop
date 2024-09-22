import { createAction, props } from '@ngrx/store';
import { Product } from '../types/product.type';

export const PRODUCTS_ACTION_PREFIX = '[Products]';

export const GET_ALL_PRODUCTS_ACTION = `${PRODUCTS_ACTION_PREFIX} Get All Products`;
export const GET_ALL_PRODUCTS_SUCCESS_ACTION = `${PRODUCTS_ACTION_PREFIX} Get All Products Success`;
export const GET_ALL_PRODUCTS_ERROR_ACTION = `${PRODUCTS_ACTION_PREFIX} Get All Products Error`;
// export const GET_PRODUCT_BY_ID_ACTION = `${PRODUCTS_ACTION_PREFIX} Get Product By Id`;
// export const GET_PRODUCT_BY_ID_SUCCESS_ACTION = `${PRODUCTS_ACTION_PREFIX} Get Product By Id Success`;
// export const GET_PRODUCT_BY_ID_ERROR_ACTION = `${PRODUCTS_ACTION_PREFIX} Get Product By Id Error`;
export const ADD_PRODUCT_TO_WISHLIST_ACTION = `${PRODUCTS_ACTION_PREFIX} Add Product To Wishlist`;
export const REMOVE_PRODUCT_TO_WISHLIST_ACTION = `${PRODUCTS_ACTION_PREFIX} Remove Product To Wishlist`;

export const getAllProductsAction = createAction(GET_ALL_PRODUCTS_ACTION);
export const getAllProductsSuccessAction = createAction(
  GET_ALL_PRODUCTS_SUCCESS_ACTION,
  props<{ products: Product[] }>(),
);
export const getAllProductsErrorAction = createAction(
  GET_ALL_PRODUCTS_ERROR_ACTION,
  props<{ error: string }>(),
);

// export const getProductByIdAction = createAction(
//   GET_PRODUCT_BY_ID_ACTION,
//   props<{ id: number }>(),
// );
// export const getProductByIdSuccessAction = createAction(
//   GET_PRODUCT_BY_ID_SUCCESS_ACTION,
//   props<{ product: Product }>(),
// );
// export const getProductByIdErrorAction = createAction(
//   GET_PRODUCT_BY_ID_ERROR_ACTION,
//   props<{ error: string }>(),
// );

export const addProductToWishlistAction = createAction(
  ADD_PRODUCT_TO_WISHLIST_ACTION,
  props<{ productId: number }>(),
);

export const removeProductFromWishlistAction = createAction(
  REMOVE_PRODUCT_TO_WISHLIST_ACTION,
  props<{ productId: number }>(),
);
