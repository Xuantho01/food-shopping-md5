import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category.service';
import {Category} from '../../module/Category';
import {FoodListService} from '../../food-list.service';
import {Food} from '../../module/Food';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // categoryList: Category[] = [];
  foodList: Food[];
  constructor(private foodListService: FoodListService,
              private route: Router) { }

  ngOnInit(): void {
    this.foodListService.getAll().subscribe(result => {
      console.log(result);
      this.foodList = result;
    });
  }
  delete(id: number){
    this.foodListService.deleteProduct(id).subscribe(() => {
      alert('success');
      // this.route.navigate(['/admin/product-list']);
    },
      error => alert('failed'));
  }
}
