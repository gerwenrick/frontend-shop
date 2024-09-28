import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductOverviewComponent } from "./product-overview.component";
import { provideStore } from "@ngrx/store";

describe("ProductOverviewComponent", () => {
  let component: ProductOverviewComponent;
  let fixture: ComponentFixture<ProductOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOverviewComponent],
      providers: [provideStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
