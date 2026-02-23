import Sidebar from "@/components/Sidebar"

export default function SchoolLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="overflow-auto">
                {children}
            </main>
        </div>
    )
}