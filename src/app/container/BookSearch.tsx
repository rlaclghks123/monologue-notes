import Button from '@/components/Button';
import { IBookDetail } from '@/types/book';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<IBookDetail, Error>>;
}

export default function BookSearch({ query, setQuery, refetch }: Props) {
  return (
    <div className="flex h-[10%] w-full justify-center gap-2">
      <input
        className="w-2/4 rounded-md border border-black p-1"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <Button
        text="검색"
        onClick={() => refetch()}
        className="rounded-md border border-black p-1 px-2 hover:bg-gray-200"
      />
    </div>
  );
}
