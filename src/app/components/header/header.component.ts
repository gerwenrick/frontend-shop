import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../services/sidebar.service';
import { Store } from '@ngrx/store';
import { allProductsSelector } from '../../state/products/selectors/products.selectors';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'rvg-header',
  standalone: true,
  imports: [FontAwesomeModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent {
  public faHeart = faHeart;
  public isSidebarOpen: boolean = false;

  public sidebarService: SidebarService = inject(SidebarService);
  private store: Store = inject(Store);

  public wishlistItems$: Observable<number> = this.store
    .select(allProductsSelector())
    .pipe(map((products) => products.length));
}
