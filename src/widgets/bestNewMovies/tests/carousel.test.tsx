import { render, screen } from '@testing-library/react';
import { Carousel } from '../ui/carousel';
import { mockMovies } from '@/shared/mocks';

jest.mock('@/shared/ui/carousel', () => ({
  CarouselWrapper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid='carousel-wrapper'>{children}</div>
  ),
}));

jest.mock('@/entities/Movie', () => ({
  Movie: ({ id, name }: { id: number; name: string }) => (
    <div data-testid='movie' data-id={id}>
      {name}
    </div>
  ),
}));

describe('Carousel', () => {
  it('renders all movies in carousel', () => {
    render(<Carousel movies={mockMovies} />);
    const items = screen.getAllByTestId('movie');
    expect(items).toHaveLength(2);
    expect(screen.getByText('Movie One')).toBeInTheDocument();
    expect(screen.getByText('Movie Two')).toBeInTheDocument();
  });

  it('renders carousel', () => {
    render(<Carousel movies={mockMovies} />);
    expect(screen.getByTestId('carousel-wrapper')).toBeInTheDocument();
  });
});
