import { ComponentFixture, TestBed } from "@angular/core/testing";

import { WishlistFormComponent } from "./wishlist-form.component";
import { MockProduct } from "../../mocks/product.mock";
import { provideStore } from "@ngrx/store";

describe("WishlistFormComponent", () => {
  let component: WishlistFormComponent;
  let fixture: ComponentFixture<WishlistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistFormComponent],
      providers: [provideStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(WishlistFormComponent);
    component = fixture.componentInstance;

    component.wishlistItem = MockProduct;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
