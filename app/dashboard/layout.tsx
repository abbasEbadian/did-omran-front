import { getUser } from "@/api/user";
import DashboardBase from "@components/dashboard/DashboardBase";

export default async function DashboardLayout({
                                                  children,
                                              }: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await getUser();
    console.log({user});

    if (!user) {
        return null;
    }

    return (
        <main className="bg-white100 py-2 lg:py-9">
            <DashboardBase>
                {children}
            </DashboardBase>
        </main>
    );
}
