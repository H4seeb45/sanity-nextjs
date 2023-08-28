import Image from "next/image";
import { Metadata } from "next";
import { getSingleBlog, getSingleProject } from "@/sanity/sanity.query";
import type { BlogType } from "@/types";
import { PortableText } from "@portabletext/react";
import fallBackImage from "@/public/project.png";

type Props = {
  params: {
    blog: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.blog;
  const blog: BlogType = await getSingleBlog(slug);

  return {
    title: `${blog.name} | Blog`,
    description: blog.tagline,
    openGraph: {
      images: blog.coverImage?.image || "add-a-fallback-blog-image-here",
      title: blog.name,
      description: blog.tagline,
    },
  };
}

export default async function Blog({ params }: Props) {
  const slug = params.blog;
  const blog: BlogType = await getSingleProject(slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {blog.name}
          </h1>

          {/* <a
            href={project.projectUrl}
            rel="noreferrer noopener"
            className="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2"
          >
            Explore
          </a> */}
        </div>

        <Image
          className="rounded-xl border border-zinc-800"
          width={900}
          height={460}
          src={blog.coverImage?.image || fallBackImage}
          alt={blog.coverImage?.alt || blog.name}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <PortableText value={blog.description} />
        </div>
      </div>
    </main>
  );
}
