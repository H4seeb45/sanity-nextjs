import Link from "next/link";
import { RiComputerFill } from "react-icons/ri";

export default function Navbar() {
  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <RiComputerFill />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/about"
                className="hover:text-purple-400 duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-400 duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="hover:text-purple-400 duration-300"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
