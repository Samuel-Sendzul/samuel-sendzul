import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-row justify-center md:justify-end items-center p-8">
      <div className="flex flex-row gap-2">
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
        <Link
          href={"https://github.com/Samuel-Sendzul"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="/images/github.svg" width={40} height={40} alt="github" />
        </Link>
      </div>
    </div>
  );
}
