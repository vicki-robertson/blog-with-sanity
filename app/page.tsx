import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Posts from "./components/Posts";
import Menu from "./components/Menu";

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({query: postsQuery });
  
  return (
    <main className="min-h-screen px-20 pb-20">
      <Menu />
      <Posts posts={posts} />
    </main>
  );
}
