import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from './module/Category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  urlCategory = 'http://localhost:8081/api/category-form';
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.urlCategory);
  }
}
