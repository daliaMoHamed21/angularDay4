// import { Component, OnInit } from '@angular/core';
// import { IProduct } from 'src/app/Models/iproduct';
// import { ProductService } from 'src/app/Services/product.service';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent implements OnInit {
//   ProductList: IProduct[] = [];

//   constructor(private prodService: ProductService) {}

//   ngOnInit(): void {
//     this.ProductList = this.prodService.getAll() as IProduct[];
//   }

//   delete(id:number){
//    this.ProductList =   this.ProductList.filter((p)=>p.id != id)
  
//   }
// }
