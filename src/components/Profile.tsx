import Image from 'next/image';
import User from '../../public/svgs/user.svg';

interface Props {
  src?: string;
}

export default function Profile({ src }: Props) {
  return (
    <div>
      {src ? (
        <Image
          src={src}
          width={40}
          height={40}
          alt="댓글 작성자 이미지"
          className="mr-2 h-10 w-10 rounded-full"
        />
      ) : (
        <User className="mr-2 h-10 w-10 fill-gray-400" />
      )}
    </div>
  );
}
