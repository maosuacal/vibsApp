export interface AuthData {
  access_token: string;
  token_type: string;
  user: User;
}

export interface User {
  username: string;
  role: string;
}
