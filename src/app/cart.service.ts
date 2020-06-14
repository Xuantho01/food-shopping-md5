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
  foodInCart: Food[] = [];
  // cart: Cart = { numInCart: 0};
  // addCart(){
  //   this.cart.numInCart++;
  // }
  constructor(private httpClient: HttpClient) {
    this.getAll().subscribe(data => {
      this.foodList = data;
    });
  }
  getAll(): Observable<Food[]>{
    return this.httpClient.get<Food[]>(this.urlFood);
  }
  addInCart(i: number){
    try {
      this.foodInCart.push(this.foodList[i]);
      localStorage.setItem('product', JSON.stringify(this.foodInCart));
    }catch (e) {
      alert(e);
    }
  }
}
