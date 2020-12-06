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
    {url: '/admin/dashboard', title: 'Dashboard', iconName: 'dashboard'},
    {url: '/admin/products', title: 'Products', iconName: 'list'},
    {url: '/admin/orders', title: 'Orders', iconName: 'analytics'},
    {url: '/admin/users', title: 'Users', iconName: 'groups'},
    {url: '/admin/factory', title: 'Factory', iconName: 'widgets'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSideBarToggle(): void {
    this.isSideBarOpened = !this.isSideBarOpened;
  }
}
