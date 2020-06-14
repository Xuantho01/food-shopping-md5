import { Component, OnInit } from '@angular/core';
import {Category} from '../../module/Category';
import {Food} from '../../module/Food';
import {CategoryService} from '../../category.service';
import {FoodListService} from '../../food-list.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  categoryList: Category[] = [];
  foodCurrent: Food;
  foodForm: FormGroup;
  constructor(private categoryService: CategoryService,
              private foodListService: FoodListService,
              private  activatedRoute: ActivatedRoute,
              private  router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(data => {
      this.categoryList = data;
    });
    this.foodForm = this.formBuilder.group({
      id: [''],
      title: [''],
      price: [''],
      discount: [''],
      image: [''],
      category: this.formBuilder.group(
        {
          id: ['']
        })
    });
    const id = + this.activatedRoute.snapshot.paramMap.get('id');
    this.foodListService.getFood(id).subscribe(
      next => {
        this.foodCurrent = next;
        this.foodForm.patchValue(this.foodCurrent);
      },
      error => {
        console.log(error);
        this.foodCurrent = null;
      }
    );
  }

  onSubmit() {
    // if (this.foodForm.valid) {
      const { value } = this.foodForm;
      const data = {
        ...this.foodCurrent,
        ...value
      };
      debugger;
      this.foodListService.updateProduct(data).subscribe(
        () => {
          alert('successfully');
          // this.router.navigate(['/']);
        },
        error => console.log(error)
      );
    }
}

