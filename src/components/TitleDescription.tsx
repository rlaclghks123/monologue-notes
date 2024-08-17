'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  children: [React.ReactNode, React.ReactNode];
  className?: string;
}

export default function TitleDescription({ children, className }: Props) {
  const [title, description] = children;
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const descriptionElement = descriptionRef.current;
    if (descriptionElement) {
      if (descriptionElement.scrollHeight > descriptionElement.clientHeight) {
        setIsOverflowing(true);
      } else {
        setIsOverflowing(false);
      }
    }
  }, [description]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex w-full gap-4 border-b border-solid border-gray-200 p-5 py-10 ${
        isExpanded ? 'h-auto' : 'h-60'
      }  ${className}`}
    >
      <div className="w-1/4 font-bold xs:text-sm sm:text-lg xl:text-xl">{title}</div>
      <div className="flex h-full w-3/4 flex-col xs:text-xs sm:text-sm xl:text-base">
        <div
          className={`transition-all duration-300 ease-in-out ${isExpanded ? 'overflow-visible' : 'overflow-hidden'}`}
          ref={descriptionRef}
        >
          {description}
        </div>
        <div className="h-[10%] w-full pt-2">
          {isOverflowing && (
            <button type="button" className="text-gray-400" onClick={toggleExpand}>
              {isExpanded ? '접기' : '더보기'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
