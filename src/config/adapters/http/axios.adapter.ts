import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {HttpAdapter} from './http.adapter';

interface Options {
  baseUrl: string;
  params: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
    });
  }

  async get<T>(
    url: string,
    options?: {
      headers?: Record<string, string>;
      params?: Record<string, unknown>;
    },
  ): Promise<T> {
    try {
      const config: AxiosRequestConfig = {
        ...options,
        headers: {
          ...(options?.headers as Record<string, string>),
        },
      };
      const {data} = await this.axiosInstance.get<T>(url, config);
      return data;
    } catch (error) {
      throw new Error(`Error fetching get: ${url}`);
    }
  }

  async post<T>(
    url: string,
    data?: any,
    options?: {
      headers?: Record<string, string>;
    },
  ): Promise<T> {
    try {
      const config: AxiosRequestConfig = {
        ...options,
        headers: {
          ...(options?.headers as Record<string, string>),
          'Content-Type': 'application/json', // Establecer el encabezado Content-Type
        },
      };
      const {data: responseData} = await this.axiosInstance.post<T>(
        url,
        data,
        config,
      );
      return responseData;
    } catch (error) {
      throw new Error(`Error fetching post: ${url}`);
    }
  }
}
