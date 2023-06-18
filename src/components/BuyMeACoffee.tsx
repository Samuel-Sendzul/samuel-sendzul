import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function BuyMeACoffee() {
  const isMobile = useMediaQuery({ query: `(max-width: 820px)` });
  function handleClick() {
    window.open("https://wigwag.me/samuel", "_blank");
  }
  return (
    <button
      className="flex flex-row gap-2 rounded-sm shadow-xl px-2 md:px-4 py-2 md:py-4 items-center justify-center"
      onClick={handleClick}
    >
      <Image
        src="/images/wigwag.svg"
        alt="Wigwag"
        width={isMobile ? 70 : 100}
        height={40}
      />
      <span className="text-md md:text-xl font-semi">Buy Me a Coffee</span>
    </button>
  );
}
