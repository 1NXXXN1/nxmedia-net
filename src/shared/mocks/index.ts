import { Movie } from '@/entities/Movie/model/movie';

export const mockMovies: Partial<Movie>[] = [
  {
    id: 1,
    name: 'Movie One',
    poster: { url: 'url1' },
    year: 2021,
    rating: { kp: 8.2 },
    isSeries: false,
    movieLength: 148,
  },
  {
    id: 2,
    name: 'Movie Two',
    poster: { url: 'url2' },
    year: 2022,
    rating: { kp: 7.5 },
    isSeries: true,
    seriesLength: 45,
  },
];
