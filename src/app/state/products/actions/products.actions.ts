import { createAction, props } from '@ngrx/store';
import { Product } from '../types/product.type';

export const PRODUCTS_KEY = '[Products]';

export const GET_ALL_PRODUCTS_ACTION = `${PRODUCTS_KEY} Get All Products`;
export const GET_ALL_PRODUCTS_SUCCESS_ACTION = `${PRODUCTS_KEY} Get All Products Success`;
export const GET_ALL_PRODUCTS_ERROR_ACTION = `${PRODUCTS_KEY} Get All Products Error`;
export const GET_PRODUCT_BY_ID_ACTION = `${PRODUCTS_KEY} Get Product By Id`;
export const GET_PRODUCT_BY_ID_SUCCESS_ACTION = `${PRODUCTS_KEY} Get Product By Id Success`;
export const GET_PRODUCT_BY_ID_ERROR_ACTION = `${PRODUCTS_KEY} Get Product By Id Error`;

export const getAllProductsAction = createAction(GET_ALL_PRODUCTS_ACTION);
export const getAllProductsSuccessAction = createAction(
  GET_ALL_PRODUCTS_SUCCESS_ACTION,
  props<{ products: Product[] }>(),
);
export const getAllProductsErrorAction = createAction(
  GET_ALL_PRODUCTS_ERROR_ACTION,
  props<{ error: string }>(),
);

export const getProductByIdAction = createAction(
  GET_PRODUCT_BY_ID_ACTION,
  props<{ id: number }>(),
);
export const getProductByIdSuccessAction = createAction(
  GET_PRODUCT_BY_ID_SUCCESS_ACTION,
  props<{ product: Product }>(),
);
export const getProductByIdErrorAction = createAction(
  GET_PRODUCT_BY_ID_ERROR_ACTION,
  props<{ error: string }>(),
);
