import { Component, inject, Input } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ButtonComponent } from "../button/button.component";
import { Product } from "../../state/products/types/product.type";

@Component({
  selector: "rvg-wishlist-form",
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: "./wishlist-form.component.html",
  styleUrl: "./wishlist-form.component.css",
})
export class WishlistFormComponent {
  @Input({ required: true }) public wishlistItem: Product = {} as Product;

  private formBuilder: FormBuilder = inject(FormBuilder);

  public wishlistItemFormGroup = this.formBuilder.group({
    itemQuantity: [69, [Validators.required]],
  });

  public onSubmit(): void {
    console.log("submitted");
  }
}
