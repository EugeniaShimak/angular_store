import { Injectable } from '@angular/core';
import {Product} from "../products";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  total =  0;

  constructor(private http: HttpClient) {
  }

  addToCart(newItem: Product){
    this.items = [
      ...this.items,
      newItem
    ];
    this.total++;
  }

  getItems() {
    return this.items;
  }

  cleanCard() {
    this.items = [];
    this.total = 0;
    return this.items;
  }

  getTotalPrice() {
   return this.total;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json')
  }

}
