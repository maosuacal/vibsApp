import {UserLoginResponse} from '../interfaces/user-login.response';
import {UserLoginResult} from '../../core/entities/user-login.entity';

export class UserLoginMapper {
  static fromResponseToEntity(response: UserLoginResponse): UserLoginResult {
    return {
      user_id: response.user_id,
      username: response.username,
      access_token: response.access_token,
      role: response.role,
    };
  }
}
