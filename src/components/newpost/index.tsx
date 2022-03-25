import React from "react";

export const NewPost: React.FC = () => {
  return (
    <div className="flex my-2 bg-white shadow-lg rounded-lg mx-4">
      <div className="flex flex-col w-full px-4 py-6">
        <input
          className="form-control block w-full rounded my-1"
          placeholder="title"
          type="text"
        />
        <textarea
          className="form-control block w-full rounded my-1"
          placeholder="content"
        ></textarea>
        <div className={""}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};
