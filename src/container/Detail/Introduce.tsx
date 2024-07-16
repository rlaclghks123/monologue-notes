import Image from 'next/image';
import TitleDescription from '@/components/TitleDescription';
import { GetPosts } from '@/types/post';
import NoImg from '../../../public/svgs/noImg.svg';
import User from '../../../public/svgs/user.svg';

interface Props {
  data: GetPosts;
}

export default function Introduce({ data }: Props) {
  return (
    <div className="flex h-72 w-full border-b-2 border-solid border-gray-200 ">
      <TitleDescription className="w-[75%]">
        <p>책 소개</p>
        <div className=" flex h-full ">
          {data.cover ? (
            <Image
              src={data.cover || NoImg}
              width={120}
              height={120}
              priority
              alt="커버 이미지"
              className="mr-4 h-28 w-28 rounded-xl"
            />
          ) : (
            <NoImg className="mr-10 h-28 w-28 fill-gray-300" />
          )}
          <div className="h-28 w-[80%] flex-col">
            <div className="my-2 truncate">{`제목 - ${data.title}`}</div>
            <div className="my-2">{`출판사 - ${data.publisher}`}</div>
            <div className="my-2">{`${data.item_page} 쪽`}</div>
          </div>
        </div>
      </TitleDescription>

      <TitleDescription className="ml-[5%] w-[25%]">
        <p>독백자</p>
        <div className=" flex h-full ">
          {data.avatar_url ? (
            <Image
              src={data.avatar_url || User}
              width={50}
              height={50}
              alt="커버 이미지"
              className="mr-2 h-12 w-12 rounded-xl"
            />
          ) : (
            <User width="25" height="25" className="mr-2 fill-gray-300" />
          )}
          <div className="truncate">{data.nickname ?? '사용자'}</div>
        </div>
      </TitleDescription>
    </div>
  );
}
