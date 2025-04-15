import MenuBox from "@/components/project/menu-box";

export default function Project() {
  const menus = [
    { title: "프로젝트 조회", link: "project/list" },
    { title: "프로젝트 추가", link: "project/add" },
    { title: "프로젝트 수정", link: "project/edit" },
  ];

  return (
    <div>
      <div className="p-10 flex flex-col gap-10">
        <div className="text-5xl font-extrabold">프로젝트</div>
        <div className="w-full grid grid-flow-col gap-10">
          {menus.map((menu, idx) => (
            <MenuBox content={menu} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
