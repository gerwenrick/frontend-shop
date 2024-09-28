import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DefaultLayoutComponent } from "./default-layout.component";
import { provideStore } from "@ngrx/store";

describe("DefaultLayoutComponent", () => {
  let component: DefaultLayoutComponent;
  let fixture: ComponentFixture<DefaultLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLayoutComponent],
      providers: [provideStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
