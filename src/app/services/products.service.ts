import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRespons } from '../state/products/types/product.type';

type BaseUrl = `http://${string}`;
type UrlString = `/${string}`;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly BASE_URL: BaseUrl = 'http://localhost:4200';
  private readonly ASSETS_URL: UrlString = '/assets';

  private httpClient: HttpClient = inject(HttpClient);

  public getAllProducts$(): Observable<ProductRespons> {
    return this.httpClient.get<ProductRespons>(
      `${this.BASE_URL}${this.ASSETS_URL}/products.json`,
    );
  }
}
