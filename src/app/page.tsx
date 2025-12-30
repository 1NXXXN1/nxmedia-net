import { BestNewMovies } from '@/widgets/bestNewMovies';
import { MovieCategoriesSection } from '@/widgets/movieCategoriesSection';

export const dynamic = 'force-dynamic';
export default function Home() {
  return (
    <article>
      <BestNewMovies />
      <MovieCategoriesSection />
    </article>
  );
}
