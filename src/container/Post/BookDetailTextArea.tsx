import { useFormContext, useWatch } from 'react-hook-form';

interface Props {
  title: string;
  labelId: 'before_read' | 'writer_say' | 'after_read';
}

export default function BookDetailTextArea({ title, labelId }: Props) {
  const max = 1000;
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const inputValue = useWatch({
    control,
    name: labelId,
  });

  return (
    <section className="my-10 flex flex-col">
      <header className="flex justify-between">
        <div>
          <label htmlFor={labelId}>{title}</label>
          <span className="ml-4 text-xs text-peach-fuzz">{errors[labelId]?.message as string}</span>
        </div>
        <p>{`${inputValue.length}/${max} 자`}</p>
      </header>

      <textarea
        id={labelId}
        {...register(labelId, {
          required: '내용은 필수 입력 항목입니다',
        })}
        maxLength={max}
        className="mt-3 h-52 resize-none rounded-lg p-2 xs:text-xs sm:text-base"
      />
    </section>
  );
}
