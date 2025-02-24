import SideBar from "@/components/common/sidebar";

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SideBar />
      <div className="ml-44">{children}</div>
    </div>
  );
}
