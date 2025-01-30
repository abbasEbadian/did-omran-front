import { getUser } from "@/api/user";
import Sidebar from "@/app/components/dashboard/Sidbar";
import Header from "@/app/components/header/Header";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await getUser();
    if (!user) redirect("/auth");

    return (
        <>
            <Header />
            <main className="bg-white100 py-9">
                <div className="grid grid-cols-12 container mx-auto">
                    <aside className="col-span-3">
                        {" "}
                        <Sidebar />
                    </aside>
                    <section className="col-span-9 bg-white rounded-e-2xl px-5 py-8">
                        {children}
                    </section>
                </div>
            </main>
        </>
    );
}
