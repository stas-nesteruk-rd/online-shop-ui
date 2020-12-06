import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  logoTitle = 'E-commerce';
  isSideBarOpened = false;
  links = [
    {url: '/admin/dashboard', name: 'Dashboard'},
    {url: '/admin/products', name: 'Products'},
    {url: '/admin/orders', name: 'Orders'},
    {url: '/admin/users', name: 'Users'},
    {url: '/admin/factory', name: 'Factory'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSideBarToggle(): void {
    this.isSideBarOpened = !this.isSideBarOpened;
  }
}
