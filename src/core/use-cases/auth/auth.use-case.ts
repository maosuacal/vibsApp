import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {AuthData} from '../../../infrastructure/interfaces/auth-db.responses';
import {AuthMapper} from '../../../infrastructure/mappers/auth.mapper';
import {AuthRequest} from '../../entities/auth.entity';

interface Options {
  username: string;
  password: string;
  rol: string;
}

export const authUseCase = async (
  fetcher: HttpAdapter,
  options: Options,
): Promise<AuthRequest> => {
  try {
    const response = await fetcher.post<AuthData>('auth/auth/login', {
      username: options.username,
      password: options.password,
      rol: options.rol,
    });

    const result = AuthMapper.fromAuthDBResultToEntity(response);

    return result;
  } catch (error) {
    console.error('Error generado en el momento del consumo', error);
    throw new Error('Error en el servicio de autenticación');
  }
};
