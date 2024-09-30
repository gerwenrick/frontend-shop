import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsService } from "../../../services/products.service";
import {
  getAllProductsAction,
  getAllProductsErrorAction,
  getAllProductsSuccessAction,
} from "../actions/products.actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class ProductsEffects {
  getAllProjects$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(getAllProductsAction.type),
        switchMap(() =>
          this.productsService.getAllProducts$().pipe(
            map((productsRespons) =>
              getAllProductsSuccessAction({
                updatedProducts: productsRespons.items,
              })
            ),
            catchError((error) => {
              console.error(`Something went wrong: ${error}`);
              return of(getAllProductsErrorAction({ error }));
            })
          )
        )
      );
    },
    { functional: true }
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
