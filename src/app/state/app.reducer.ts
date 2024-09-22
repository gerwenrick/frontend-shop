import { ActionReducerMap } from '@ngrx/store';
import {
  PRODUCT_FEATURE_KEY,
  ProductFeatureState,
  productsReducer,
} from './products/products.reducer';

export type AppState = {
  [PRODUCT_FEATURE_KEY]: ProductFeatureState;
};

export const appReducer: ActionReducerMap<AppState> = {
  [PRODUCT_FEATURE_KEY]: productsReducer,
};
