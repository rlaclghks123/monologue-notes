'use client';

import { User } from '@supabase/supabase-js';
import Image from 'next/image';
import Link from 'next/link';
import { useDeletePost } from '@/service/deletePost';

import { GetPosts } from '@/types/post';
import NoImg from '../../../public/svgs/noImg.svg';
import TrashBin from '../../../public/svgs/trashBin.svg';

interface Props {
  posts: GetPosts[];
  userData?: User | null;
}

export default function BoardList({ posts, userData }: Props) {
  const { mutate: deleteMutate } = useDeletePost();

  function handleDeleteBtn(e: React.MouseEvent<HTMLButtonElement>, id?: number) {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    const isDelete = confirm('정말 삭제하시겠어요?');
    if (isDelete && id) {
      deleteMutate(id);
    }
  }

  return (
    <div className=" h-full bg-white px-10 py-5">
      <ol className="flex h-full flex-col gap-4 overflow-scroll">
        {posts.map((post, idx) => (
          <li
            key={post.id}
            className="flex w-full items-center  justify-between border border-black  hover:bg-gray-100 "
          >
            <Link href={`detail/${post.id}`} className="flex w-[90%] items-center justify-between">
              <p>{idx + 1}</p>
              {post.cover ? (
                <Image
                  src={post.cover || NoImg}
                  width={120}
                  height={50}
                  alt="커버 이미지"
                  className="h-10 w-[5%] rounded-xl"
                />
              ) : (
                <NoImg className="h-10 w-[5%] rounded-xl" />
              )}
              <p className="w-[30%] truncate">{`제목 : ${post.title}`}</p>
              <p className="w-[30%] truncate ">{`출판사 : ${post.publisher}`}</p>
            </Link>
            <p className="flex h-full w-[10%] items-center ">
              {userData?.id === post?.user_id && (
                <span className="flex h-full w-full">
                  <Link
                    href={`post/${post.id}`}
                    className="flex h-full w-1/2 items-center justify-center hover:text-peach-fuzz"
                  >
                    수정
                  </Link>
                  <button
                    type="button"
                    onClick={(e) => handleDeleteBtn(e, post.id)}
                    className="h-full w-[50%] hover:text-peach-fuzz"
                    aria-labelledby={`delete-label-${post.id}`}
                  >
                    <TrashBin className="h-5 w-5 hover:fill-peach-fuzz" />
                  </button>
                </span>
              )}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
