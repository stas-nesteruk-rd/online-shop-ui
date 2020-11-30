import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProductDetails(): void {
    console.log('clicked');
    this.router.navigate(['/products', 2312]);
  }
}
