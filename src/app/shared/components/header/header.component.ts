import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoTitle = 'E-commerce';
  categories = ['Laptop', 'Phone', 'Tablet'];
  categorySelectTitle = 'Category';
  constructor() { }

  ngOnInit(): void {
  }

}
