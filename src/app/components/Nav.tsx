"use client";

import { usePathname } from "next/navigation";

const selected =
  "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-400";

const unselected =
  "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-gray-200 rounded-xl bg-gradient-to-r from-sky-950 to-gray-900 to-50% shadow-md">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-5">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:text-blue-400 transition-all">
            Uniqueness Rating
          </span>
        </a>

        <div
          className="sm:hidden w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/about"
                className={
                  pathname.startsWith("/about") ? selected : unselected
                }
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/queue"
                className={
                  pathname.startsWith("/queue") ? selected : unselected
                }
                aria-current="page"
              >
                Queue
              </a>
            </li>
            <li>
              <a
                href="/scores/best"
                className={
                  pathname.startsWith("/scores") ? selected : unselected
                }
                aria-current="page"
              >
                Scores
              </a>
            </li>
            <li>
              <a
                href="https://github.com/psehr/uniqueness-rating-performance"
                target="_blank"
                className={pathname.startsWith("/docs") ? selected : unselected}
                aria-current="page"
              >
                Docs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
