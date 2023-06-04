import AboutItem from "@/components/AboutItem";
import ImageSliderGrid from "@/components/ImageSliderGrid";
import { SliderImage } from "@/types";
import Image from "next/image";

const images: Array<SliderImage> = [
  {
    id: "1",
    src: "/images/aboutImages/rocklands-sam.jpg",
    alt: "Sam at Rocklands",
  },
  {
    id: "2",
    src: "/images/aboutImages/chocolate-speedway.jpg",
    alt: "Chocolate Speedway",
  },
  {
    id: "3",
    src: "/images/aboutImages/nini.jpg",
    alt: "Nini",
  },
  {
    id: "4",
    src: "/images/aboutImages/day1.jpg",
    alt: "Day 1",
  },
  {
    id: "5",
    src: "/images/aboutImages/sam-mon.jpg",
    alt: "Sam and Monique",
  },
  {
    id: "6",
    src: "/images/aboutImages/river.jpg",
    alt: "River",
  },
  {
    id: "7",
    src: "/images/aboutImages/basecamp.jpg",
    alt: "Basecamp",
  },
  {
    id: "8",
    src: "/images/aboutImages/stitch-beanie.jpg",
    alt: "Beanie",
  },
];

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-10 px-10 mt-[40px] md:mt-[80px]">
        <div className="flex flex-col gap-4 text-2xl sm:text-start text-neutral-2 font-semi">
          <Image src="/images/about.svg" width={60} height={60} alt="about" />
          <span>A bit about me</span>
        </div>
        <div className="flex flex-col gap-6">
          <AboutItem>
            <Image
              src="/images/stitch.svg"
              width={40}
              height={30}
              alt="stitch"
            />
            <span>Full stack engineer at Stitch Money</span>
          </AboutItem>
          <AboutItem>
            <Image
              src="/images/climber.svg"
              width={40}
              height={30}
              alt="climber"
            />
            <span>
              Avid sport climber who loves being outside and exploring nature
            </span>
          </AboutItem>
          <AboutItem>
            <Image src="/images/study.svg" width={40} height={30} alt="study" />
            <span>
              BCom (Hons) Financial Risk Management & Mathematical Statistics
              (Cum Laude)
            </span>
          </AboutItem>
          <AboutItem>
            <Image
              src="/images/location.svg"
              width={40}
              height={30}
              alt="location"
            />
            <span>Cape Town, South Africa</span>
          </AboutItem>
        </div>
        <ImageSliderGrid images={images} />
      </div>
    </div>
  );
}
