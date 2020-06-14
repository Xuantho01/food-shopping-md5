import { Component, OnInit } from '@angular/core';
import {FoodListService} from '../../food-list.service';
import {ActivatedRoute} from '@angular/router';
import {Food} from '../../module/Food';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  foodCurrent: Food;
  constructor(private foodListService: FoodListService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = + this.activatedRoute.snapshot.paramMap.get('id');
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
}
