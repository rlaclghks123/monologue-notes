import { User } from '@supabase/supabase-js';
import CreateReviews from './CreateReviews';
import ReviewList from './ReviewList';

interface Props {
  user: User | null;
}

export default function BookReviews({ user }: Props) {
  return (
    <div className="mb-10 w-full ">
      <CreateReviews user={user} />
      <ReviewList user={user} />
    </div>
  );
}
