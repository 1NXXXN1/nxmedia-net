const KP_KEYS = process.env.KP_API_KEYS?.split(",") || [];
let KP_INDEX = 0;
function getKey() {
  const key = KP_KEYS[KP_INDEX];
  KP_INDEX = (KP_INDEX + 1) % KP_KEYS.length;
  return key;
}

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import { API_URL } from '@/shared/config/apiUrl';
import { toast } from 'react-toastify';

class ApiInstance {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
      headers: {
        'X-API-KEY': getKey(),
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Netlify; Next.js)',
      },
    });
  }

  async get<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios.get(
        endpoint,
        options
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      console.error(err?.response?.data?.message || err.message);

      if (typeof window !== 'undefined') {
        toast(err?.response?.data?.message || err.message || 'Ошибка');
      }

      throw error;
    }
  }
}

export const apiInstance = new ApiInstance();
