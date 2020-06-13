import { Component, OnInit } from '@angular/core';
import {Food} from '../../module/Food';
import {CartService} from '../../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  localStore: Food[] = [];
  constructor(public cartService: CartService) {}
  ngOnInit(): void {
    // if (this.localStore == null){
    //   this.localStore = [];
    // }
    // this.localStore = this.cartService.getProductInStorage();
    // console.log(this.localStore);
    try {
      this.localStore = JSON.parse(localStorage.getItem('product'));
      console.log(this.localStore);
    }catch (e) {
      alert(e);
    }
  }
}
