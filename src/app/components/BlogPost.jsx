import React from "react";
import { urlFor } from "../../sanity/lib/image";
import { format } from "date-fns";
import CategoryButton from "./CategoryButton";
import SanityImage from "./SanityImage"; // Adjust path if needed

const BlogPost = ({ post }) => {
  return (
    <div className="bg-[#DDF8FE] mb-6 border border-gray-300 rounded-[50px] shadow-sm w-full max-w-sm mx-auto h-[500px] flex flex-col justify-between"> {/* Set fixed height */}
      {post.mainImage && (
        <SanityImage
          image={post.mainImage}
          alt={post.title}
          className="w-full h-[250px] object-cover rounded-t-[50px]"
          style={{ aspectRatio: "16/9" }}
        />
      )}
      <section className="px-4 pb-5 flex flex-col justify-between flex-grow">
        <div>
          <div className="mb-2">
            {post.categories?.map((cat) => (
              <CategoryButton key={cat.title} category={cat.title} />
            )) || <CategoryButton category="Uncategorized" />}
          </div>
          <h2 className="text-xl font-bold mb-2 line-clamp-2 h-[50px]">{post.title}</h2> {/* Limit title to 2 lines */}
          <div className="mb-2 h-[60px] overflow-hidden">
            <p className="text-gray-600 text-sm line-clamp-3">
              {post.body[0].children[0].text}
            </p>
          </div>
        </div>
        <a
          href={`/blog/${post.slug.current}`}
          className="block mb-4 text-gray-600 underline text-sm"
        >
          Read more
        </a>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex flex-col items-center">
            {post.author?.image && (
              <img
                src={urlFor(post.author.image).width(120).height(120).url()}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover mr-2"
              />
            )}
            <span className="font-medium">{post.author?.name}</span>
          </div>
          <div className="text-right text-xs">
            <span>Published on:</span>
            <br />
            <span className="font-medium">
              {post.publishedAt
                ? format(new Date(post.publishedAt), "d MMM yyyy")
                : "Unknown"}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
