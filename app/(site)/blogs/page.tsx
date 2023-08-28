import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/sanity/sanity.query";
import type { BlogType } from "@/types";

export default async function Blog() {
  const blogs: BlogType[] = await getBlogs();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured Blogs
        </h1>
        {/* <p className="text-base text-zinc-400 leading-relaxed">
          You can check
        </p> */}
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {blogs.map((blog) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog._id}
            className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <Image
              src={blog.logo}
              width={60}
              height={60}
              alt={blog.name}
              className="bg-zinc-800 rounded-md p-2"
            />
            <div>
              <h2 className="font-semibold mb-1">{blog.name}</h2>
              <div className="text-sm text-zinc-400">{blog.tagline}</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
