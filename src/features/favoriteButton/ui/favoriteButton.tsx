'use client';
import { Movie } from '@/entities/Movie/model/movie';
import { Button } from '@/shared/ui/button';
import { useFavorite } from '../hooks/useFavorite';

type Props = {
  movie: Movie;
};

const FavoriteButton = ({ movie }: Props) => {
  const { isFavorite, toggleFavorite } = useFavorite(movie);

  return (
    <Button
      className={`${isFavorite && '!bg-color1 text-background'}`}
      onClick={toggleFavorite}
    >
      {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
    </Button>
  );
};
export default FavoriteButton;
