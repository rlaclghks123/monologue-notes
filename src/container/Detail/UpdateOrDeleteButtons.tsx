import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useDeletePost } from '@/service/deletePost';
import { useUser } from '@/service/user';
import { GetPosts } from '@/types/post';

interface Props {
  postDatail: GetPosts;
}
export default function UpdateOrDeleteButtons({ postDatail }: Props) {
  const { mutate: deleteMutate } = useDeletePost();
  const router = useRouter();
  const { data: userData } = useUser();

  function handleDeleteBtn(e: React.MouseEvent<HTMLButtonElement>, id?: number) {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    const isDelete = confirm('정말 삭제하시겠어요?');
    if (isDelete && id) {
      deleteMutate(id);
      alert('삭제되었습니다.');
      router.push('/');
    }
  }

  return (
    <>
      {userData?.id === postDatail.user_id && (
        <div className="my-10 mb-32 flex justify-center gap-4 bg-white py-5">
          <span className="flex h-full w-full">
            <Link
              href={`/post/${postDatail.id}`}
              className="xs:text-xs flex h-full w-1/2 items-center justify-center hover:text-peach-fuzz sm:text-base"
            >
              수정
            </Link>
            <button
              type="button"
              onClick={(e) => handleDeleteBtn(e, postDatail.id)}
              className="xs:text-xs h-full w-[50%] hover:text-peach-fuzz sm:text-base"
              aria-labelledby={`delete-label-${postDatail.id}`}
            >
              삭제
            </button>
          </span>
        </div>
      )}
    </>
  );
}
