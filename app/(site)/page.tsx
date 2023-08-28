import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./icons/HeroSvg";
import Job from "./components/Job";
import gitHubImage from "@/public/GitHub_Logo.svg";
import linkedInImage from "@/public/Linkedin-Logo.png";
import Image from "next/image";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                {data.headline}
              </h1>
              <p className="text-base text-zinc-400 leading-relaxed">
                {data.shortBio}
              </p>
              <ul className="flex items-center gap-x-6 my-10">
                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <div className="flex column items-center justify-center">
                      <li key={id}>
                        <a
                          href={value}
                          rel="noreferer noopener"
                          className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                        >
                          {/* {key[0].toUpperCase() + key.toLowerCase().slice(1)} */}
                          {id === 0 ? (
                            <Image
                              key={id}
                              className="rounded-xl border border-zinc-800 bg-white p-2 hover:bg-blue-200"
                              width={50}
                              height={50}
                              src={gitHubImage}
                              alt={"github logo"}
                            />
                          ) : (
                            <Image
                              key={id}
                              className="rounded-xl border border-blue-900 bg-white px-2 hover:bg-blue-200"
                              width={100}
                              height={50}
                              src={linkedInImage}
                              alt={"linkedin logo"}
                            />
                          )}
                        </a>
                      </li>
                    </div>
                  ))}
              </ul>
            </div>
          ))}
        <HeroSvg />
      </section>
      <Job />
    </main>
  );
}
