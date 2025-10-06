import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '@services/products.service';
import { Product } from '@models/product.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-category',
  template: ` <app-products
    [productId]="productId"
    [products]="products"
  ></app-products>`,
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryId: null | string = null;

  products: Product[] = [];
  limit = 10;
  offset = 0;
  productId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.categoryId = params.get('id');

          if (this.categoryId) {
            return this.productsService.getProductsByCategory(
              this.categoryId,
              this.limit,
              this.offset
            );
          }

          return [];
        })
      )
      .subscribe((data) => (this.products = data));

    this.route.queryParamMap.subscribe((params) => {
      this.productId = params.get('product');
    });
  }
}
