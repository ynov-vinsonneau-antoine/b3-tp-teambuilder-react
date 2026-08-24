import { Outlet, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil", end: true },
  { to: "/champions", label: "Champions", end: false },
  { to: "/equipe", label: "Équipe", end: false },
];

const Layout = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col">
      <nav className="mb-10 flex items-center gap-1 border-b border-slate-800 pb-4">
        <span className="mr-4 font-bold tracking-tight text-slate-50">
          Team<span className="text-violet-400">Builder</span>
        </span>

        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `rounded-lg px-3 py-1.5 text-sm transition-colors ${
                isActive
                  ? "bg-slate-800 font-semibold text-slate-50"
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-16 border-t border-slate-800 pt-4 text-center text-xs text-slate-600">
        Team Builder · React &amp; TypeScript · B2 Ynov
      </footer>
    </div>
  );
};

export default Layout;
