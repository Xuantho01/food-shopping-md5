import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category.service';
import {Category} from '../../module/Category';
import {FoodListService} from '../../food-list.service';
import {Food} from '../../module/Food';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // categoryList: Category[] = [];
  foodList: Food[] = [];
  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.getAll().subscribe(result => {
      console.log(result);
      this.foodList = result;
    });
  }
}
