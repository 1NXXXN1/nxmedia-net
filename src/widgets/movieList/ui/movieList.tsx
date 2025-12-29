'use client';
import { Movie } from '@/entities/Movie';
import { Movie as MovieType } from '@/entities/Movie/model/movie';
import { Pagination } from '@/features/pagination';
import { SortingPanel } from '@/features/sortingPanel';
import { genres, ratings, years } from '@/shared/config/filtersData';
import { typeLabels } from '@/shared/config/typeLabels ';
import { useMoviesQuery } from '@/shared/hooks/useMoviesQuery';
import useWidth from '@/shared/hooks/useWidth';
import { getPageNumbers } from '@/shared/lib/getPageNumbers';
import { Loader } from '@/shared/ui/loader';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
  type: 'movie' | 'tv-series' | 'cartoon';
};

export const MovieList = ({ type }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const width = useWidth();

  const page = searchParams.get('page') || '';
  const genre = searchParams.get('genre') || '';
  const rating = searchParams.get('rating') || '';
  const year = searchParams.get('year') || '';
  const sort = searchParams.get('sort') || '';

  const { data, isLoading } = useMoviesQuery({
    queryKey: [page, genre, rating, year, sort, type],
    page,
    genre,
    rating,
    year,
    sort,
    type,
  });

  const totalPages = data?.pages || 1;
  const currentPage = Number(page);
  const pages = getPageNumbers(currentPage, totalPages, width > 380 ? 2 : 1);

  const typeLabel = typeLabels[type];
  const genreLabel = genres.find((item) => item.value === genre)?.label;
  const ratingLabel = ratings.find((item) => item.value === rating)?.label;
  const yearLabel = years.find((item) => item.value === year)?.label;

  const setPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <article className='min-h-screen'>
      <h1 className='text-xl md:text-3xl font-bold mb-4'>
        {`${typeLabel}: ${genreLabel}, ${ratingLabel}, ${yearLabel}`}
      </h1>
      <SortingPanel />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
            {data?.docs.map((movie: MovieType) => (
              <Movie
                key={movie.id}
                id={movie.id}
                poster={movie.poster?.url}
                name={movie.name}
                year={movie.year}
                movieLength={
                  movie.isSeries ? movie.seriesLength : movie.movieLength
                }
                rating={movie.rating?.kp}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            pages={pages}
            setPage={setPage}
          />
        </>
      )}
    </article>
  );
};
