'use client';
import { useState } from 'react';
type Props = {
  description: string;
  shortDescription: string;
};

export const MovieDescription = ({ description, shortDescription }: Props) => {
  const [isFullDesc, setIsFullDescription] = useState(false);
  const toggleDescription = () => setIsFullDescription((prev) => !prev);
  const text = isFullDesc ? description : shortDescription;
  const toggleText = isFullDesc ? 'Свернуть' : 'Читать далее';

  return (
    <div>
      <h2 className='text-xl font-semibold mb-2'>Описание</h2>
      <p className='leading-relaxed'>
        {text}
        <span
          onClick={toggleDescription}
          className='text-color2 cursor-pointer ml-2'
        >
          {toggleText}
        </span>
      </p>
    </div>
  );
};
