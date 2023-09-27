import Link from "next/link";
import React from "react";

const BlogPosts = [
  {
    postId: "one",
    postTitle: "Iphone 15 pro max",
    postDate: "19 Sep 2023",
  },
  {
    postId: "two",
    postTitle: "Iphone 14 pro max",
    postDate: "19 Sep 2023",
  },
  {
    postId: "three",
    postTitle: "Iphone 13 pro max",
    postDate: "19 Sep 2023",
  },
  {
    postId: "four",
    postTitle: "Iphone 12 pro max",
    postDate: "19 Sep 2023",
  },
  {
    postId: "five",
    postTitle: "Iphone 11 pro max",
    postDate: "19 Sep 2023",
  },
  {
    postId: "six",
    postTitle: "Iphone XR",
    postDate: "19 Sep 2023",
  },
];

const AllBlogs = () => {
  return (
    <div className="w-4/5 mx-auto my-10">
      <div className="grid grid-cols-4 gap-5">
        {BlogPosts.map((post) => (
          <Link
            key={post.postId}
            href={`/blogs/${post.postId}`}
            className="border px-8 py-4 rounded-xl bg-gray-50 hover:bg-gray-200 hover:scale-110 shadow-lg hover:shadow-2xl duration-500 flex flex-col justify-center items-center"
          >
            <h1> {post.postTitle} </h1>
            <p> {post.postDate} </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
