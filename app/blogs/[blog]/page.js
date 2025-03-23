import React from "react";
import Link from "next/link";

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
    content: `The iPhone 15 Pro Max represents Apple's most ambitious smartphone yet, pushing the boundaries of what's possible in mobile technology. The new A17 Pro chip delivers unprecedented performance, while the titanium design offers both durability and elegance.

The camera system has been completely revolutionized, featuring a 48MP main sensor that captures stunning detail in any lighting condition. The new 5x telephoto lens brings you closer to your subject than ever before, while maintaining exceptional image quality.

Perhaps the most significant change is the switch to USB-C, finally bringing universal charging compatibility to the iPhone lineup. This change not only simplifies the charging experience but also enables faster data transfers and more versatile connectivity options.

The ProMotion display continues to impress with its adaptive refresh rate, now with improved power efficiency. The Action Button, replacing the traditional mute switch, adds a new layer of customization to the iPhone experience.`,
    featuredImage:
      "https://images.unsplash.com/photo-1696426505729-5c1d538b0f6c?w=800&auto=format&fit=crop&q=60",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
    tags: ["Apple", "iPhone", "Flagship", "Review"],
  },
];

const SingleBlog = ({ params }) => {
  const postId = params.blog;
  const post = BlogPosts.find((post) => post.postId === postId);
  const relatedPosts = BlogPosts.filter(
    (p) => p.postId !== postId && p.tags.some((tag) => post.tags.includes(tag))
  ).slice(0, 3);

  if (!post) {
    return (
      <div className="w-4/5 mx-auto my-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Blog Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Link
          href="/blogs"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto my-10 px-4">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="relative h-[60vh] w-full rounded-2xl overflow-hidden mb-8">
          <img
            src={post.featuredImage}
            alt={post.postTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 text-white/80 mb-4">
                <span className="px-3 py-1 text-sm font-medium bg-purple-600/80 backdrop-blur-sm rounded-full">
                  {post.category}
                </span>
                <span className="text-sm">{post.readTime}</span>
                <span className="text-sm">{post.postDate}</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                {post.postTitle}
              </h1>
              <div className="flex items-center gap-4">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-12 h-12 rounded-full border-2 border-white/20"
                />
                <div className="text-white">
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-white/80">Tech Journalist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="prose prose-lg max-w-none mb-16">
        <div className="backdrop-blur-sm bg-white/40 border border-white/20 rounded-2xl p-8 shadow-lg">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-gray-800 mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Tags Section */}
      <div className="mb-16">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.postId}
                href={`/blogs/${relatedPost.postId}`}
                className="group backdrop-blur-sm bg-white/40 border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={relatedPost.featuredImage}
                    alt={relatedPost.postTitle}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 mb-2 transition-colors duration-300">
                    {relatedPost.postTitle}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {relatedPost.postDate}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default SingleBlog;
