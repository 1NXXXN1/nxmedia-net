export const dynamic = 'force-dynamic';

import { BestNewMovies } from '@/widgets/bestNewMovies';
import { MovieCategoriesSection } from '@/widgets/movieCategoriesSection';

export default function Home() {
  return (
    <article>
      <BestNewMovies />
      <MovieCategoriesSection />
    </article>
  );
}
