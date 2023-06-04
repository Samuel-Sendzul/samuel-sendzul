import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { SliderImage } from "@/types";
import React, { useEffect, useState } from "react";

type ImageSliderProps = {
  images: Array<SliderImage>;
};

export default function ImageSliderGrid({ images }: ImageSliderProps) {
  const [scrollPosition, setScrollPosition] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-row gap-2 justify-center">
      <div className="flex flex-col gap-2">
        {images
          .filter((_, index) => index % 2 === 0)
          .map((image, index) => (
            <motion.div
              key={index}
              className="slide-up"
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: scrollPosition > index * 100 ? 0 : 100,
                opacity: scrollPosition > index * 100 ? 1 : 0,
                transition: { duration: 0.5 },
              }}
            >
              <Image src={image.src} alt={image.alt} width={250} height={400} />
            </motion.div>
          ))}
      </div>
      <div className="flex flex-col gap-2">
        {images
          .filter((_, index) => index % 2 !== 0)
          .map((image, index) => (
            <motion.div
              key={index}
              className="slide-up"
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: scrollPosition > index * 100 ? 0 : 100,
                opacity: scrollPosition > index * 100 ? 1 : 0,
                transition: { duration: 0.5 },
              }}
            >
              <Image src={image.src} alt={image.alt} width={250} height={400} />
            </motion.div>
          ))}
      </div>
    </div>
  );
}
