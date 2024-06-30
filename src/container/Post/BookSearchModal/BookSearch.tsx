import Button from '@/components/Button';
import { useState } from 'react';

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setCurPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function BookSearch({ query, setQuery, setCurPage }: Props) {
  const [curQuery, setCurQuery] = useState(query);

  const handleSearchClick = async () => {
    setQuery(curQuery);
  };

  const handleResetClick = () => {
    setCurQuery('');
    setQuery('');
    setCurPage(1);
  };

  return (
    <div className="flex h-[10%] w-full justify-center gap-2">
      <input
        value={curQuery}
        placeholder="🔍 입력해주세요"
        className="w-2/4 rounded-md border border-black p-1 pl-2 text-xs"
        onChange={(e) => setCurQuery(e.target.value)}
      />

      <Button
        text="검색"
        onClick={handleSearchClick}
        className="w-16 rounded-md border border-black p-1 px-2 hover:bg-gray-200"
      />

      <Button
        text="초기화"
        onClick={handleResetClick}
        className="w-16 rounded-md border border-black p-1 px-2 hover:bg-gray-200"
      />
    </div>
  );
}
