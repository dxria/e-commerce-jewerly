import Sidebar from "@/components/profile/Sidebar/Sidebar";

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;

}) {
    const categories = ["contact-information", "order-history", "wishlist"]
    return (

        <main className="flex flex-wrap md:flex-nowrap justify-center md:justify-start ">
            <div className="text-center md:ml-36 lg:ml-48 mt-10">
                <Sidebar categories={categories} />
            </div>
            <div>
                {children}
            </div>
        </main>

    )
}
