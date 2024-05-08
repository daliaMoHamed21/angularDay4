import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/Shared/navbar/navbar.component';
import { FooterComponent } from './Component/Shared/footer/footer.component';
import { HomeComponent } from './Component/Core/home/home.component';
import { LoginComponent } from './Component/Core/login/login.component';
import { NotFoundComponent } from './Component/Core/not-found/not-found.component';
import { ContactsComponent } from './Component/Core/contacts/contacts.component';
import { ProductsComponent } from './Component/Core/products/products.component';
import { ProductDetailsComponent } from './Component/Core/product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './Component/Core/product-form/product-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component'; // Import RouterModule

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    ContactsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule, // Include RouterModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
