import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { IProduct } from 'src/app/Models/iproduct';
import { AccountService } from 'src/app/Services/account.service';
import { FakeApiProductService } from 'src/app/Services/fake-api-product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit ,OnDestroy {
  ProductList: IProduct[] = [];

  constructor(private prodService: FakeApiProductService ,private accountServ:AccountService) {}
  ngOnDestroy(): void {
    this.mySubscription?.unsubscribe();
  }
  mySubscription: Subscription | undefined;
  ngOnInit(): void {
    this.mySubscription =this.prodService.getAll().subscribe({
      next: (data) => { this.ProductList = data; },
    });
  }

  delete(id:number){
   this.ProductList =   this.ProductList.filter((p)=>p.id != id)
   // call service `delete` method to remove the product with passed parameter `id`
  }
  isAdmin(){
    return this.accountServ.isAdmin();
   }
}
