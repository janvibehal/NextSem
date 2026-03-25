import Sidebar from "./components/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">

      {/* Sidebar */}
      <div className="h-full">
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="flex-1 h-full">
        {children}
      </div>

    </div>
  )
}