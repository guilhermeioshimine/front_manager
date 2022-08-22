import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API = 'api/product';
  id!: Number;

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Product[]>(this.API).pipe(first());
  }

  save(product: Product) {
    return this.httpClient.post<Product>(this.API, product).pipe(first());
  }

  listById(productId: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', productId);
    return this.httpClient
      .get<Product>(this.API + '/byId', { params: queryParams })
      .pipe(first());
  }

  update(product: Product) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', product.id);
    return this.httpClient
      .put<Product>(this.API, product, { params: queryParams })
      .pipe(first());
  }

  delete(productId: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', productId);
    return this.httpClient
      .delete<Product>(this.API, { params: queryParams })
      .pipe(first());
  }
}
