import { Component, OnInit } from '@angular/core';
import {Category} from '../../module/Category';
import {CategoryService} from '../../category.service';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent implements OnInit {
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
    });
  }
}
