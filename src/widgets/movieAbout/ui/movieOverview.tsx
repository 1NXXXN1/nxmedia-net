import { formatFilmLength } from '@/shared/lib/formatFilmLength';

type Props = {
  name: string;
  genres: string;
  year: number;
  rating: number;
  country: string;
  director: string;
  actors: string;
  movieLength: number;
};

export const MovieOverview = ({
  name,
  genres,
  country,
  year,
  director,
  actors,
  rating,
  movieLength,
}: Props) => {
  const info = [
    { label: 'Год', value: year },
    { label: 'Жанр', value: genres },
    { label: 'Страна', value: country },
    { label: 'Режиссер', value: director },
    { label: 'Актеры', value: actors },
  ];
  return (
    <>
      <h1 className='text-3xl font-bold'>{name}</h1>
      <div className='text-color1'>
        <div className='flex gap-2'>
          <p className='w-max bg-color2 px-2 py-1 rounded-lg text-sm mb-4'>
            {rating.toFixed(1)}
          </p>
          <p className='px-2 py-1 text-foreground text-sm mb-4'>
            {formatFilmLength(movieLength)}
          </p>
        </div>
        {info.map(({ label, value }) => (
          <p key={label}>
            <span className='font-semibold'>{label}:</span> {value}
          </p>
        ))}
      </div>
    </>
  );
};
