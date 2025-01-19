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
    <main className="bg-white100 py-9">
      <div className="grid grid-cols-12 container mx-auto">
          <aside className="col-span-3"> <Sidbar/></aside>
          <section className="col-span-9 bg-white rounded-e-2xl px-5 py-8">
              {children}
          </section>
      </div>
    </main>
    </>
  );
}
