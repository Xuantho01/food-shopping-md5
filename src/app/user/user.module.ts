import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { SectionComponent } from './section/section.component';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: '',
    component: LayoutComponent,
    children: [
      {path: '',
        component: ProductListComponent},
      {path: 'cart',
        component: CartComponent},
      {path: 'detail/:id',
        component: DetailComponent},
      {path: 'shopping-cart',
        component: ShoppingCartComponent},
    ]
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ProductListComponent,
    CartComponent,
    DetailComponent,
    SectionComponent,
    NavSearchComponent,
    ShoppingCartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
