import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, subscribeOn } from 'rxjs';
import { IProduct } from 'src/app/Models/iproduct';
import { FakeApiProductService } from 'src/app/Services/fake-api-product.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined = {
    id: 3,
    name: 'lab',
    description: 'lab',
    discount: 3,
    price: 122,
    onSale: false,
    quantity: 0,
    img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  };

  id: number = 3;
  constructor(
    private activeRoute: ActivatedRoute,
    private proService: FakeApiProductService,
    private myRouter: Router
  ) {}
  ngOnDestroy(): void {
    this.mySubscription?.unsubscribe();
  }

  mySubscription: Subscription | undefined;

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];

    this.mySubscription = this.proService.getById(this.id).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (error) => {
        this.product = undefined;
      },
    });

  }
}

    
    
  


