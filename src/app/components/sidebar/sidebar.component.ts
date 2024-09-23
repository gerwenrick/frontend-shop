import { Component, inject, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
import { map, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectAllWishlistItems,
  selectProductsByIds,
} from '../../state/products/selectors/products.selectors';
import { CardComponent } from '../card/card.component';
import { updateProductQuantityAction } from '../../state/products/actions/products.actions';

@Component({
  selector: 'rvg-sidebar',
  standalone: true,
  imports: [NgClass, AsyncPipe, JsonPipe, CardComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject();

  public sidebarService: SidebarService = inject(SidebarService);
  public store: Store = inject(Store);

  public isOpen: boolean = false;
  public wishlistItems$ = this.store.select(selectAllWishlistItems()).pipe(
    switchMap((wishlistItemsIds) =>
      this.store.select(selectProductsByIds(wishlistItemsIds)),
    ),
    map((items) => items),
  );

  public newQuantity: number = 5;

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

  public submitForm(wishlistItemId: number): void {}
}
