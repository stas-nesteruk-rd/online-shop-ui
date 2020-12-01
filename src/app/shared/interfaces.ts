export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FireBaseAuthResponse {
  idToken: string;
  expireIn: string;
  email: string
}
