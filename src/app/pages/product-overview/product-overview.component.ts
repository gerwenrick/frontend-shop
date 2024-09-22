import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../state/products/types/product.type';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  addProductToWishlistAction,
  getAllProductsAction,
  removeProductFromWishlistAction,
} from '../../state/products/actions/products.actions';
import {
  isProductInWishlistSelector,
  selectAllProducts,
} from '../../state/products/selectors/products.selectors';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { faCross, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rvg-product-overview',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    CardComponent,
    ButtonComponent,
    FontAwesomeModule,
  ],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.css',
})
export class ProductOverviewComponent implements OnInit {
  public faHeart: IconDefinition = faHeart;
  public faCross: IconDefinition = faCross;

  private store: Store<{ products: Product[] }> = inject(Store);

  public products$: Observable<Product[]> =
    this.store.select(selectAllProducts());

  public ngOnInit(): void {
    this.store.dispatch(getAllProductsAction());
  }

  public addToWishlist(productId: number): void {
    this.store.dispatch(addProductToWishlistAction({ productId: productId }));
  }

  public removeFromWishlist(productId: number): void {
    this.store.dispatch(
      removeProductFromWishlistAction({ productId: productId }),
    );
  }

  public isProductInWishlist$(productId: number): Observable<boolean> {
    return this.store.select(isProductInWishlistSelector(productId));
  }
}
