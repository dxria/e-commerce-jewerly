import SideBar from "@/shopcomponents/SideBarPart/SideBar";
import GetCategories from "@/shopcomponents/SideBarPart/GetCategories";
import Filteroptions from "@/components/shop/Filteroptions";
  
export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;

}) {
  const categories = await GetCategories() as string [];
  return (

    <main className="flex flex-wrap md:flex-nowrap justify-center md:justify-start ">
      <div className="text-center md:ml-36 lg:ml-48 mt-10">
        <SideBar categories={categories} />
        <Filteroptions />
      </div>

      <div>
        {children}
      </div>
    </main>
  );
}