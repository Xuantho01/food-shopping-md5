import { Component, OnInit } from '@angular/core';
import {Food} from '../../module/Food';
import {FoodListService} from '../../food-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  foodList: Food[];
  constructor( private foodService: FoodListService) {}
  ngOnInit(){
    this.foodService.getAll().subscribe(result => {
      console.log(result);
      this.foodList = result;
    });
  }
  // addInCart(){
  //   this.addNewCart.addCart();
  // }
}
