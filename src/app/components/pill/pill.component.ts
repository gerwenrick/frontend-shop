import { NgStyle } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ProductCategory } from "../../state/products/types/product.type";

@Component({
  selector: "rvg-pill",
  standalone: true,
  imports: [NgStyle],
  templateUrl: "./pill.component.html",
  styleUrl: "./pill.component.css",
})
export class PillComponent implements OnInit {
  @Input() public pillItems: ProductCategory[] = [];
  public colors: Record<string, string> = {};

  public ngOnInit(): void {
    this.assignColors();
  }

  private assignColors(): void {
    const categoryColorMap: Record<ProductCategory, string> = {
      UI: "#AEC6CF",
      Component: "#FFB347",
      Interaction: "#77DD77",
      Layout: "#FF6961",
      Navigation: "#CFCFC4",
      Media: "#FDFD96",
      Display: "#CB99C9",
      User: "#F49AC2",
      Forms: "#B39EB5",
      Notifications: "#CFCFC4",
    };

    this.pillItems.forEach((pillItem) => {
      if (!this.colors[pillItem]) {
        this.colors[pillItem] = categoryColorMap[pillItem];
      }
    });
  }
}
