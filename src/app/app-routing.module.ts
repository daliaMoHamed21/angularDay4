import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/Core/home/home.component';
import { LoginComponent } from './Component/Core/login/login.component';
import { NotFoundComponent } from './Component/Core/not-found/not-found.component';
import { ContactsComponent } from './Component/Core/contacts/contacts.component';
import { ProductsComponent } from './Component/Core/products/products.component';
import { ProductDetailsComponent } from './Component/Core/product-details/product-details.component';
import { ProductFormComponent } from './Component/Core/product-form/product-form.component';
import { authenticationGuard } from './Services/authentication.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'products/details/:id',
    component: ProductDetailsComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'products/add',
    component: ProductFormComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'products/edit/:id',
    component: ProductFormComponent,
    canActivate: [authenticationGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactsComponent },
  {path:'register' , component:RegisterComponent},
  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
