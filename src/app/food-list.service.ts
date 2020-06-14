import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Food} from './module/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  urlFood = 'http://localhost:8081/api/food-list';
  urlAddFood = 'http://localhost:8081/api/create-food';
  urlUpdateFood = 'http://localhost:8081/api/edit-food';
  deleteFood = 'http://localhost:8081/api/edit-food';
  urlGetFood = 'http://localhost:8081/api/see-detail';
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<Food[]>{
    return this.httpClient.get<Food[]>(this.urlFood);
  }
  add(food: Food): Observable<Food>{
    return this.httpClient.post<Food>(this.urlAddFood, food);
  }
  updateProduct(food: Food): Observable<Food>{
    return this.httpClient.put<Food>(`${this.urlUpdateFood}/${food.id}`, food);
  }
  deleteProduct(id: number): Observable<Food>{
    return this.httpClient.delete<Food>(this.deleteFood + `/${id}`);
  }
  getFood(id: number): Observable<Food>{
    return this.httpClient.get<Food>(this.urlGetFood + `/${id}`);
  }
}
