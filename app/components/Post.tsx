"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import ImageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = ImageUrlBuilder(client);

const Post = ({ post }: { post: SanityDocument }) => {
  return (
    <main className="container mx-auto prose prose-lg">
      <h1>{post.title}</h1>
      {post?.mainImage ? (
        <Image
          src={builder.image(post.mainImage).width(600).height(600).url()}
          alt={post?.mainImage?.alt}
          width={600}
          height={600}
        />
      ) : null}
      {post?.body ? <PortableText value={post.body} /> : null}
    </main>
  );
};

export default Post;
