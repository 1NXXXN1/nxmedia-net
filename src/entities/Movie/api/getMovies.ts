import qs from 'qs';

import { apiInstance } from '@/shared/api/base';
import { Movie } from '../model/movie';
import { GetMovies } from '../model/getMovies';

type GetMoviesParams = {
  [key: string]: string | number | string[];
};

export const getMovies = (params: GetMoviesParams) => {
  const queryString = qs.stringify(params, { arrayFormat: 'repeat' });

  return apiInstance.get<GetMovies<Movie>>(`/movie?${queryString}`);
};
