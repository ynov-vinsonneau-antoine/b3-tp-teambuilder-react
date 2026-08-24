import type { ReactNode } from "react";

type ButtonVariant = "primary" | "danger";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-violet-500 px-5 py-2 text-sm hover:bg-violet-400",
  danger: "bg-rose-500/90 px-2 py-0.5 text-xs hover:bg-rose-400",
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer rounded-lg font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:bg-slate-800 disabled:text-slate-600 ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
