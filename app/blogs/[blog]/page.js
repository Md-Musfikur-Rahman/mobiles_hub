import React from "react";

const SingleBlog = ({ params }) => {
  const postId = params.blog;
  return (
    <div className="w-4/5 mx-auto my-10">
      <h1 className="text-2xl font-bold capitalize text-center">
        Blog number {postId}
      </h1>
    </div>
  );
};

export default SingleBlog;
