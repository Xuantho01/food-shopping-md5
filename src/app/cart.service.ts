import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Food} from './module/Food';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  urlFood = 'http://localhost:8081/api/food-list';
  foodList: Food[];
  foodInCart: Food[];
  localStorageItem: Food[];
  // cart: Cart = { numInCart: 0};
  // addCart(){
  //   this.cart.numInCart++;
  // }
  constructor(private httpClient: HttpClient) {
    this.getAll().subscribe(data => {
      this.foodList = data;
      this.foodInCart = [];
      this.localStorageItem = [];

    });
  }
  getAll(): Observable<Food[]>{
    return this.httpClient.get<Food[]>(this.urlFood);
  }
  addInCart(i: number){
    // this.addNewCart.addCart();
    try {
      // alert('name:' + this.foodList[i].title);
      this.foodInCart.push(this.foodList[i]);
      console.log(this.foodInCart);
    }catch (e) {
      alert(e);
    }
    localStorage.setItem('product', JSON.stringify(this.foodInCart));
  }
  // public getProduct(): Food[] {
  //   try {
  //     this.localStorageItem.push(JSON.parse(localStorage.getItem('product')));
  //     console.log(this.localStorageItem);
  //   }catch (e) {
  //     alert(e);
  //   }
  //   return this.localStorageItem;
  // }
}
