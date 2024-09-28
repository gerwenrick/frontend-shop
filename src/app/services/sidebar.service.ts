import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SidebarService {
  private showSidebar = false;

  public onShowSidebarChange$ = new BehaviorSubject(this.showSidebar);

  public toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    this.onShowSidebarChange$.next(this.showSidebar);
  }
}
