'use client';
import { Movie as MovieType } from '@/entities/Movie/model/movie';
import { Movie } from '@/entities/Movie';
import { CarouselWrapper } from '@/shared/ui/carousel';
import { Navigation } from 'swiper/modules';

type Props = {
  isFirst?: boolean;
  genre: string;
  movies: MovieType[];
};

export const MovieCategorySection = ({ movies, isFirst, genre }: Props) => {
  return (
    <section
      className={`${
        isFirst ? 'mt-[550px]' : 'mt-12'
      } border-t pt-4 border-color2`}
    >
      <h2 className='text-2xl font-medium mb-2'>{genre}</h2>
      <CarouselWrapper
        modules={[Navigation]}
        spaceBetween={15}
        breakpoints={{
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
          },
          800: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            spaceBetween: 30,
          },
          1100: {
            slidesPerView: 4,
            slidesPerGroup: 2,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 5,
            slidesPerGroup: 3,
            spaceBetween: 40,
          },
        }}
      >
        {movies.map((movie: MovieType) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster={movie.poster?.url}
            name={movie.name}
            year={movie.year}
            movieLength={
              movie.isSeries ? movie.seriesLength : movie.movieLength
            }
            rating={movie.rating.kp}
          />
        ))}
      </CarouselWrapper>
    </section>
  );
};
