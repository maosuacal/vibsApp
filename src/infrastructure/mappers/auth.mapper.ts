import {AuthRequest} from '../../core/entities/auth.entity';
import type {AuthData} from '../interfaces/auth-db.responses';

export class AuthMapper {
  static fromAuthDBResultToEntity(result: AuthData): AuthRequest {
    return {
      access_token: result.access_token,
      token_type: result.token_type,
      username: result.user.username,
      role: result.user.role,
    };
  }
}
