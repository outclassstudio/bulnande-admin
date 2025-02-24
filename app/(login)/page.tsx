"use client";

import Input from "@/components/common/input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const onClick = () => {
    router.push("/main");
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-4">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div>관리자 페이지 로그인</div>
        <div className="flex gap-2 items-center">
          <span>id</span>
          <Input
            name="id"
            className="w-40 h-10"
            type="text"
            placeholder="아이디를 입력하세요"
            required={true}
          />
        </div>
        <div className="flex gap-2 items-center">
          <span>pw</span>
          <Input
            name="id"
            className="w-40 h-10"
            type="text"
            placeholder="비밀번호를 입력하세요"
            required={true}
          />
        </div>
        <button onClick={onClick}>로그인</button>
      </div>
    </div>
  );
}
