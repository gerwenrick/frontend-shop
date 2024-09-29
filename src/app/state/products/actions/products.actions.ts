import { createAction, props } from "@ngrx/store";
import { Product } from "../types/product.type";

export const PRODUCTS_ACTION_PREFIX = "[Products]";

export const GET_ALL_PRODUCTS_ACTION = `${PRODUCTS_ACTION_PREFIX} Get All Products`;
export const GET_ALL_PRODUCTS_SUCCESS_ACTION = `${PRODUCTS_ACTION_PREFIX} Get All Products Success`;
export const GET_ALL_PRODUCTS_ERROR_ACTION = `${PRODUCTS_ACTION_PREFIX} Get All Products Error`;
export const ADD_PRODUCT_TO_WISHLIST_ACTION = `${PRODUCTS_ACTION_PREFIX} Add Product To Wishlist`;
export const REMOVE_PRODUCT_TO_WISHLIST_ACTION = `${PRODUCTS_ACTION_PREFIX} Remove Product To Wishlist`;
export const UPDATE_PRODUCT_QUANTITY_ACTION = `${PRODUCTS_ACTION_PREFIX} Update Product Quantity`;

export const getAllProductsAction = createAction(GET_ALL_PRODUCTS_ACTION);
export const getAllProductsSuccessAction = createAction(
  GET_ALL_PRODUCTS_SUCCESS_ACTION,
  props<{ updatedProducts: Product[] }>()
);
export const getAllProductsErrorAction = createAction(GET_ALL_PRODUCTS_ERROR_ACTION, props<{ error: string }>());

export const addProductToWishlistAction = createAction(ADD_PRODUCT_TO_WISHLIST_ACTION, props<{ productId: number }>());

export const removeProductFromWishlistAction = createAction(
  REMOVE_PRODUCT_TO_WISHLIST_ACTION,
  props<{ productId: number }>()
);

export const updateProductQuantityAction = createAction(
  UPDATE_PRODUCT_QUANTITY_ACTION,
  props<{ productId: number; newQuantity: number }>()
);
