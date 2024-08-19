import Image from 'next/image';

const DATA = [
  {
    id: 1,
    content: '첫째 - 독서를 시작하기 전에 배우고 싶은 부분을 적어보세요',
  },
  {
    id: 2,
    content: '둘째 - 배우고 싶은 부분을 저자가 어떻게 답하는지 적어보세요',
  },
  {
    id: 3,
    content: '셋째 - 저자가 전달하는 말과 자신의 생각을 정리해보세요',
  },
];

export default function Home() {
  return (
    <div className="relative h-screen-without-nav">
      <figure className="fixed inset-0 z-[-1]">
        <Image src="/images/home.webp" priority alt="배경 이미지" fill />
      </figure>
      <section className="relative flex h-full items-center justify-end font-bold">
        <div className="flex h-[80%] w-[60%] animate-pulse flex-col justify-center rounded-lg text-deep-green">
          <p className="text-center xs:text-xs sm:text-base xl:text-xl">
            독백노트를 통해 3단계로 기록하여 지식을 오래도록 기억해보세요
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 xs:text-xs sm:text-sm xl:text-base">
            {DATA.map(({ id, content }) => (
              <p className="p-2 text-center" key={id}>
                {content}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
