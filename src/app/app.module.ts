import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './Components/dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from '@angular/material/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './Components/header/header.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { HomeComponent } from './Components/home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { BodyComponent } from './Components/Admin/admin.component';
import { ProductsComponent } from './Components/products/products.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { PagesComponent } from './Components/pages/pages.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { AdminFormComponent } from './Components/AdminForm/adminform.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CategoryComponent } from './Components/category/category.component';
import { CategoryDialogComponent } from './Components/category-dialog/category-dialog.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    BodyComponent,
    ProductsComponent,
    StatisticsComponent,
    PagesComponent,
    SettingsComponent,
    AdminFormComponent,
    CategoryComponent,
    CategoryDialogComponent,
    ProductDetailsComponent,
    UserLoginComponent,
    MainLayoutComponent,
    DeleteComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
   MatIconModule,
   MatButtonModule,MatPaginatorModule,
   MatDialogModule, MatFormFieldModule,MatInputModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,ReactiveFormsModule,
   FormsModule,MatSidenavModule,MatListModule,MatMenuModule,MatDividerModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
