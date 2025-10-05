import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = {
    id: 0,
    price: 0,
    images: [],
    title: '',
    description: '',
    slug: '',
    category: {
      id: 0,
      name: '',
      slug: '',
      image: '',
      creationAt: new Date(),
      updatedAt: new Date(),
    },
    creationAt: new Date(),
    updatedAt: new Date(),
  };

  @Output() showProduct = new EventEmitter<number>();
  @Output() addProduct = new EventEmitter<Product>();

  constructor() {}

  onAddToCart() {
    this.addProduct.emit(this.product);
  }

  onShowDetail() {
    this.showProduct.emit(this.product.id);
  }

  stringId() {
    return String(this.product.id);
  }
}
