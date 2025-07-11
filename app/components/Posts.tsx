import type { SanityDocument } from "@sanity/client";
import Link from "next/link";

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const numberOfPosts = posts.length === 1 ? `1 post` : `${posts.length} posts`;

  return (
    <div>
      <p>{numberOfPosts}</p>
      {posts.map((post) => 
        <div key={post._id}>
          <Link href={post.slug.current}>
            <h2>{post.title}</h2>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Posts;
