import { getMovies } from '@/entities/Movie/api/getMovies';
import { useQuery } from '@tanstack/react-query';
import { clearObject } from '../lib/clearObject';

type useMoviesQueryProps = {
  queryKey: string | string[];
  page: string;
  genre: string;
  year: string;
  rating: string;
  sort: string;
  type: 'movie' | 'tv-series' | 'cartoon';
};

export const useMoviesQuery = ({
  queryKey,
  page,
  genre,
  rating,
  year,
  sort,
  type,
}: useMoviesQueryProps) => {
  const params = clearObject({
    page,
    limit: 20,
    sortField: [sort, 'votes.kp'],
    sortType: ['-1', '-1'],
    type,
    'genres.name': genre,
    'rating.kp': rating,
    year,
    selectFields: [
      'poster',
      'name',
      'id',
      'year',
      'movieLength',
      'rating',
      'seriesLength',
      'isSeries',
    ],
    notNullFields: ['poster.url', 'name'],
  });

  return useQuery({
    queryKey: [queryKey],
    retry: false,
    queryFn: () => getMovies(params),
  });
};
