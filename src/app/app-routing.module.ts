import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './Components/Admin/admin.component';
import { CategoryComponent } from './Components/category/category.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { PagesComponent } from './Components/pages/pages.component';
import { ProductsComponent } from './Components/products/products.component';
import { SettingsComponent } from './Components/settings/settings.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'page', component: PagesComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'admin', component: BodyComponent },
  { path: 'category', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
