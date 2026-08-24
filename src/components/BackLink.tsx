import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type BackLinkProps = {
  to: string;
  children: ReactNode;
};

const BackLink = ({ to, children }: BackLinkProps) => {
  return (
    <Link
      to={to}
      className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-800 px-3 py-2 text-sm text-slate-400 transition-colors hover:border-slate-700 hover:bg-slate-800 hover:text-slate-50"
    >
      <span aria-hidden="true">←</span>
      {children}
    </Link>
  );
};

export default BackLink;
