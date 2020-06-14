import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { TaskComponent } from './task/task.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateComponent } from './update/update.component';
import { OderListComponent } from './oder-list/oder-list.component';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from '../user/layout/layout.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '',
    component: LayoutComponent,
    children: [
      {path: 'add',
        component: AddComponent},
      {path: 'oder-list',
        component: OderListComponent},
      {path: 'product-list',
        component: ProductListComponent},
      {path: 'user-list',
        component: ProductListComponent},
      {path: 'update',
        component: ProductListComponent}
    ]
  },
];

@NgModule({
  declarations: [AddComponent, TaskComponent, ProductListComponent, UpdateComponent, OderListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AdminModule { }
