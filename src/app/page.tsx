import Link from 'next/link';
import Image from 'next/image';
import BookIcon from '../../public/svgs/bookIcon.svg';

const DATA = [
  {
    id: 1,
    content: '1단계 : 목표설정 → 독서를 시작하기 전에 배우고 싶은 부분을 적어보세요.',
  },
  {
    id: 2,
    content: '2단계: 내용 확인 → 독서를 진행하면서 저자가 이 의문점에 어떻게 답하는지 확인하세요.',
  },
  {
    id: 3,
    content: '3단계: 정리 → 기록과 적용 독서 후, 배운 내용을 기록하고 실제로 적용해보세요.',
  },
];

export default function Home() {
  return (
    <main className="h-screen bg-[url('../../public/images/mainBgImg.jpg')] bg-cover bg-center bg-no-repeat">
      <section className="flex h-full flex-col items-center p-20">
        <h1 className="text-6xl text-light-beige">독백노트</h1>
        <div className="p-20 text-center text-2xl text-light-beige ">
          <p>독서를 하고 느낀 점을 기록해도 다시 보지 않아 기억에 남지 않던 경험이 있으신가요?</p>
          <p>
            독백노트를 통해 세 가지 단계로 기록하여 독서의 시간을 낭비하지 않고, 얻은 지식을
            오래도록 기억해보세요
          </p>
          <section className="flex flex-col items-center pt-60 text-light-beige">
            {DATA.map(({ id, content }) => (
              <p key={id} className="pb-5">
                {content}
              </p>
            ))}
          </section>
        </div>

        <Link href="/category" className="bg-transparent">
          <Image src={BookIcon} alt="book icon" />
          <div className="text-center text-light-beige">시작하기</div>
        </Link>
      </section>
    </main>
  );
}
