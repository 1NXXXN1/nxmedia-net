import { render, screen } from '@testing-library/react';
import { useMoviesQuery } from '@/shared/hooks/useMoviesQuery';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { genres, ratings, years } from '@/shared/config/filtersData';
import { MovieList } from '../ui/movieList';
import { mockMovies } from '@/shared/mocks';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

jest.mock('@/shared/hooks/useMoviesQuery');
jest.mock('@/features/sortingPanel', () => ({
  SortingPanel: () => <div>SortingPanel</div>,
}));
jest.mock('@/shared/ui/loader', () => ({
  Loader: () => <div>Loader</div>,
}));
jest.mock('@/features/pagination', () => ({
  Pagination: ({ currentPage }: { currentPage: number }) => (
    <div>Pagination: {currentPage}</div>
  ),
}));
jest.mock('@/entities/Movie', () => ({
  Movie: ({ name }: { name: string }) => <div>{name}</div>,
}));

const mockSearchParams = new URLSearchParams({
  page: '2',
  genre: genres[0].value,
  rating: ratings[0].value,
  year: years[0].value,
  sort: '1',
});

describe('MovieList', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
    (usePathname as jest.Mock).mockReturnValue('/movies');
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
  });

  it('renders loader when loading', () => {
    (useMoviesQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(<MovieList type='movie' />);

    expect(screen.getByText('Loader')).toBeInTheDocument();
  });

  it('renders movie list and pagination when data is loaded', () => {
    (useMoviesQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      data: {
        pages: 5,
        docs: mockMovies,
      },
    });

    render(<MovieList type='movie' />);

    expect(screen.getByText('Movie One')).toBeInTheDocument();
    expect(screen.getByText('Movie Two')).toBeInTheDocument();
  });

  it('renders correct heading text', () => {
    (useMoviesQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      data: { pages: 1, docs: [] },
    });

    render(<MovieList type='movie' />);

    const genreLabel = genres[0].label;
    const ratingLabel = ratings[0].label;
    const yearLabel = years[0].label;

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      `Фильмы: ${genreLabel}, ${ratingLabel}, ${yearLabel}`
    );
  });
});
