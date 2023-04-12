import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"login",component:LoginpageComponent},
  {path:"productdetail",component:ProductdetailsComponent},
  {path:"product",component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
