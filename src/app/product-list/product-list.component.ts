import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  @Input() isActiveAddFavorite: boolean;

  @Input() products: Product[];

  @Output() addedFavorite = new EventEmitter<object>();
  addFavorite(selectedProduct:object) {
    this.addedFavorite.emit(selectedProduct);
  }

  @Output() removedFavorite = new EventEmitter<object>();
  removeFavorite(selectedProduct:object) {
    this.removedFavorite.emit(selectedProduct);
  }

  constructor() { }

  ngOnInit() {
  }
}
