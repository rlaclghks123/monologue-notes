import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  text: ReactNode;
}

export default function Button({ variant = 'primary', text, ...props }: Props) {
  const CLASS_NAME = {
    primary: 'h-full w-full bg-white pl-3 hover:bg-gray-100',
    secondary: 'hover:bg-gray-300 p-2 rounded-full ml-[-10px] w-9 h-9',
  };

  return (
    <button type="button" className={CLASS_NAME[variant]} {...props}>
      {text}
    </button>
  );
}
