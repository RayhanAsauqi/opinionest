"use client";
import React, { useState } from "react";
import SlideLeft from "../../../public/icons/slideLeft";

export const Pagination = ({ setTotalPage, setPagination }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = setTotalPage;

  const handlePageChange = (page: any) => {
    const newPage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(newPage);
    setPagination(newPage);
  };

  return (
    <div className="flex justify-center mt-[32px] pb-[32px]">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-[8px] mx-1 border-[1px] border-[#D5D5D5] rounded-full cursor-pointer bg-white"
      >
        <SlideLeft className="text-primary" />
      </button>
      <ul className="pagination flex flex-row items-center border-[1px] border-[#D5D5D5] bg-white shadow-sidebar rounded-[30px]">
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            className={`${
              currentPage === index + 1
                ? "bg-orange text-primary border-[1px] border-primary"
                : "hover:bg-gray-300 text-black"
            } cursor-pointer rounded-full px-[19px] py-[10px] mx-[8px]`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-[8px] mx-1 border-[1px] border-[#D5D5D5] rounded-full cursor-pointer bg-white"
      >
        <SlideLeft className="text-primary rotate-180" />
      </button>
    </div>
  );
};
