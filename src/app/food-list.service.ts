import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Food} from './module/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  urlFood = 'http://localhost:8081/api/food-list';
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<Food[]>{
    return this.httpClient.get<Food[]>(this.urlFood);
  }
  add(food: Food): Observable<Food>{
    return this.httpClient.post<Food>(this.urlFood, food);
  }
}
