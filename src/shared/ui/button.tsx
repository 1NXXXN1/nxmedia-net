import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...props }: Props) => {
  const baseStyles =
    'cursor-pointer bg-color2 hover:bg-color3 rounded-lg px-4 py-1';
  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};
