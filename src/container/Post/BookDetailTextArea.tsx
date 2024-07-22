import { FieldErrors, UseFormRegister, useFormContext } from 'react-hook-form';
import { PostFormDataType } from '@/types/post';

interface Props {
  title: string;
  labelId: 'before_read' | 'writer_say' | 'after_read';
}

interface FormContextType {
  register: UseFormRegister<PostFormDataType>;
  reset: UseFormReset<PostFormDataType>;
  formState: {
    errors: FieldErrors<Omit<PostFormDataType, 'cover'>>;
  };
}

export default function BookDetailTextArea({ title, labelId }: Props) {
  const max = 1000;
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormContextType>();

  return (
    <div className="my-10 flex flex-col">
      <header className="flex justify-between">
        <div>
          <label htmlFor={labelId}>{title}</label>
          <span className="ml-4 text-xs text-peach-fuzz">{errors[labelId]?.message}</span>
        </div>
        <p>{`${watch(labelId).length}/${max} 자`}</p>
      </header>

      <textarea
        id={labelId}
        {...register(labelId, {
          required: '내용은 필수 입력 항목입니다',
        })}
        maxLength={max}
        className="mt-3 h-52 resize-none rounded-lg p-2"
      />
    </div>
  );
}
