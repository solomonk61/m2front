import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GetPostsQuery,
  GetPostQuery,
  GetCommentsQuery,
  GetCommentQuery,
} from "@graphqlTypes/__types__";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type PostsProps = {
  data: GetPostsQuery;
};

type PostProps = {
  post: GetPostQuery["post"];
};

type CommentsProps = {
  data: GetCommentsQuery["comments"];
};

type CommentProps = {
  comment: GetCommentQuery["comment"];
};

export const CommentCard: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
      <div className="flex flex-row justify-center mr-2">
        {/* <img
          alt="avatar"
          width="48"
          height="48"
          className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4"
          src={
            process.env.NEXT_PUBLIC_API_URL +
            "" +
            comment?.users_permissions_user?.avatar?.url
          }
        /> */}

        <Image
          className="w-12 h-12 rounded-full object-cover mr-4 shadow"
          src={
            process.env.NEXT_PUBLIC_API_URL +
            "" +
            comment?.users_permissions_user?.avatar?.url
          }
          width={48}
          height={48}
          alt="avatar"
        />
        <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">
          {comment?.users_permissions_user?.username}
        </h3>
      </div>

      <p className="text-gray-600 text-lg text-center md:text-left ">
        {/* {JSON.stringify(comment)} */}
        {comment?.content}
      </p>
    </div>
  );
};

export const CommentsCards: React.FC<CommentsProps> = ({ data }) => {
  return (
    <div>
      {data?.map((comment) => (
        <CommentCard comment={comment} />
      ))}
    </div>
  );
};

export const PostCard: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="flex my-2 bg-white shadow-lg rounded-lg">
      <div className="flex items-start px-4 py-6">
        {/* <img
          className="w-12 h-12 rounded-full object-cover mr-4 shadow"
          src={post?.users_permissions_user?.avatar?.url}
          alt="avatar"
        /> */}
        <Image
          className="w-12 h-12 rounded-full object-cover mr-4 shadow"
          src={
            process.env.NEXT_PUBLIC_API_URL +
            "" +
            post?.users_permissions_user?.avatar?.url
          }
          width={60}
          height={60}
          alt="avatar"
        />
        <div className="ml-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 -mt-1">
              <Link href={`/post/${post?.id}`}>
                <a>{post?.title}</a>
              </Link>
            </h2>
            <small className="text-sm text-gray-700">
              {dayjs(post?.created_at).fromNow()}
            </small>
          </div>
          <p className="mt-1 text-gray-700 text-sm">{post?.content}</p>
          <div className="mt-4 flex items-center">
            <div className="flex mr-2 text-gray-700 text-sm mr-3">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>{post?.upvotes || 0}</span>
            </div>
            {/* <div className="flex mr-2 text-gray-700 text-sm mr-8">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <span>8</span>
            </div> */}
            <div className="flex mr-2 text-gray-700 text-sm mr-4">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span>share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PostsCards: React.FC<PostsProps> = ({ data }) => {
  return (
    <div>
      {data.posts?.map((post) => (
        // <h1>{post?.title}</h1>
        <PostCard key={post?.id} post={post} />
      ))}
    </div>
  );
};
