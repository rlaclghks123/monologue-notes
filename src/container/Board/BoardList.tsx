import Image from 'next/image';
import { GetPosts } from '@/types/post';
import NoImg from '../../../public/svgs/noImg.svg';

interface Props {
  data: GetPosts[];
}

export default function BoardList({ data }: Props) {
  return (
    <div className=" h-full bg-white px-10 py-5">
      <ul className="flex h-full flex-col gap-4 overflow-scroll">
        {data.map((item, idx) => (
          <li key={item.id} className="flex items-center justify-between gap-4 border border-black">
            <p>{idx + 1}</p>
            <Image
              src={item.cover || NoImg}
              width={120}
              height={50}
              alt="커버 이미지"
              className="h-10 w-[5%] rounded-xl"
            />
            <p className="w-[50%] truncate">{`제목 : ${item.title}`}</p>
            <p className="w-[25%] truncate">{`출판사 : ${item.publisher}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
