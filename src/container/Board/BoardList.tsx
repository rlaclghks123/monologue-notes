'use client';

import Image from 'next/image';
import { useDeletePost } from '@/service/deletePost';
import { useUser } from '@/service/user';
import { GetPosts } from '@/types/post';
import NoImg from '../../../public/svgs/noImg.svg';

interface Props {
  data: GetPosts[];
}

export default function BoardList({ data }: Props) {
  const { data: userData } = useUser();
  const { mutate: deleteMutate } = useDeletePost();

  function handleDeleteBtn(id: number) {
    // eslint-disable-next-line no-restricted-globals
    const isDelete = confirm('정말 삭제하시겠어요?');

    if (isDelete) {
      deleteMutate(id);
    }
  }

  return (
    <div className=" h-full bg-white px-10 py-5">
      <ul className="flex h-full flex-col gap-4 overflow-scroll">
        {data.map((item, idx) => (
          <li
            key={item.id}
            className="flex items-center justify-between gap-4 border border-black "
          >
            <p>{idx + 1}</p>
            <Image
              src={item.cover || NoImg}
              width={120}
              height={50}
              alt="커버 이미지"
              className="h-10 w-[5%] rounded-xl"
            />
            <p className="w-[30%] truncate">{`제목 : ${item.title}`}</p>
            <p className="w-[30%] truncate ">{`출판사 : ${item.publisher}`}</p>
            <p className="w-[10%] ">
              {userData?.id === item?.user_id && (
                <div className="flex h-full justify-between">
                  <button type="button">수정</button>
                  <button type="button" onClick={() => handleDeleteBtn(item.id)}>
                    🗑️
                  </button>
                </div>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
