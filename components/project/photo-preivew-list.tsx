export default function PhotoPreviewList({ preview }: { preview: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold">🖼️ {preview.length}개의 사진</div>
      <div className="w-full flex gap-4 flex-wrap">
        {preview.map((url, idx) => (
          <div
            className="bg-center bg-cover size-24 sm:size-40 rounded-md relative
          ring-[1px] ring-neutral-300"
            style={{
              backgroundImage: `url(${url})`,
            }}
            key={idx}
          ></div>
        ))}
      </div>
    </div>
  );
}
