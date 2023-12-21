import data from "@/data"
import SideBar from "@/shopcomponents/SideBarPart/SideBar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;

}) {

  const categories = ['All', ...new Set(data?.map((item) => item.category))];
  return (

    <main className="flex flex-wrap md:flex-nowrap justify-center md:justify-start ">
      <div className="text-center md:ml-36 lg:ml-48 mt-10">
        <SideBar categories={categories} />
      </div>

      <div>
        {children}
      </div>
    </main>
  );
}