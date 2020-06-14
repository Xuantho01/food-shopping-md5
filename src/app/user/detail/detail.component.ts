import { Component, OnInit } from '@angular/core';
import {FoodListService} from '../../food-list.service';
import {ActivatedRoute} from '@angular/router';
import {Food} from '../../module/Food';
import {CartService} from '../../cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  foodCurrent: Food;
  foodList: Food[];

  constructor(private foodListService: FoodListService,
              private activatedRoute: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.foodListService.getFood(id).subscribe(
      next => {
        this.foodCurrent = next;
      },
      error => {
        console.log(error);
        this.foodCurrent = null;
      }
    );
  }

  addToCart(id: number) {
    // try {
    //   this.cartService.foodInCart.push(this.foodListService.getFood(id));
    //   localStorage.setItem('product', JSON.stringify(this.cartService.foodInCart));
    // }catch (e) {
    //   alert(e);
    // }
  }
}
