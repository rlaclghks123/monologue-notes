import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  errorMessage?: string;
}

export default function Input({ label, id, errorMessage, ...props }: Props) {
  return (
    <div className="flex h-14 items-start">
      {label && (
        <label htmlFor={id} className="w-14 py-1">
          {label}
        </label>
      )}

      <div className="flex flex-col gap-1">
        <input id={id} {...props} className="w-72 rounded-md bg-white p-1" />
        {errorMessage && <p className="text-xs text-peach-fuzz">{errorMessage}</p>}
      </div>
    </div>
  );
}
