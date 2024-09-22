import { createAction, props } from '@ngrx/store';

export const PRODUCTS_KEY = '[Products]';

export const getAllProducts = createAction(`${PRODUCTS_KEY} Get All Products`);

export const getProductById = createAction(
  `${PRODUCTS_KEY} Get Product By Id`,
  props<{ id: number }>(),
);
