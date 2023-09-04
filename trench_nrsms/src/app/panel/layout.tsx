import Header from "@/components/Header";
import Sidenavcomponent from "@/components/Sidenavcomponent";
import { Toaster } from 'react-hot-toast';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen w-screen flex flex-col justify-start items-start select-none overflow-hidden">
      <Header />
      <div className="h-full w-screen flex">
        <Sidenavcomponent />
        {children}
        <Toaster/>
      </div>
    </section>
  );
}
