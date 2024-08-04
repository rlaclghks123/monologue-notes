import Image from 'next/image';
import Profile from '@/components/Profile';
import TitleDescription from '@/components/TitleDescription';
import { GetPosts } from '@/types/post';
import NoImg from '../../../public/images/defaultBook.png';

interface Props {
  postDatail: GetPosts;
}

export default function Introduce({ postDatail }: Props) {
  return (
    <div className="flex h-72 w-full border-b-2 border-solid border-gray-200 ">
      <TitleDescription className="w-[75%]">
        <p>책 소개</p>
        <div className=" flex h-full ">
          <Image
            src={postDatail.cover || NoImg}
            width={120}
            height={120}
            priority
            alt="커버 이미지"
            className="mr-4 h-28 w-28 rounded-xl"
          />
          <div className="h-28 w-[80%] flex-col">
            <div className="my-2 truncate">{`제목 - ${postDatail.title}`}</div>
            <div className="my-2">{`출판사 - ${postDatail.publisher}`}</div>
            <div className="my-2">{`${postDatail.item_page} 쪽`}</div>
          </div>
        </div>
      </TitleDescription>

      <TitleDescription className="ml-[5%] w-[25%]">
        <p>독백자</p>
        <div className=" flex h-full ">
          <Profile src={postDatail.avatar_url} />
          <div className="truncate">{postDatail.nickname ?? '사용자'}</div>
        </div>
      </TitleDescription>
    </div>
  );
}
