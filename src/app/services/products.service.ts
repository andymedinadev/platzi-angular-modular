import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '@environments/environment';
import { checkTime } from '@interceptors/time.interceptor';
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
} from '@models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private readonly API_URL = `${environment.API_URL}/products`;

  getProducts(limit?: number, offset?: number) {
    if (limit != null || offset != null) {
      let params = new HttpParams();

      if (limit != null) {
        params = params.set('limit', limit.toString());
      }

      if (offset != null) {
        params = params.set('offset', offset.toString());
      }

      return this.http.get<Product[]>(this.API_URL, {
        params,
        context: checkTime(),
      });
    }

    return this.http.get<Product[]>(this.API_URL, { context: checkTime() });
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.API_URL}/${id}`);
  }

  getProductsByCategory(id: string, limit?: number, offset?: number) {
    if (limit != null || offset != null) {
      let params = new HttpParams();

      if (limit != null) {
        params = params.set('limit', limit.toString());
      }

      if (offset != null) {
        params = params.set('offset', offset.toString());
      }

      return this.http.get<Product[]>(
        `${environment.API_URL}/categories/${id}/products`,
        { params }
      );
    }

    return this.http.get<Product[]>(
      `${environment.API_URL}/categories/${id}/products`
    );
  }

  create(data: CreateProductDTO) {
    return this.http.post<Product>(this.API_URL, data);
  }

  update(id: number, data: UpdateProductDTO) {
    return this.http.put<Product>(`${this.API_URL}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.API_URL}/${id}`);
  }
}
