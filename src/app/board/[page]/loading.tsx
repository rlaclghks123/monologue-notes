import BoardCardSkeleton from '@/container/Board/BoardCardSkeleton';

export default function loading() {
  return (
    <div className="h-screen-without-nav pb-20 pt-5">
      <div className="mb-2 flex h-8 justify-end" />
      <div className=" h-full overflow-scroll rounded-lg">
        <ol className="grid h-full gap-2 p-2 xs:grid-cols-1 xs:gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3-equal">
          {Array.from({ length: 9 }, (_, idx) => (
            <BoardCardSkeleton key={idx} />
          ))}
        </ol>
      </div>

      <div className="mt-2 w-full">
        <div className="flex items-center justify-center gap-2">
          <div className="h-5 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
