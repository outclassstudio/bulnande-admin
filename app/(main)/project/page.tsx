import Button from "@/components/common/button";
import Input from "@/components/common/input";

export default function Project() {
  return (
    <div>
      <div className="h-20 flex items-center text-4xl font-bold">
        프로젝트 추가하기
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex gap-2 items-center">
          <span className="w-20">행사명</span>
          <Input name="" />
        </div>
        <div className="flex gap-2 items-center">
          <span className="w-20">행사일시</span>
          <Input name="" />
        </div>
        <div className="flex gap-2 items-center">
          <span className="w-20">행사분류</span>
          <Input name="" />
        </div>
        <div className="flex gap-2 items-center">
          <span className="w-20">공연자</span>
          <Input name="" />
        </div>
        <div className="flex gap-2 items-center">
          <span className="w-20">행사소개</span>
          <Input name="" />
        </div>
        <div className="flex gap-2 items-center">
          <span className="w-20">행사영상</span>
          <Input name="" />
        </div>
        <div className="flex gap-2 items-center">
          <span className="w-20">행사사진</span>
          <Input name="" />
        </div>
        <div className="w-40">
          <Button text="추가하기" />
        </div>
      </div>
    </div>
  );
}
