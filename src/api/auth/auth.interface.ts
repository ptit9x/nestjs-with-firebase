export interface ILogin {
  email: string;
  password: string;
}

export interface RegisterResponse {
  uid: string;
  email: string;
  emailVerified: boolean;
  disabled: boolean;
}
