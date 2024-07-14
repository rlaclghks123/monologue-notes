import Post from '@/container/Post';
import NoImg from '../../../public/svgs/noImg.svg';

export default function Host() {
  const defaultData = {
    cover: NoImg ?? '',
    title: '',
    publisher: '',
    itemPage: 0,
    beforeRead: '',
    writerSay: '',
    afterRead: '',
  };
  return <Post defaultData={defaultData} type="CREATE" />;
}
