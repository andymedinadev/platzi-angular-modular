import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Category } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly API_URL = `${environment.API_URL}/categories`;

  constructor(private http: HttpClient) {}

  getAll(limit?: number, offset?: number) {
    if (limit != null || offset != null) {
      let params = new HttpParams();

      if (limit != null) {
        params = params.set('limit', limit.toString());
      }

      if (offset != null) {
        params = params.set('offset', offset.toString());
      }

      return this.http.get<Category[]>(this.API_URL, {
        params,
      });
    }
    return this.http.get<Category[]>(this.API_URL);
  }
}
