import ArticleItem from "@/components/ArticleItem";
import BuyMeACoffee from "@/components/BuyMeACoffee";
import { articles } from "@/copy/articles";
import Image from "next/image";

export default function Code() {
  return (
    <div className="flex flex-col items-center gap-10 justify-center mb-[50px] md:mb-[100px]">
      <div className="flex flex-col gap-10 px-10 mt-[40px] md:mt-[80px]">
        <div className="flex flex-col gap-4 text-2xl sm:text-start text-neutral-2 font-semi">
          <Image src="/images/code.svg" width={60} height={60} alt="about" />
          <span>Browse my latest open source coding projects</span>
        </div>
        {articles.map((article) => (
          <ArticleItem
            header={article.header}
            key={article.header}
            body={article.body}
            link={article.link}
            img={article.img}
            links={article.links}
          />
        ))}
      </div>
      <BuyMeACoffee />
    </div>
  );
}
