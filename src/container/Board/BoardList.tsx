import { GetPosts } from '@/types/post';
import BoardCard from './BoardCard';
import BoardCardSkeleton from './BoardCardSkeleton';

interface Props {
  posts: GetPosts[];
}

export default function BoardList({ posts }: Props) {
  return (
    <div className=" h-full overflow-scroll rounded-lg bg-white">
      <ol className="grid h-full gap-2 p-2 xs:grid-cols-1 xs:gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3-equal">
        {posts.length === 0 &&
          Array.from({ length: 9 }, (_, idx) => <BoardCardSkeleton key={idx} />)}

        {posts.map((post) => (
          <BoardCard post={post} key={post.id} />
        ))}
      </ol>
    </div>
  );
}
