import { render, screen } from '@testing-library/react';
import { mockMovies } from '@/shared/mocks';
import { Movie } from '../ui/Movie';

describe('Movie', () => {
  it('renders movie information correctly', () => {
    render(<Movie {...mockMovies[0]} rating={mockMovies[0].rating?.kp} />);

    expect(screen.getByText('Movie One')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('8.2')).toBeInTheDocument();
  });
});
