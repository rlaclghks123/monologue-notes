import TitleDescription from '@/components/TitleDescription';
import { ReadPost } from '@/types/post';

interface Props {
  postDetail: ReadPost;
}

const DB = [
  { title: '책을 통해 얻고 싶은 인사이트', id: 'before_read' },
  { title: '저자가 전달하는 내용', id: 'writer_say' },
  { title: '독서 후 정리 & 느낀점', id: 'after_read' },
];

export default function BookDescriptions({ postDetail }: Props) {
  return (
    <>
      {DB.map(({ title, id }) => (
        <div key={id}>
          <TitleDescription key={id}>
            <h2>{title}</h2>
            <div className="h-auto min-h-52 whitespace-pre-wrap bg-white p-2 xs:text-xs sm:text-base">
              {postDetail[id as 'before_read' | 'writer_say' | 'after_read']}
            </div>
          </TitleDescription>
        </div>
      ))}
    </>
  );
}
