import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between px-14 py-4 items-center">
      <Link href="/" className="text-xl text-neutral-2 font-semi">
        samuelsendzul
      </Link>
      <div className="flex flex-row gap-10 items-center text-xl text-neutral-1 font-semi">
        <Link href="/about">about</Link>
        <Link href="/code">code</Link>
        <Link href="/writing">writing</Link>
      </div>
      <div className="flex flex-row gap-4 items-center text-xl text-neutral-1 font-semi">
        <span>en</span>
        <span>de</span>
        <span>es</span>
      </div>
    </nav>
  );
}
