import TitleDescription from '@/components/TitleDescription';
import { GetPosts } from '@/types/post';

interface Props {
  postDatail: GetPosts;
}

const DB = [
  { title: '책을 통해 얻고 싶은 인사이트', id: 'before_read' },
  { title: '저자가 전달하는 내용', id: 'writer_say' },
  { title: '독서 후 정리 & 느낀점', id: 'after_read' },
];

export default function BookDescriptions({ postDatail }: Props) {
  return (
    <>
      {DB.map(({ title, id }) => (
        <div key={id}>
          <TitleDescription key={id}>
            <p>{title}</p>
            <div className="xs:text-xs min-h-52 whitespace-pre-wrap bg-white p-2 sm:text-base">
              {postDatail[id as 'before_read' | 'writer_say' | 'after_read']}
            </div>
          </TitleDescription>
        </div>
      ))}
    </>
  );
}
