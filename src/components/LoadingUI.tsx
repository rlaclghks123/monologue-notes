import Spinner from '../../public/svgs/spinner.svg';

export default function LoadingUI() {
  return (
    <div className="flex h-36 w-full items-center justify-center">
      <div className="h-10 w-10 animate-spin">
        <Spinner alt="Loading icon" className="fill-peach-fuzz" />
      </div>
    </div>
  );
}
