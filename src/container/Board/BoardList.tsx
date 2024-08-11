import { ReadPost } from '@/types/post';
import BoardCard from './BoardCard';

interface Props {
  posts: ReadPost[];
}

export default function BoardList({ posts }: Props) {
  return (
    <div className=" h-full overflow-scroll rounded-lg bg-white">
      <ol className="grid h-full gap-2 p-2 xs:grid-cols-1 xs:gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3-equal">
        {posts.map((post) => (
          <BoardCard post={post} key={post.id} />
        ))}
      </ol>
    </div>
  );
}
