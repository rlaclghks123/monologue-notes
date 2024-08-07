interface Props {
  message: string;
}

function ToastUI({ message }: Props) {
  return (
    <div className="fixed left-0 top-20 flex h-10  w-full justify-center">
      <div className="flex animate-bounce items-center rounded-lg border border-solid border-peach-fuzz p-1.5 text-xs font-bold text-peach-fuzz">
        {message}
      </div>
    </div>
  );
}

export default ToastUI;
