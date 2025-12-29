import { genres, ratings, sorting, years } from '@/shared/config/filtersData';
import { Dropdown } from '../../../shared/ui/dropdown';

export const SortingPanel = () => {
  return (
    <div className='flex flex-wrap justify-between gap-4 mb-8'>
      <Dropdown name={{ label: 'Жанры', name: 'genre' }} data={genres} />
      <Dropdown name={{ label: 'Рейтинг', name: 'rating' }} data={ratings} />
      <Dropdown name={{ label: 'Годы', name: 'year' }} data={years} />
      <Dropdown
        name={{ label: 'Сортировка', name: 'sort' }}
        data={sorting}
        alignRight
      />
    </div>
  );
};
