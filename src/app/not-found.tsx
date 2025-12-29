import { Button } from '@/shared/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-color2'>404</p>
        <h1 className='mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl'>
          Страница не найдена
        </h1>
        <p className='mt-6 text-lg font-medium text-pretty text-color2 sm:text-xl/8'>
          Возможно вы ошиблись адресом
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link href='/'>
            <Button>Вернуться на главную</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
