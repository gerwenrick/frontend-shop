import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../state/products/types/product.type';
import { PRODUCT_FEATURE_KEY } from '../../state/products/products.reducer';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'rvg-product-overview',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.css',
})
export class ProductOverviewComponent {
  private store: Store<{ products: Product[] }> = inject(Store);

  public products$: Observable<Product[]> = this.store.select('products');
}
