import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
} from '@models/product.model';

import { StoreService } from '@services/store.service';
import { ProductsService } from '@services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  myShoppingCart: Product[] = [];
  total = 0;

  @Input() products: Product[] = [];
  @Input()
  set productId(id: string | null) {
    if (id) {
      this.onShowDetail(Number(id));
    }
  }

  @Output() readonly loadMoreOutput = new EventEmitter<void>();

  showProductDetail = false;
  productChosen: Product | null = null;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: number) {
    this.productsService.getProductById(id).subscribe((data) => {
      if (!this.showProductDetail) {
        this.showProductDetail = true;
      }

      this.productChosen = data;
    });
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Test',
      price: 100,
      description: 'TestingCreate',
      images: ['https://i.imgur.com/9LFjwpI.jpeg'],
      categoryId: 1,
    };

    this.productsService
      .create(product)
      .subscribe((data) => this.products.unshift(data));
  }

  updateProduct() {
    if (!this.productChosen) {
      return;
    }

    if (this.showProductDetail) {
      this.toggleProductDetail();
    }

    const changes: UpdateProductDTO = {
      title: 'TestEDITED',
      price: 500,
      description: 'someDescription',
    };

    this.productsService
      .update(this.productChosen.id, changes)
      .subscribe((data) => {
        const index = this.products.findIndex((item) => item.id === data.id);
        this.products[index] = data;
      });
  }

  deleteProduct() {
    if (!this.productChosen) {
      return;
    }

    this.productsService.delete(this.productChosen.id).subscribe((data) => {
      const index = this.products.findIndex(
        (item) => item.id === this.productChosen?.id
      );

      this.products.splice(index, 1);

      console.log('deleted:', data);
      this.showProductDetail = false;
    });
  }

  loadMore() {
    this.loadMoreOutput.emit();
  }
}
