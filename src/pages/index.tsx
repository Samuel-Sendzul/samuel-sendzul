import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <NavBar />
      <div className="flex flex-col sm:flex-row gap-5 items-center justify-center sm:h-[80vh]">
        <div className="flex flex-col gap-2 my-5">
          <span className="text-3xl sm:text-3xl text-neutral-2 font-semi">
            {"Hi, my name is Sam!"}
          </span>
          <Image
            src="/images/home.jpg"
            alt="Samuel Sendzul"
            width={283}
            height={536}
            unoptimized={true}
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-4 w-[280px] sm:w-[400px] text-justify text-lg sm:text-xl text-neutral-2 my-2">
          <span className="text-2xl text-center sm:text-start text-neutral-2 font-semi">
            {"Welcome to my website."}
          </span>
          <span>{"I'm a full stack software developer and entrepreneur."}</span>
          <span>
            {
              "Here, you'll find a collection of my coding projects, writing about the businesses I’ve started, and some personal reflections."
            }
          </span>
          <div>
            <span>{"I hope you enjoy and feel free to "}</span>
            <Link href="/" className="text-decoration-line: underline">
              {"let me know what you think!"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
