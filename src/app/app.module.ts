import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UserModule} from './user/user.module';
import {AdminModule} from './admin/admin.module';

const routes: Routes = [
  {path: '',
    loadChildren: () => import('./user/user.module').then( m => m.UserModule)},
  {path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule)}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    UserModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
