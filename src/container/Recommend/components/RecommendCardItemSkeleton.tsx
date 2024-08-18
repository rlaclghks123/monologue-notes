export default function RecommendCardItemSkeleton() {
  return (
    <div>
      <div className="flex justify-center px-2 pt-7">
        <div className="mx-6 flex w-full items-center justify-evenly gap-1">
          {Array.from({ length: 5 }, (_, idx) => (
            <div
              key={idx}
              className=" flex w-1/5 flex-col items-center gap-2 xs:px-1 sm:px-2 xl:px-4"
            >
              <div className="w-full animate-pulse  rounded-lg bg-gray-300 xs:h-24 sm:h-32 xl:h-48" />

              <p className="h-3 animate-pulse bg-gray-300 xs:text-[8px] sm:w-20 sm:text-xs xl:w-28 " />
              <p className="h-3 animate-pulse bg-gray-300 xs:w-10 xs:text-[8px] sm:w-20 sm:text-xs xl:w-28 " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
