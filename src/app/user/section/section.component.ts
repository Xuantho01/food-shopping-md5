import { Component, OnInit } from '@angular/core';
import {Category} from '../../module/Category';
import {CategoryService} from '../../category.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  categoryList: Category[];
  showNav(){
    const x = document.getElementById('nav-bar');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
  constructor(private categoryService: CategoryService) {
  }
  ngOnInit() {
    this.categoryService.getAll().subscribe( result => {
      console.log(result);
      this.categoryList = result;
      console.log(this.categoryList);
    });
  }
}
