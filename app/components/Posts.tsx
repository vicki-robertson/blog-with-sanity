import type { SanityDocument } from "@sanity/client";
import Link from "next/link";

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const numberOfPosts = posts.length === 1 ? `this post` : `these ${posts.length} posts`;

  return (
    <div className="mx-auto grid grid-cols-1 divide-y divide-cyan-700">
      <h2 className="text-2xl text-cyan-950 pt-7 pb-3 font-semibold">Let's draw...</h2>
      <p className="py-6 text-cyan-950">Get your art materials ready, sketchbook open and find curated, public domain inspiration from {numberOfPosts}.</p>
      {posts.map((post) => 
          <Link 
            className="p-4 group"
            key={post._id}
            href={post.slug.current}>
            <h2 className="text-cyan-950 font-medium group-hover:font-bold">{post.title}</h2>
          </Link>
      )}
    </div>
  );
};

export default Posts;
