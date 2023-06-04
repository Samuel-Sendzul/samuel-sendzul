import { ReactNode } from "react";

type AboutItemProps = {
  children?: ReactNode;
};

export default function AboutItem({ children }: AboutItemProps) {
  return (
    <div className="flex flex-row gap-4 items-center text-lg sm:text-xl text-neutral-2 w-[300px] sm:w-[500px]">
      {children}
    </div>
  );
}
