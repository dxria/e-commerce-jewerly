import SideBar from "@/shopcomponents/SideBarPart/SideBar";
import GetCategories from "@/shopcomponents/SideBarPart/GetCategories";
  
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;

}) {
  const jewels:any = GetCategories();
  const categories = ['all', ...new Set(jewels.map((item:any) => item.category))] as string[];

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