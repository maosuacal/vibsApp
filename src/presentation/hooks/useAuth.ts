import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {} from '../../core/entities/auth.entity';
import * as UseCases from '../../core/use-cases';
import {} from '../../config/adapters/auth.adapter';
import {HttpAdapter} from '../../config/adapters/http/http.adapter';
import {AuthRequest} from '../../core/entities/auth.entity';

export const useAuth = (fetcher: HttpAdapter) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [authData, setAuthData] = useState<AuthRequest | null>(null);

  const login = async (username: string, password: string, rol: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await UseCases.authUseCase(fetcher, {
        username,
        password,
        rol,
      });
      setAuthData(result);

      // Guardar token en AsyncStorage
      await AsyncStorage.setItem('authToken', result.access_token);

      return result;
    } catch (err: any) {
      if (err.message.includes('401')) {
        setError('Credenciales incorrectas');
      } else if (err.message.includes('timeout')) {
        setError('Tiempo de espera agotado. Verifica tu conexión.');
      } else {
        setError('Error desconocido');
      }
    } finally {
      setLoading(false);
    }
  };

  return {login, authData, loading, error};
};
