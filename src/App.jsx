import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import FAQ from "./pages/FAQ.jsx";
import Team from "./pages/Team.jsx";
import Admin from "./pages/Admin.jsx";
import NotFound from "./pages/NotFound.jsx";
import { useState } from "react";


export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="hidden md:block w-60 bg-white border-r">
        <div className="p-4 font-semibold">WiTCON</div>
        <nav className="flex flex-col">
          {[
            { to: "/", label: "Home" },
            { to: "/register", label: "Registration" },
            { to: "/profile", label: "Attendee Profile" },
            { to: "/faq", label: "FAQ" },
            { to: "/team", label: "Team" },
            { to: "/admin", label: "Admin" },
          ].map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                "px-4 py-2 hover:bg-gray-100 " + (isActive ? "font-medium" : "")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="px-3 py-2 border rounded text-sm"
              >
                {mobileOpen ? "Close" : "Menu"}
              </button>
            </div>
            <h1 className="text-lg font-semibold">WiTCON Skeleton</h1>
            <div className="text-sm text-gray-500">v0.1</div>
          </div>
        </header>

        {/* Mobile menu (only shows when open) */}
        {mobileOpen && (
          <nav className="md:hidden bg-white border-b px-4 py-3 space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/register", label: "Registration" },
              { to: "/profile", label: "Attendee Profile" },
              { to: "/faq", label: "FAQ" },
              { to: "/team", label: "Team" },
              { to: "/admin", label: "Admin" },
            ].map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                onClick={() => setMobileOpen(false)} // auto close after click
                className={({ isActive }) =>
                  "block px-2 py-1 rounded hover:bg-gray-100 " +
                  (isActive ? "font-medium text-blue-600" : "")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}

        <main className="max-w-6xl mx-auto w-full px-4 py-6">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/team" element={<Team />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
        </main>

        <footer className="mt-auto border-t bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-500">
            © {new Date().getFullYear()} WiTCON
          </div>
        </footer>
      </div>
    </div>
  );
}

