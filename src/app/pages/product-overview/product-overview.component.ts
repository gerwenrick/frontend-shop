import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../state/products/types/product.type';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { getAllProductsAction } from '../../state/products/actions/products.actions';
import { allProductsSelector } from '../../state/products/selectors/products.selectors';

@Component({
  selector: 'rvg-product-overview',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.css',
})
export class ProductOverviewComponent implements OnInit {
  private store: Store<{ products: Product[] }> = inject(Store);

  public products$: Observable<Product[]> = this.store.select(
    allProductsSelector(),
  );

  public ngOnInit(): void {
    this.store.dispatch(getAllProductsAction());
  }
}
