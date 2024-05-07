import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { ProductList } from '../Models/iproduct-list';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[] ;
  constructor() {
    this.products = ProductList;
  }

  getAll(): IProduct[]  {
    return this.products;
  }

  getById(id: number): IProduct | undefined {
    return this.products?.find((p) => p.id == id);
  }

  counter: number = 20;

  add(item: IProduct) {
    var product = { ...item };
    product.id = ++this.counter;
    this.products?.push(product);
  }

  edit(id: number, updatedProduct: IProduct) {
    const index = this.products?.findIndex((p) => p.id == id);
    if (index !== undefined && index !== -1) {
       this.products[index] = { ...updatedProduct, id };
    }
  }
}