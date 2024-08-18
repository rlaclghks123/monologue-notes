import Image from 'next/image';

export default function BookUI({ src }: { src: string }) {
  return (
    <div className="relative flex w-full justify-center xs:h-16 sm:h-24 xl:h-40">
      <div className="absolute skew-y-3 bg-gray-50 shadow-lg xs:h-12 xs:w-10 xs:translate-x-2 sm:h-20 sm:w-16 sm:translate-x-3 xl:h-36 xl:w-24 xl:translate-x-5">
        <div className="absolute top-0 h-6 translate-y-1 -skew-y-[30deg] bg-gray-50 xs:w-2 xs:-translate-x-2 sm:w-3 sm:-translate-x-3 xl:w-5 xl:-translate-x-5" />
        <div className="absolute bottom-1 right-0 h-9 -skew-y-[20deg] bg-gray-50 xs:h-12 xs:w-2 xs:translate-y-2 sm:w-4 sm:translate-y-2 xl:w-6" />
      </div>
      <div className="absolute flex translate-y-2 skew-y-3 flex-col gap-10 bg-gray-200 text-white xs:h-12 xs:w-10 sm:h-20 sm:w-16 xl:h-36 xl:w-24">
        <Image src={src} priority alt="배경 이미지" fill className="z-9 absolute" />
      </div>
    </div>
  );
}
