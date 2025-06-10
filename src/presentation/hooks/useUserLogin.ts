import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HttpAdapter} from '../../config/adapters/http/http.adapter';
import * as UseCases from '../../core/use-cases';
import {
  UserLoginRequest,
  UserLoginResult,
} from '../../core/entities/user-login.entity';

export const useUserLogin = (fetcher: HttpAdapter) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserLoginResult | null>(null);

  const loginUser = async (
    username: string,
    password: string,
    rol = 'APP_USER',
  ) => {
    setLoading(true);
    setError(null);
    try {
      const appToken = await AsyncStorage.getItem('authToken'); // obtenido en authUseCase
      if (!appToken) {
        throw new Error('Token de aplicación no disponible');
      }

      const loginRequest: UserLoginRequest = {
        username,
        password_hash: password,
        rol: 'APP_USER',
      };

      const result = await UseCases.userLoginUseCase(
        fetcher,
        appToken,
        loginRequest,
      );
      setUserData(result);

      await AsyncStorage.setItem('userToken', result.access_token);
      await AsyncStorage.setItem('userInfo', JSON.stringify(result));

      return result;
    } catch (err) {
      console.error(err);
      setError('Credenciales inválidas o error en el servidor');
    } finally {
      setLoading(false);
    }
  };

  return {loginUser, userData, loading, error};
};
