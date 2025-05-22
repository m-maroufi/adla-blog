"use client";

import { props } from "@/app/articles/[id]/page";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";
type Props = {
  totalPages: number;
  pageSize?: number;
  pageNumber?: number;
};
const Pagenation = ({ totalPages, pageSize, pageNumber }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  if (totalPages < 2) {
    return null;
  }
  const handleOnChangePage = (event: { selected: number }) => {
    console.log(event.selected, pageNumber);
    const selectedPage = event.selected + 1;

    // پارامترهای قبلی رو حفظ کنیم
    const params = new URLSearchParams(searchParams.toString());
    params.set("PageNumber", selectedPage.toString());

    // ریدایرکت با شماره صفحه جدید
    router.push(`?${params.toString()}`);
  };
  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={(pageNumber ?? 1) - 1}
      pageLinkClassName="w-[40px] cursor-pointer h-[40px] border border border-gray-300 inline-flex items-center justify-center"
      activeLinkClassName="bg-primaryDark text-white"
      className="flex items-center justify-center "
      nextLabel=""
      onPageChange={handleOnChangePage}
      previousLabel="قبلی"
      nextClassName="hidden"
      previousClassName="hidden"
      nextLinkClassName="border border-gray-300 inline-flex items-center justify-center h-[40px] px-4 cursor-pointer "
      previousLinkClassName="border border-gray-300 inline-flex items-center justify-center h-[40px] px-4 cursor-pointer"
    />
  );
};

export default Pagenation;
