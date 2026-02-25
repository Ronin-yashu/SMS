import Sidebar from "@/components/Sidebar"

export default async function SchoolLayout({ children, params }) {
    const { username } = await params;
    return (
        <div className="flex h-[88vh]">
            <Sidebar username={username} />
            <main className="overflow-auto">
                {children}
            </main>
        </div>
    )
}