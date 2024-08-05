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
    <section className="xs:p-4 xs:flex-col xs:items-center xs:h-56 mt-5 w-full justify-between rounded-lg bg-peach-fuzz sm:flex sm:h-52 sm:flex-row sm:p-2">
      <div className="xs:p-4 xs:w-full xs:mb-5 xs:h-1/2 flex flex-col items-center justify-center sm:w-1/2 sm:p-2">
        <Image
          src="/images/bookBoy.png"
          width="120"
          height="120"
          alt="책"
          priority
          className="xs:h-20 xs:w-16 mb-2 sm:h-28 sm:w-28"
        />
        <p className="xs:text-[10px] sm:text-xs xl:text-base">
          독백노트를 통해 3단계로 기록하여 지식을 오래도록 기억해보세요
        </p>
      </div>

      <div className="xs:text-[10px] xs:w-full flex items-center justify-center sm:w-1/2 sm:text-xs xl:text-base ">
        <div className="flex flex-col justify-evenly gap-2">
          {DATA.map(({ id, content }) => (
            <p key={id}>{content}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
