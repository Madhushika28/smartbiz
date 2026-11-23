import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="min-h-screen lg:ml-64">
        <div className="pl-16 lg:pl-0">
          <Navbar />
        </div>

        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;