"use client";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Textarea from "@/components/common/textarea";
import PhotoPreviewList from "@/components/project/photo-preivew-list";
import { PhotoIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function ProjectAddPage() {
  const [preview, setPreview] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [summary, setSummary] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");
  const [photoId, setPhotoId] = useState("");
  const [tmpFile, setTmpFile] = useState<File | null>(null);
  const [pending, setPendig] = useState(false);

  const hompages = ["불난데부채질", "IAM"];
  const categories = ["강연", "공연", "테마카페", "프로그램"];

  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (!files) {
      return;
    }

    // 이미지가 이미 존재하면 뒤에 추가
    for (let file of files) {
      const url = URL.createObjectURL(file);
      setPreview((prev) => [...prev, url]);
    }

    // console.log("urlList", urlList);

    // const file = files[0];
    // setTmpFile(file);
    // const url = URL.createObjectURL(file);
    // setPreview(url);

    // const { success, result } = await getUploadUrl();
    // if (success) {
    //   const { id, uploadURL } = result;
    //   setUploadUrl(uploadURL);
    //   setPhotoId(id);
    // }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && post) {
      setPendig(true);

      let photo;
      if (tmpFile instanceof File) {
        const cloudflareForm = new FormData();
        cloudflareForm.append("file", tmpFile);
        const response = await fetch(uploadUrl, {
          method: "post",
          body: cloudflareForm,
        });
        if (response.status !== 200) {
          return;
        }
        photo = `https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/${photoId}`;
      } else {
        photo = "/undefined";
      }

      const data = {
        title,
        post,
        photo,
        summary,
      };

      // await uploadPost(data);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-12">
      <div className="w-full flex items-center text-4xl font-bold">
        프로젝트 추가하기
      </div>

      <div className="grid grid-cols-2 w-full gap-8 sm:gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 items-center w-full">
            <span className="w-20 font-semibold text-xl mr-2">분류</span>
            <select className="primary-input" defaultValue="DEFAULT">
              <option value="DEFAULT" disabled hidden>
                홈페이지 선택해주세요.
              </option>
              {hompages.map((homepage, idx) => (
                <option key={idx}>{homepage}</option>
              ))}
            </select>
          </div>
          <div className="w-full flex gap-2 items-center">
            <span className="w-20 font-semibold text-xl mr-2">행사명</span>
            <Input name="" />
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-20 font-semibold text-xl mr-2">행사일</span>
            {/* <Input name="" /> */}
            <input className="primary-input" type="date" />
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-20 font-semibold text-xl mr-2">행사분류</span>
            <select className="primary-input" defaultValue="DEFAULT">
              <option value="DEFAULT" disabled hidden>
                카테고리를 선택해주세요.
              </option>
              {categories.map((category, idx) => (
                <option key={idx}>{category}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-20 font-semibold text-xl mr-2">공연자</span>
            <Input name="" />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 items-center">
            <span className="w-20 font-semibold text-xl mr-2">행사영상</span>
            <input type="url" className="primary-input" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex font-semibold text-xl">행사소개</div>
            <Textarea name="행사소개" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full">
        <div className="flex flex-col gap-4">
          <div className="font-bold text-xl dark:text-neutral-200">
            행사사진
          </div>
          <div className="flex gap-5">
            <label
              htmlFor="photo"
              className="border-2 size-16 sm:size-24 aspect-square flex flex-col items-center justify-center 
          text-neutral-500 dark:text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer
          p-2 mb-4"
            >
              <PhotoIcon />
              <input
                onChange={onImageChange}
                type="file"
                id="photo"
                name="photo"
                className="hidden"
                multiple
              />
            </label>
          </div>
          {preview.length != 0 ? <PhotoPreviewList preview={preview} /> : ""}
          {/* <div className="text-neutral-400 text-sm">
          {state?.fieldErrors.photo}
        </div> */}
        </div>
      </div>
      <div className="w-40">
        <Button text="추가하기" />
      </div>
    </div>
  );
}
