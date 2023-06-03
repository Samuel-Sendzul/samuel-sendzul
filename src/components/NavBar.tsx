import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <nav className="flex flex-row justify-between px-8 sm:px-14 py-4 items-center">
      <Link href="/" className="text-xl text-neutral-2 font-semi">
        samuelsendzul
      </Link>
      <div className="sm:hidden">
        <button className="text-white" onClick={toggleDropdown}>
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
        </button>
      </div>
      <div className="hidden sm:flex flex-row gap-10 items-center text-xl text-neutral-1 font-semi">
        <Link href="/" className="hover:text-neutral-2">
          about
        </Link>
        <Link href="/" className="hover:text-neutral-2">
          code
        </Link>
        <Link href="/" className="hover:text-neutral-2">
          writing
        </Link>
      </div>
      <div className="hidden sm:flex flex-row gap-4 items-center text-xl text-neutral-1 font-semi">
        <span className="hover:text-neutral-2">en</span>
        <span className="hover:text-neutral-2">de</span>
        <span className="hover:text-neutral-2">es</span>
      </div>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="sm:hidden flex flex-col gap-2 absolute top-0 right-0 mt-12 mr-4 p-4 bg-neutral--9 rounded-md shadow-lg text-neutral-2 font-semi"
        >
          <Link href="/" className="hover:text-neutral-2">
            about
          </Link>
          <Link href="/" className="hover:text-neutral-2">
            code
          </Link>
          <Link href="/" className="hover:text-neutral-2">
            writing
          </Link>
        </div>
      )}
    </nav>
  );
}
