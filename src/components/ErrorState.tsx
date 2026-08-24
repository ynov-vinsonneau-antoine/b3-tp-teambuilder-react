import type { ReactNode } from "react";

type ErrorStateProps = {
  code: string;
  title: string;
  message: string;
  children?: ReactNode;
};

const ErrorState = ({ code, title, message, children }: ErrorStateProps) => {
  return (
    <section className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-16 text-center">
      <p className="text-8xl font-black tracking-tight text-slate-800">
        {code}
      </p>

      <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-50">
        {title}
      </h1>

      <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
        {message}
      </p>

      {children && <div className="mt-8">{children}</div>}
    </section>
  );
};

export default ErrorState;
