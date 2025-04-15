"use client";

import { useRouter } from "next/navigation";

interface IMenu {
  title: string;
  link: string;
}

export default function MenuBox({ content }: { content: IMenu }) {
  const router = useRouter();
  const onClick = (route: string) => {
    router.push(route);
  };

  return (
    <div
      className="border-neutral-200 border-[1px] py-14 font-bold text-neutral-700 text-2xl 
      flex justify-center items-center cursor-pointer shadow-md hover:bg-neutral-100"
      onClick={() => onClick(content.link)}
    >
      {content.title}
    </div>
  );
}
