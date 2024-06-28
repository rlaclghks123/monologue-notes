import useTextArea from '@/hooks/useTextArea';

interface Props {
  title: string;
  labelId: string;
  max: number;
}

export default function BookDetailTextArea({ title, labelId, max }: Props) {
  const { value, charCount, ref, handleChange } = useTextArea();

  return (
    <div className="my-10 flex flex-col">
      <header className="flex justify-between">
        <label htmlFor={labelId}>{title}</label>
        <p>{`${charCount}/${max} 자`}</p>
      </header>

      <textarea
        id={labelId}
        ref={ref}
        onChange={handleChange}
        value={value}
        maxLength={max}
        className="mt-3 h-52 resize-none rounded-lg p-2"
      />
    </div>
  );
}
