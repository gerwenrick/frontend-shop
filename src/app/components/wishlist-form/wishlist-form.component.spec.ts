import { ComponentFixture, TestBed } from "@angular/core/testing";

import { WishlistFormComponent } from "./wishlist-form.component";
import { MockProduct } from "../../mocks/product.mock";

describe("WishlistFormComponent", () => {
  let component: WishlistFormComponent;
  let fixture: ComponentFixture<WishlistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WishlistFormComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput("wishlistItem", MockProduct);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
