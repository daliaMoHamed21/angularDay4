import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { FakeApiProductService } from 'src/app/Services/fake-api-product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit,OnDestroy {
  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    img: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(7)]),
    price: new FormControl('', [Validators.required, Validators.min(100)]),
    quantity: new FormControl('', [Validators.required]),
    onSale: new FormControl(''),
    discount: new FormControl('',[Validators.required, Validators.min(0.05), Validators.max(0.25)]),
  });

  constructor(
    private prodService: FakeApiProductService,
    private myRouter: Router,
    private actRoute: ActivatedRoute
  ) {}
  ngOnDestroy(): void {
    this.myGetSub?.unsubscribe();
    this.myActionSub?.unsubscribe();
  }
  id: number = 0;

  myGetSub: Subscription | undefined;
  myActionSub: Subscription | undefined;
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    if (this.id != 0) {
      // edit
      this.myGetSub = this.prodService.getById(this.id).subscribe((data) => {
        this.myForm.patchValue(data); 
      });
    }
  }

  get nameConttrol() {
    return this.myForm.controls['name'];
  }
  get priceConttrol() {
    return this.myForm.controls['price'];
  }
  get descriptionConttrol() {
    return this.myForm.controls['description'];
  }

  get productNameControl(){
    return this.myForm.get('name');
    }

  get productDescriptionControl(){
    return this.myForm.get('description');
  }
  get productImageControl(){
    return this.myForm.get('image');
  }
  get productPriceControl(){
    return this.myForm.get('price');
  }
  get productQuantityControl(){
    return this.myForm.get('quantity');
  }
  get productDiscountControl(){
    return this.myForm.get('discount');
  }
  onSubmit(e: Event) {
    
    e.preventDefault();
    
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      if (this.id) {
        //edit
        
        this.myActionSub = this.prodService.Edit(this.id, this.myForm.value).subscribe();
      } else {
        // add
        this.myActionSub =  this.prodService.Add(this.myForm.value).subscribe();
      }
      this.myRouter.navigate(['/products']);
    }
  }
}