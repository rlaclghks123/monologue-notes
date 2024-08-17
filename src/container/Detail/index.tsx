import { User } from '@supabase/supabase-js';
import { ReadPost } from '@/types/post';
import BookDescriptions from './BookDescriptions';

import BookReviews from './BookReviews.tsx';
import Introduce from './Introduce';
import UpdateOrDeleteButtons from './UpdateOrDeleteButtons';

interface Props {
  postDetail: ReadPost[];
  user: User | null;
}

export default function Detail({ postDetail, user }: Props) {
  return (
    <div className="flex flex-col gap-2 py-10">
      <Introduce postDetail={postDetail[0]} />
      <BookDescriptions postDetail={postDetail[0]} />
      {user && postDetail[0] && user.id === postDetail[0].user_id && (
        <UpdateOrDeleteButtons postDetail={postDetail[0]} />
      )}
      <BookReviews user={user} />
    </div>
  );
}
