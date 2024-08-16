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
    <div className="fixed inset-0 w-full bg-home-image bg-cover bg-center">
      <section className="flex h-screen w-screen items-center justify-center font-bold text-light-beige ">
        <div className="-mt-48 flex flex-col justify-center ">
          <p className="xs:text-xs sm:text-xl xl:text-2xl">
            독백노트를 통해 3단계로 기록하여 지식을 오래도록 기억해보세요
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 xs:text-xs sm:text-base xl:text-xl">
            {DATA.map(({ id, content }) => (
              <p key={id}>{content}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
