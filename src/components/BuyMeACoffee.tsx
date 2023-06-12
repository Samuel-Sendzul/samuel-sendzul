import Image from "next/image";

export default function BuyMeACoffee() {
  function handleClick() {
    window.open("https://wigwag.me/samuel", "_blank");
  }
  return (
    <button
      className="flex flex-row gap-2 rounded-sm shadow-xl px-4 py-4 items-center justify-center"
      onClick={handleClick}
    >
      <Image src="/images/wigwag.svg" alt="Wigwag" width={100} height={40} />
      <span className="text-xl font-semi">Buy Me a Coffee</span>
    </button>
  );
}
