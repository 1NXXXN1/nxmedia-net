'use client';
import { Autoplay, Navigation } from 'swiper/modules';
import { Movie } from '@/entities/Movie';
import { Movie as MovieType } from '@/entities/Movie/model/movie';
import { CarouselWrapper } from '@/shared/ui/carousel';

type Props = {
  movies: MovieType[];
};

export const Carousel = ({ movies }: Props) => {
  return (
    <CarouselWrapper
      className='h-[500px]'
      modules={[Autoplay, Navigation]}
      spaceBetween={30}
      slidesPerView={4}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1400: {
          slidesPerView: 4,
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
          rating={movie.rating.kp}
          movieLength={movie.isSeries ? movie.seriesLength : movie.movieLength}
        />
      ))}
    </CarouselWrapper>
  );
};
