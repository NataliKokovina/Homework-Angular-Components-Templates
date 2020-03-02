import { Component, OnInit } from '@angular/core';
import products from '../constants/products';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.css']
})
export class ProductsMainComponent implements OnInit {

  public products = products;

  public filteredProducts = products;

  public favoriteProduct = [];

  public isActiveAddFavorite = true;

  public isSortToGrowe = "default";

  constructor() { }

  ngOnInit() {
  }

  search(inputEl) {
    const value = inputEl.value;
    this.filteredProducts = this.products.filter(product => product.Title.toLowerCase().match(value.toLowerCase()));
  }

  isSort(sortType: string) {
    this.isSortToGrowe = sortType;
    console.log(this.isSortToGrowe)
    this.filteredProducts = this.products.sort((a, b) => {
      if(sortType === "inOrderDown"){
        return a.Rating - b.Rating;
      } else if(sortType === "inOrderUp"){
        return b.Rating - a.Rating;
      }
    });
  }

  addedFavorite(selectedProduct:any){
    this.isActiveAddFavorite = true;
    this.favoriteProduct.push(selectedProduct);
    this.filteredProducts.splice(this.filteredProducts.indexOf(selectedProduct), 1);
  }

  removedFavorite(selectedProduct:any){
    this.filteredProducts.push(selectedProduct);
    this.isSort(this.isSortToGrowe);
    this.favoriteProduct.splice(this.favoriteProduct.indexOf(selectedProduct), 1);
  }
}
