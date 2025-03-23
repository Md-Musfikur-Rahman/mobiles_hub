import Link from "next/link";
import React from "react";
import Image from "next/image";

const BlogPosts = [
  {
    postId: "iphone-15-pro-max-review",
    postTitle: "iPhone 15 Pro Max: A Comprehensive Review",
    postDate: "19 Sep 2023",
    author: "John Smith",
    category: "Reviews",
    readTime: "8 min read",
    excerpt:
      "An in-depth look at Apple's latest flagship device, featuring the A17 Pro chip, titanium design, and revolutionary camera system.",
    featuredImage: "/assets/blog/iphone15-pro-max.jpg",
    tags: ["Apple", "iPhone", "Flagship", "Review"],
  },
  {
    postId: "android-vs-ios-2024",
    postTitle: "Android vs iOS in 2024: The Ultimate Comparison",
    postDate: "15 Sep 2023",
    author: "Sarah Johnson",
    category: "Comparison",
    readTime: "10 min read",
    excerpt:
      "A detailed comparison of the two major mobile operating systems, exploring their latest features, security, and ecosystem advantages.",
    featuredImage: "/assets/blog/android-vs-ios.jpg",
    tags: ["Android", "iOS", "Comparison", "Mobile OS"],
  },
  {
    postId: "future-of-foldables",
    postTitle: "The Future of Foldable Smartphones",
    postDate: "12 Sep 2023",
    author: "Mike Chen",
    category: "Technology",
    readTime: "6 min read",
    excerpt:
      "Exploring the evolving landscape of foldable devices and what the future holds for this innovative form factor.",
    featuredImage: "/assets/blog/foldable-phones.jpg",
    tags: ["Foldables", "Innovation", "Samsung", "Future Tech"],
  },
  {
    postId: "mobile-photography-tips",
    postTitle: "Master Mobile Photography: Pro Tips and Tricks",
    postDate: "10 Sep 2023",
    author: "Emma Davis",
    category: "Photography",
    readTime: "7 min read",
    excerpt:
      "Learn professional photography techniques to capture stunning photos using your smartphone camera.",
    featuredImage: "/assets/blog/mobile-photography.jpg",
    tags: ["Photography", "Mobile Camera", "Tips", "Tutorial"],
  },
  {
    postId: "5g-impact",
    postTitle: "5G Technology: Revolutionizing Mobile Connectivity",
    postDate: "8 Sep 2023",
    author: "David Wilson",
    category: "Technology",
    readTime: "9 min read",
    excerpt:
      "Understanding the impact of 5G technology on mobile communications and its potential to transform various industries.",
    featuredImage: "/assets/blog/5g-tech.jpg",
    tags: ["5G", "Technology", "Mobile Network", "Innovation"],
  },
  {
    postId: "mobile-gaming-future",
    postTitle: "The Evolution of Mobile Gaming",
    postDate: "5 Sep 2023",
    author: "Alex Turner",
    category: "Gaming",
    readTime: "5 min read",
    excerpt:
      "From simple snake games to console-quality experiences: exploring the remarkable journey of mobile gaming.",
    featuredImage: "/assets/blog/mobile-gaming.jpg",
    tags: ["Gaming", "Mobile Games", "Entertainment", "Technology"],
  },
];

const AllBlogs = () => {
  return (
    <div className="w-4/5 mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-12">
        Latest Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BlogPosts.map((post) => (
          <Link
            key={post.postId}
            href={`/blogs/${post.postId}`}
            className="group backdrop-blur-sm bg-gradient-to-br from-white/60 to-white/30 border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={`https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60`}
                alt={post.postTitle}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width={800}
                height={400}
                priority
              />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <p className="text-sm font-medium text-gray-700">
                  {post.readTime}
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
                  {post.category}
                </span>
                <p className="text-sm text-gray-600">{post.postDate}</p>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 mb-3 transition-colors duration-300">
                {post.postTitle}
              </h2>
              <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {post.author}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
