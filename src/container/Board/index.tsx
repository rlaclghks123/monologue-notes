import { ReadPost } from '@/types/post';
import { POSTS_LIMIT } from '@/utils/constants';
import BoardList from './BoardList';
import SearchAndFilter from './SearchAndFilter';
import Pagenation from '../../components/Pagenation';

interface Props {
  curPage: number;
  posts: ReadPost[];
  count: number;
}

export default function Board({ curPage, posts, count }: Props) {
  return (
    <div className="h-screen-without-nav pb-20 pt-5">
      <SearchAndFilter />
      <BoardList posts={posts ?? []} />
      <Pagenation totalCount={count} limit={POSTS_LIMIT} curPage={curPage} />
    </div>
  );
}
