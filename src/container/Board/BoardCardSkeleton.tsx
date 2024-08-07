export default function BoardCardSkeleton() {
  return (
    <li className="w-full flex-col rounded-lg p-2 xs:h-24 sm:h-32 xl:h-40">
      <div className="flex h-full items-center ">
        <div className="h-full animate-pulse rounded-xl bg-gray-200 xs:min-w-16 xs:max-w-16 sm:min-w-20 sm:max-w-20 xl:min-w-24 xl:max-w-24" />
        <div className="ml-2 flex h-full w-full flex-col justify-evenly truncate text-xs">
          <p className="h-4 w-full animate-pulse bg-gray-200" />
          <p className="h-4 w-[75%] animate-pulse bg-gray-200" />
          <p className="h-4 w-[25%] animate-pulse bg-gray-200" />
        </div>
      </div>
    </li>
  );
}
