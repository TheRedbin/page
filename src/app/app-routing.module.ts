import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { FormComponent } from './components/form/form.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'', component: HomecomponentComponent},
  {path:'form', component: FormComponent},
  {path:'proyects', component: ProyectsComponent},
  {path:'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
