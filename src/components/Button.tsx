import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  text: string;
}

export default function Button({ variant = 'primary', text, ...props }: Props) {
  const CLASS_NAME = {
    primary: 'h-full w-full bg-white pl-3 hover:bg-gray-100',
    secondary: '',
  };

  return (
    <button type="button" className={CLASS_NAME[variant]} {...props}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
};
