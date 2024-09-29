import { Component, inject, Input, OnInit } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ButtonComponent } from "../button/button.component";
import { Product } from "../../state/products/types/product.type";
import { Store } from "@ngrx/store";
import { updateProductQuantityAction } from "../../state/products/actions/products.actions";
import { selectProductCurrentStockById } from "../../state/products/selectors/products.selectors";
import { AsyncPipe } from "@angular/common";
import { Observable } from "rxjs";

@Component({
  selector: "rvg-wishlist-form",
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, AsyncPipe],
  templateUrl: "./wishlist-form.component.html",
  styleUrl: "./wishlist-form.component.css",
})
export class WishlistFormComponent implements OnInit {
  @Input({ required: true }) public wishlistItem: Product = {} as Product;

  private formBuilder: FormBuilder = inject(FormBuilder);
  private store: Store = inject(Store);

  public wishlistItemFormGroup = this.formBuilder.group({
    productQuantity: [0, [Validators.required]],
  });

  public itemsInStock$: Observable<number | null> | undefined;
  public productMaxStock$: Observable<number | null> | undefined;

  public ngOnInit(): void {
    if (this.wishlistItem) {
      this.itemsInStock$ = this.store.select(selectProductCurrentStockById(+this.wishlistItem.id));

      this.wishlistItemFormGroup.patchValue({
        productQuantity: this.wishlistItem.wishQuantity,
      });
    }
  }

  public onSubmit(): void {
    this.store.dispatch(
      updateProductQuantityAction({
        productId: +this.wishlistItem.id,
        newQuantity: this.wishlistItemFormGroup.value.productQuantity!,
      })
    );
  }
}
