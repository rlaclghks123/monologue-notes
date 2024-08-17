import Image from 'next/image';

import Profile from '@/components/Profile';
import TitleDescription from '@/components/TitleDescription';
import { ReadPost } from '@/types/post';
import NoImg from '../../../public/images/defaultBook.png';

interface Props {
  postDetail: ReadPost;
}

export default function Introduce({ postDetail }: Props) {
  return (
    <>
      <TitleDescription>
        <h2>책 소개</h2>
        <div className="flex xs:flex-col sm:h-full sm:flex-row">
          <Image
            src={postDetail?.cover || NoImg}
            width={120}
            height={120}
            priority
            alt="커버 이미지"
            className="mr-4 rounded-xl xs:h-20 xs:w-20 sm:h-28 sm:w-28"
          />
          <div className="h-28 flex-col xs:w-full sm:w-[80%]">
            <div className="my-2 sm:truncate">{`제목 - ${postDetail.title}`}</div>
            <div className="my-2">{`출판사 - ${postDetail.publisher}`}</div>
            <div className="my-2">{`${postDetail.item_page} 쪽`}</div>
          </div>
        </div>
      </TitleDescription>

      <div>
        <TitleDescription>
          <h2>독백자 소개</h2>
          <div className="flex h-full ">
            <Profile src={postDetail?.avatar_url ?? ''} />
            <div className="truncate">{postDetail?.nickname ?? '사용자'}</div>
          </div>
        </TitleDescription>
      </div>
    </>
  );
}
