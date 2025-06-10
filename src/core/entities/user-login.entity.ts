export interface UserLoginRequest {
  username: string;
  password_hash: string;
  rol: 'APP_USER';
}

export interface UserLoginResult {
  user_id: string;
  username: string;
  access_token: string;
  role: string;
}
