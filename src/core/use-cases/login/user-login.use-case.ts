import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {
  UserLoginRequest,
  UserLoginResult,
} from '../../entities/user-login.entity';
import {UserLoginResponse} from '../../../infrastructure/interfaces/user-login.response';
import {UserLoginMapper} from '../../../infrastructure/mappers/user-login.mapper';

export const userLoginUseCase = async (
  fetcher: HttpAdapter,
  token: string,
  data: UserLoginRequest,
): Promise<UserLoginResult> => {
  try {
    const response = await fetcher.post<UserLoginResponse>(
      'users/users/login',
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return UserLoginMapper.fromResponseToEntity(response);
  } catch (error) {
    console.error('Error al hacer login de usuario final', error);
    throw new Error('Error en login de usuario final');
  }
};
