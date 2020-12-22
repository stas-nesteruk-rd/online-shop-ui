import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

import {FireBaseAuthResponse, User} from '../interfaces';
import {environment} from '../../../environments/environment';

const API_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
const UNABLE_TO_LOGIN_ERR_MSG = 'Unable to login';

@Injectable({ providedIn: 'root'})
export class AuthService {
  public error$: Subject<string> = new Subject<string>();
  constructor(
    private http: HttpClient,
    private toastService: ToastrService
  ) {}

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-expire'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }

    return localStorage.getItem('fb-token');
  }

  get userEmail(): string {
    return localStorage.getItem('user-email');
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(API_URL + environment.apiKey, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: FireBaseAuthResponse | null): void {
    if (response) {
      console.log(response);
      const expireDate = new Date(new Date().getTime() + +response.expireIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-expire', expireDate.toString());
      localStorage.setItem('user-email', response.email);
    } else {
      localStorage.clear();
    }
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const { message } = error.error.error;
    if (message) {
      this.error$.next(UNABLE_TO_LOGIN_ERR_MSG);
      this.toastService.error(UNABLE_TO_LOGIN_ERR_MSG, 'Auth error');
    }

    return throwError(error);
  }
}
