'use client';

import React from 'react';
import BestSellerList from './BestSellerList';
import BlogerBestSellerList from './BlogerBestSellerList';
import NewSpecialList from './NewSpecialList';

export default function Recommend() {
  return (
    <div className="my-10">
      <section className="w-ful mt-10">
        <h2 className="font-extrabold xs:text-base sm:text-lg xl:text-xl">알라딘 베스트 셀러</h2>
        <BestSellerList />
      </section>

      <section className="w-ful mt-10">
        <h2 className="font-extrabold xs:text-base sm:text-lg xl:text-xl">알라딘 신간 베스트</h2>
        <NewSpecialList />
      </section>

      <section className="w-ful mt-10">
        <h2 className="font-extrabold xs:text-base sm:text-lg xl:text-xl">
          알라딘 블로거 베스트셀러
        </h2>
        <BlogerBestSellerList />
      </section>
    </div>
  );
}
