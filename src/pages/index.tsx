import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center justify-center md:h-[80vh]">
      <motion.div
        className="flex flex-col gap-2 my-5 slide-up"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        }}
      >
        <span className="text-3xl md:text-3xl text-neutral-2 font-semi">
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
      </motion.div>

      <div className="flex flex-col gap-4 w-[280px] md:w-[400px] text-justify text-lg md:text-xl text-neutral-2 my-2">
        <span className="text-2xl text-center md:text-start text-neutral-2 font-semi">
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
  );
}
