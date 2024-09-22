import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../../services/products.service';
import {
  GET_ALL_PRODUCTS_ACTION,
  getAllProductsErrorAction,
  getAllProductsSuccessAction,
} from '../actions/products.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class ProductsEffects {
  getAllProjects$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(GET_ALL_PRODUCTS_ACTION),
        exhaustMap(() =>
          this.productsService.getAllProducts$().pipe(
            map((productsRespons) =>
              getAllProductsSuccessAction({
                products: productsRespons.items,
              }),
            ),
            catchError((error) => of(getAllProductsErrorAction({ error }))),
          ),
        ),
      );
    },
    { functional: true },
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
  ) {}
}
