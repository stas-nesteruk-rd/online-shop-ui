import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoTitle = 'E-commerce';
  categories = ['Laptop', 'Phone', 'Tablet'];
  categorySelectTitle = 'Category';
  isLoginModalVisible = false;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  showLoginModal(): void {
    this.isLoginModalVisible = true;
  }

  onSignOut(): void {
    this.authService.logout();
  }
}
