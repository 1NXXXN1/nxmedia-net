import { apiInstance } from '@/shared/api/base';
import { Movie } from '../model/movie';

export const getMovie = (id: string) => {
  return apiInstance.get<Movie>(`/movie/${id}`);
};
