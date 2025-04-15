"use client";

import Input from "@/components/common/input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const onClick = () => {
    router.push("/main");
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-4 bg-neutral-50">
      <div className="flex flex-col gap-12 justify-center items-center">
        <div className="text-3xl sm:text-5xl font-extrabold">
          SJYG 관리자 페이지 로그인
        </div>
        <div className="flex flex-col gap-6 w-full items-center">
          <div className="flex gap-2 items-center w-full">
            <Input
              name="id"
              type="text"
              placeholder="아이디를 입력하세요"
              required={true}
            />
          </div>
          <div className="flex gap-2 items-center w-full">
            <Input
              name="id"
              type="text"
              placeholder="비밀번호를 입력하세요"
              required={true}
            />
          </div>
        </div>
        <button className="primary-btn py-2 font-bold" onClick={onClick}>
          로그인
        </button>
        <div className="text-neutral-400 text-sm">
          SJYG All rights reserved.
        </div>
      </div>
    </div>
  );
}
