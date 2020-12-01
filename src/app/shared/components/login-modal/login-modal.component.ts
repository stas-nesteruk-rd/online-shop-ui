import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {User} from '../../interfaces';
import {AuthService} from '../../services/auth.services';

const MIN_PASSWORD_LENGTH = 6;
const ADMIN = 'ADMIN';
const ADMIN_EMAIL = 'admin@email.com';
const ADMIN_PASS = 'adminpass';
const USER_EMAIL = 'user@email.com';
const USER_PASS = 'userpass';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  isFetching = false;
  isFormValuesChanged = false;
  @Output() closeModal = new EventEmitter<void>();
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(MIN_PASSWORD_LENGTH)
      ])
    });
  }

  onSignIn(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.isFetching = true;
    this.isFormValuesChanged = false;
    this.authService.login(user).subscribe(() => {
      this.loginForm.reset();
      this.isFetching = false;
      this.closeModal.emit();
    });
  }

  setCredential(type: string): void {
    if (type === ADMIN) {
      this.loginForm.get('email').setValue(ADMIN_EMAIL);
      this.loginForm.get('password').setValue(ADMIN_PASS);
      return;
    }

    this.loginForm.get('email').setValue(USER_EMAIL);
    this.loginForm.get('password').setValue(USER_PASS);
  }

  onChange(): void {
    console.log('change', this.isFormValuesChanged);
    this.isFormValuesChanged = true;
  }
}
