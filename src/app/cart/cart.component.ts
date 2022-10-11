import {Component} from '@angular/core';
import {CartService} from "../services/cart.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productsInCart = this.cartService.getItems();
  total = this.cartService.getTotalPrice();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {}

  cleanCart() {
    debugger
    this.cartService.cleanCard();
    this.updateFields();
  }

  updateFields() {
    this.productsInCart = this.cartService.getItems();
    this.total = this.cartService.getTotalPrice();
  }

  onSubmit() {
    this.cleanCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
