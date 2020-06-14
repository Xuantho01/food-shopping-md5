import {Component, OnInit} from '@angular/core';
import {Category} from '../../module/Category';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FoodListService} from '../../food-list.service';
import {CategoryService} from '../../category.service';
import {Food} from '../../module/Food';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  categoryList: Category[] = [];

  constructor(private formProduct: FormBuilder,
              private foodService: FoodListService,
              public categoryService: CategoryService) {
  }

  foodForm = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    discount: new FormControl(),
    image: new FormControl(),
    category: new FormControl()
  });

  onSubmit() {
    const food: Food = {
      title: this.foodForm.value.title,
      price: this.foodForm.value.price,
      discount: this.foodForm.value.discount,
      image: this.foodForm.value.image,
      category: {
        id: this.foodForm.value.category
      }
    };
    this.foodService.add(food).subscribe(result => {
      this.foodForm.reset();
      alert('add successfully');
    }, error => {
      alert('failed');
    });
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categoryList = data;
    });
  }
}
