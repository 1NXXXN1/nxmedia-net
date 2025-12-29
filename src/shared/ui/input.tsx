import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...props }: Props) => {
  const baseStyles =
    'w-full border rounded-lg bg-background border-color2 placeholder-foreground';
  return (
    <input className={`${baseStyles} ${className}`} {...props} />
  );
};
