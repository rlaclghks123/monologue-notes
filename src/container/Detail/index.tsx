import { GetPosts } from '@/types/post';
import BookDescriptions from './BookDescriptions';
import Introduce from './Introduce';

interface Props {
  data: GetPosts;
}

export default function Detail({ data }: Props) {
  return (
    <>
      <Introduce data={data} />
      <BookDescriptions data={data} />
    </>
  );
}
