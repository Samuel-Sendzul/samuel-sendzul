import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="md:fixed bottom-0 left-0 w-full flex flex-row justify-center md:justify-end items-center p-8">
      <div className="flex flex-row gap-2">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href={"https://www.linkedin.com/in/samuel-sendzul/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/images/linkedin.svg"
              width={40}
              height={40}
              alt="linkedin"
            />
          </Link>
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href={"https://github.com/Samuel-Sendzul"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/images/github.svg"
              width={40}
              height={40}
              alt="github"
            />
          </Link>
        </motion.button>
      </div>
    </div>
  );
}
