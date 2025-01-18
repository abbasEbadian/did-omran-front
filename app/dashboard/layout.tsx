import Sidbar from "@/app/components/dashboard/Sidbar";
import Header from "@/app/components/header/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Header />  
    <main className="grid grid-cols-12 container mx-auto">
        <aside className="col-span-3"> <Sidbar/></aside>
        <section className="col-span-9">
            {children}
        </section>
    </main>
    </>
  );
}
