import Header from "@/components/Header";
import Sidenavcomponent from "@/components/Sidenavcomponent";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-h-screen w-screen flex flex-col overflow-hidden">
      <Header />
      <div className="min-h-full w-screen flex">
        <Sidenavcomponent/>
        {children}
      </div>
    </section>
  );
}
