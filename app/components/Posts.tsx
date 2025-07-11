import type { SanityDocument } from "@sanity/client";
import Link from "next/link";
import Image from "next/image";

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const numberOfPosts =
    posts.length === 1 ? `this post` : `these ${posts.length} posts`;

  return (
    <div className="mx-auto px-4">
      <h2 className="text-2xl text-cyan-950 pt-7 pb-3 font-semibold">
        Let's draw...
      </h2>
      <p className="py-6 text-cyan-950">
        Get your art materials ready, sketchbook open and find curated, public
        domain inspiration from {numberOfPosts}.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/${post.slug.current}`}
            className="group rounded-xl outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
            aria-label={`Read more about ${post.title}`}
          >
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl focus-within:shadow-2xl transition-shadow duration-300 bg-white border border-transparent hover:border-gray-300 focus-within:border-gray-400">
              {post?.imageURL && (
                <div className="overflow-hidden">
                  <Image
                    src={post.imageURL}
                    alt={post.mainImage?.alt || post.title}
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-medium text-cyan-900 transition-all duration-200 group-hover:font-bold">
                  {post.title}
                </h2>
                <p className="text-cyan-800 mt-2">{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
