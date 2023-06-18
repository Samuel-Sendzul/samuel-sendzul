import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex flex-row justify-between px-8 md:px-14 py-4 items-center">
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href="/" className="text-xl text-neutral-2 font-semi">
          samuelsendzul
        </Link>
      </motion.button>
      <button className="md:hidden text-neural--9" onClick={toggleDropdown}>
        {!isDropdownOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
      <div className="hidden md:flex flex-row gap-10 items-center text-xl font-semi">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/about"
            className={`hover:text-neutral-2 ${
              router.pathname === "/about" ? "text-neutral-2" : "text-neutral-1"
            }`}
          >
            about
          </Link>
        </motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/code"
            className={`hover:text-neutral-2 ${
              router.pathname === "/code" ? "text-neutral-2" : "text-neutral-1"
            }`}
          >
            code
          </Link>
        </motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/writing"
            className={`hover:text-neutral-2 ${
              router.pathname === "/writing"
                ? "text-neutral-2"
                : "text-neutral-1"
            }`}
          >
            writing
          </Link>
        </motion.button>
      </div>
      <div className="hidden md:flex flex-row gap-4 items-center text-xl text-neutral-1 font-semi">
        <span className="text-neutral-2">en</span>
        {/* <span className="hover:text-neutral-2">de</span>
        <span className="hover:text-neutral-2">es</span> */}
      </div>
      {isDropdownOpen && (
        <div className="md:hidden flex flex-col gap-2 absolute top-0 right-0 mt-12 mr-4 p-4 bg-neutral--9 rounded-md shadow-lg text-neutral-2 font-semi">
          <Link
            href="/about"
            className={`hover:text-neutral-2 ${
              router.pathname === "/about" ? "text-neutral-2" : "text-neutral-1"
            }`}
          >
            about
          </Link>
          <Link
            href="/code"
            className={`hover:text-neutral-2 ${
              router.pathname === "/code" ? "text-neutral-2" : "text-neutral-1"
            }`}
          >
            code
          </Link>
          <Link
            href="/writing"
            className={`hover:text-neutral-2 ${
              router.pathname === "/writing"
                ? "text-neutral-2"
                : "text-neutral-1"
            }`}
          >
            writing
          </Link>
        </div>
      )}
    </nav>
  );
}
