import Navbar from "@/src/components/module/Navbar/Navbar";
import Sidebar from "@/src/components/module/Sidebar/Sidebar";
import ProjectsOverview from "./project-overview/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div className="w-80 bg-primary-900 h-screen">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="p-4">
          <ProjectsOverview />
        </div>
      </div>
    </main>
  );
}
