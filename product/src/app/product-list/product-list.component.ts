import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {

  // create products list array
  productsList = [
    {
      name : 'Orange',
      price : 200
    },
    {
      name : 'Orange',
      price : 200
    },
    {
      name : 'Orange',
      price : 200
    },
    {
      name : 'Orange',
      price : 200
    },
    {
      name : 'Orange',
      price : 200
    }
  ]
}
