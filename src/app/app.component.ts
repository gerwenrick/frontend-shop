import { Component, OnDestroy } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { LOCAL_STORAGE_STATE_KEY } from "./state/hydration.reducer";

@Component({
  selector: "rvg-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnDestroy {
  public ngOnDestroy(): void {
    localStorage.removeItem(LOCAL_STORAGE_STATE_KEY);
  }
}
