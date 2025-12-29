import { render, screen } from '@testing-library/react';
import { mockMovies } from '@/shared/mocks';
import { MovieCategorySection } from '../ui/movieCategorySection';

jest.mock('@/shared/ui/carousel', () => ({
  CarouselWrapper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid='carousel-wrapper'>{children}</div>
  ),
}));

jest.mock('@/entities/Movie', () => ({
  Movie: ({ name }: { name: string }) => <div>{name}</div>,
}));

describe('MovieCategorySection', () => {
  it('renders genre title and movies', () => {
    render(<MovieCategorySection movies={mockMovies} genre='Фантастика' />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Фантастика'
    );

    expect(screen.getByText('Movie One')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-wrapper')).toBeInTheDocument();
  });

  it('applies correct margin for first section', () => {
    const { container } = render(
      <MovieCategorySection
        movies={mockMovies}
        genre='Боевики'
        isFirst={true}
      />
    );

    const section = container.querySelector('section');
    expect(section).toHaveClass('mt-[550px]');
  });

  it('applies default margin for non-first section', () => {
    const { container } = render(
      <MovieCategorySection movies={mockMovies} genre='Драма' />
    );

    const section = container.querySelector('section');
    expect(section).toHaveClass('mt-12');
  });
});
