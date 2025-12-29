import { getMovies } from '@/entities/Movie/api/getMovies';
import { Carousel } from './carousel';

export const BestNewMovies = async () => {
  const data = await getMovies({
    page: 1,
    limit: 20,
    sortField: ['votes.kp', 'rating.kp'],
    sortType: ['-1', '-1'],
    'releaseYears.start': '2024',
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

  return (
    <section className='absolute top-25 left-5 right-5'>
      <Carousel movies={data.docs} />
    </section>
  );
};
