import Image from 'next/image';
import Profile from '@/components/Profile';
import TitleDescription from '@/components/TitleDescription';
import { GetPosts } from '@/types/post';
import NoImg from '../../../public/images/defaultBook.png';

interface Props {
  postDetail: GetPosts;
}

export default function Introduce({ postDetail }: Props) {
  return (
    <div className="flex h-72 w-full items-center border-b-2 border-solid border-gray-200">
      <TitleDescription className="xs:w-[60%] xs:border-r xs:border-solid xs:border-gray-300 xs:px-4 sm:w-[75%] sm:border-0">
        <p>책 소개</p>
        <div className="xs:flex-col flex sm:h-full sm:flex-row">
          <Image
            src={postDetail.cover || NoImg}
            width={120}
            height={120}
            priority
            alt="커버 이미지"
            className="xs:h-20 xs:w-20 mr-4 rounded-xl sm:h-28 sm:w-28"
          />
          <div className="xs:w-full xs:text-xs h-28 flex-col sm:w-[80%] sm:text-base">
            <div className="my-2 sm:truncate">{`제목 - ${postDetail.title}`}</div>
            <div className="my-2">{`출판사 - ${postDetail.publisher}`}</div>
            <div className="my-2">{`${postDetail.item_page} 쪽`}</div>
          </div>
        </div>
      </TitleDescription>

      <div className="xs:w-[40%] ml-[5%] sm:w-[25%]">
        <TitleDescription>
          <p>독백자</p>
          <div className="flex h-full ">
            <Profile src={postDetail.avatar_url} />
            <div className="xs:text-xs truncate sm:text-base">
              {postDetail.nickname ?? '사용자'}
            </div>
          </div>
        </TitleDescription>
      </div>
    </div>
  );
}
