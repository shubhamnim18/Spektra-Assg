import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'prod',component:ProductComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
