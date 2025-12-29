import { apiInstance } from '@/shared/api/base';
import { Movie } from '../model/movie';
import { GetMovies } from '../model/getMovies';

export const getMoviesBySearch = (name: string) => {
  return apiInstance.get<GetMovies<Movie>>(`/movie/search?query=${name}`);
};
