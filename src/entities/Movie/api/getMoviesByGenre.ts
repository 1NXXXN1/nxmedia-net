import { getMovies } from './getMovies';

export const getMoviesByGenre = (genres: [string, string]) => {
  const [includeGenre, excludeGenre] = genres;

  return getMovies({
    page: 1,
    limit: 30,
    sortField: ['votes.kp', 'rating.kp'],
    sortType: ['-1', '-1'],
    'genres.name': [`+${includeGenre}`, `!${excludeGenre}`],
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
};
