import {Category} from './Category';

export interface Food {
  id?: number;
  title: string;
  price: number;
  discount: string;
  image: string;
  category: Category;
}
