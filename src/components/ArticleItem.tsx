import { IconLink } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

type ArticleItemProps = {
  header: string;
  body: string;
  link: string;
  img: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  links: Array<IconLink>;
};

export default function ArticleItem(props: ArticleItemProps) {
  const isMobile = useMediaQuery({ query: `(max-width: 820px)` });

  return (
    <div className="flex flex-col">
      <Link href={props.link} rel="noopener noreferrer" target="_blank">
        <div className="flex flex-row border-t py-5">
          <div className="flex flex-col gap-5">
            <span className="text-lg md:text-xl font-medium md:w-[450px]">
              {props.header}
            </span>
            <span className="text-sm md:text-md text-neutral-1 md:w-[450px]">
              {props.body}
            </span>
          </div>
          {!isMobile && (
            <div className="flex flex-row justify-center  md:w-[300px]">
              <Image
                src={props.img.src}
                width={props.img.width}
                height={props.img.height}
                alt={props.img.alt}
              />
            </div>
          )}
        </div>
        <div className="flex flex-row gap-4 items-center">
          {props.links.map((link) => (
            <Link
              key={link.alt}
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image src={link.src} width={40} height={40} alt={link.alt} />
            </Link>
          ))}
        </div>
      </Link>
    </div>
  );
}
