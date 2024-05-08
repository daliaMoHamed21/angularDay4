// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import { IProduct } from 'src/app/Models/iproduct';
// import { ProductService } from 'src/app/Services/product.service';

// @Component({
//   selector: 'app-product-form',
//   templateUrl: './product-form.component.html',
//   styleUrls: ['./product-form.component.css']
// })
// export class ProductFormComponent implements OnInit {
// sendValues($event: SubmitEvent) {
// throw new Error('Method not implemented.');
// }
//   myForm: FormGroup = new FormGroup({
//     id: new FormControl(''),
//     name: new FormControl('', [Validators.required, Validators.minLength(4)]),
//     img: new FormControl('', Validators.required),
//     description: new FormControl('', [Validators.required, Validators.minLength(7)]),
//     price: new FormControl('', Validators.required),
//     onSale: new FormControl(''),
//     discount: new FormControl(''),
//     quantity: new FormControl(''),
//   });
// nameConttrol: any;
// descriptionConttrol: any;
// priceConttrol: any;
// productForm: any;
// productNameControl: any;
// productDescriptionControl: any;
// productImageControl: any;
// productPriceControl: any;
// productQuantityControl: any;
// productDiscountControl: any;
// prodForm: any;

//   constructor(
//     private prodService: ProductService,
//     private myRouter: Router,
//     private actRoute: ActivatedRoute
//   ) {}
//   id: number = 0;
//   ngOnInit(): void {
//     this.id = this.actRoute.snapshot.params['id'];
//     if (this.id != 0) {
//       // edit
//       var product: IProduct = this.prodService.getById(this.id) as IProduct;
//       this.myForm.controls['id'].setValue(product.id);
//       this.myForm.controls['name'].setValue(product.name);
//       this.myForm.controls['description'].setValue(product.description);
//       this.myForm.controls['img'].setValue(product.img);
//       this.myForm.controls['price'].setValue(product.price);
//       this.myForm.controls['discount'].setValue(product.discount);
//       this.myForm.controls['quantity'].setValue(product.quantity);
//       this.myForm.controls['onSale'].setValue(product.onSale);
      
//     }
//   }

//   onSubmit(e: Event) {
//     e.preventDefault();
//     if (this.myForm.valid) {
//       if(this.id){
//          this.prodService.edit(this.id, this.myForm.value);
//       }else{
//         // add
//         this.prodService.add(this.myForm.value);
//       }
//       this.myRouter.navigate(['/products']);
//     }
//   }
// }
