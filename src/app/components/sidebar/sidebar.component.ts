import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { map, Subject, switchMap, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectAllWishlistItems,
  selectProductsByIds,
} from '../../state/products/selectors/products.selectors';
import { CardComponent } from '../card/card.component';
import { updateProductQuantityAction } from '../../state/products/actions/products.actions';
import { WishlistFormComponent } from '../wishlist-form/wishlist-form.component';

@Component({
  selector: 'rvg-sidebar',
  standalone: true,
  imports: [NgClass, AsyncPipe, CardComponent, WishlistFormComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  public sidebarService: SidebarService = inject(SidebarService);
  public store: Store = inject(Store);

  public isOpen = false;
  public wishlistItems$ = this.store.select(selectAllWishlistItems()).pipe(
    switchMap((wishlistItemsIds) =>
      this.store.select(selectProductsByIds(wishlistItemsIds)),
    ),
    map((items) => items),
  );

  public newQuantity = 5;

  public ngOnInit(): void {
    this.sidebarService.onShowSidebarChange$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isOpenFlag) => (this.isOpen = isOpenFlag));
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onQuantityChange(productId: number, quantity: number): void {
    this.store.dispatch(
      updateProductQuantityAction({
        productId: productId,
        newQuantity: quantity,
      }),
    );
  }

  public submitForm(wishlistItemId: number): void {
    console.log(`Added item with id: ${wishlistItemId}`)
  }
}
