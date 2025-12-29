import Image from 'next/image';

import { MovieOverview } from './movieOverview';
import { MovieDescription } from './movieDescription';
import { Movie } from '@/entities/Movie/model/movie';
import FavoriteButton from '@/features/favoriteButton/ui/favoriteButton';

type Props = {
  movie: Movie;
};

export const MovieAbout = ({ movie }: Props) => {
  return (
    <div className='flex flex-col md:flex-row gap-6'>
      <Image
        width={300}
        height={400}
        src={movie.poster.url}
        alt='Movie Poster'
        className='w-full h-full md:w-64 rounded-lg'
      />
      <div className='md:col-span-2 space-y-4'>
        <MovieOverview
          name={movie.name}
          rating={movie.rating.kp}
          genres={movie.genres.map((g) => g.name).join(', ')}
          country={movie.countries.map((g) => g.name).join(', ')}
          year={movie.year}
          director={movie.persons
            .filter((person) => person.profession === 'режиссеры')
            .map((person) => person.name)
            .join(', ')}
          actors={movie.persons
            .filter((person) => person.profession === 'актеры')
            .slice(0, 5)
            .map((person) => person.name)
            .join(', ')}
          movieLength={movie.isSeries ? movie.seriesLength : movie.movieLength}
        />
        <MovieDescription
          shortDescription={movie.shortDescription}
          description={movie.description}
        />
        <div className='flex flex-col lg:flex-row gap-6'>
          <FavoriteButton movie={movie} />
        </div>
      </div>
    </div>
  );
};
