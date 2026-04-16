import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        <div className="flex h-screen">
          
          {/* Sidebar */}
          <aside className="w-64 bg-zinc-900 p-4">
            <h1 className="text-xl font-bold mb-6">
              🎮 Save State
            </h1>

            <nav className="space-y-2">
              <a href="/" className="block">Dashboard</a>
              <a href="/library" className="block">Library</a>
              <a href="/stats" className="block">Stats</a>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-y-auto">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}