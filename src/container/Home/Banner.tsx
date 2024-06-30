import Image from 'next/image';

const DATA = [
  {
    id: 1,
    content: '첫째 - 독서를 시작하기 전에 배우고 싶은 부분을 적어보세요.',
  },
  {
    id: 2,
    content: '둘째 - 배우고 싶은 부분을 저자가 어떻게 답하는지 적어보세요.',
  },
  {
    id: 3,
    content: '셋째 - 배울점을 기록하고 실제로 적용해보세요.',
  },
];

export default function Banner() {
  return (
    <section className="mt-5 box-border flex h-52 w-full justify-between rounded-lg bg-peach-fuzz">
      <div className="flex h-full w-1/2 flex-col items-center justify-center">
        <Image
          src="/images/bookBoy.png"
          width="120"
          height="120"
          alt="책"
          priority
          style={{ width: 'auto', height: 'auto' }}
        />
        <p className="text-base">독백노트를 통해 3단계로 기록하여 지식을 오래도록 기억해보세요</p>
      </div>

      <div className=" flex h-full w-1/2 items-center justify-center text-base">
        <div className="flex h-full flex-col justify-evenly">
          {DATA.map(({ id, content }) => (
            <p key={id}>{content}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
