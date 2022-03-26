import React from "react";
import Link from "next/link";

type Props = {
  page: number;
};

export const Pagination: React.FC<Props> = ({ page }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex">
        {page > 1 && (
          <Link href={`?page=${page - 1}`}>
            <a className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-lg border border-gray-300 hover:bg-gray-900 ">
              <svg
                className="mr-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Previous
            </a>
          </Link>
        )}
        <Link href={`?page=${page + 1}`}>
          <a className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-white bg-gray-800 rounded-lg border border-gray-300 hover:bg-gray-900">
            Next
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};
