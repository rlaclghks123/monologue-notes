import { ReadPost } from '@/types/post';
import BoardCard from './BoardCard';

interface Props {
  posts: ReadPost[];
}

export default function BoardList({ posts }: Props) {
  return (
    <section className=" h-[90%] overflow-scroll rounded-lg">
      <ul className="relative grid h-full gap-2 p-2 xs:grid-cols-1 xs:gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3-equal ">
        {!posts.length && (
          <div className="absolute top-10 flex w-full flex-col gap-4 text-center font-bold xs:text-xs sm:text-sm xl:text-base">
            <p>조회된 결과가 없습니다.</p>
            <p>초기화를 원하시면 새로고침 버튼을 눌러주세요.</p>
          </div>
        )}
        {posts.map((post) => (
          <BoardCard post={post} key={post.id} />
        ))}
      </ul>
    </section>
  );
}
