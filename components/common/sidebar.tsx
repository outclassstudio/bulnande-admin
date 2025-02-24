"use client";
import { useRouter } from "next/navigation";

export default function SideBar() {
  const router = useRouter();
  const onClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-40 h-full shadow-md p-4">
      <div className="flex flex-col gap-4">
        <div className="cursor-pointer" onClick={() => onClick("/main")}>
          홈
        </div>
        <div className="cursor-pointer" onClick={() => onClick("/project")}>
          프로젝트
        </div>
      </div>
    </div>
  );
}
