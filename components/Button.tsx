import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "outline" | "gold";
  className?: string;
};

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const styles = {
  outline:
    "border border-hub-text bg-transparent text-hub-text hover:-translate-y-0.5 hover:bg-hub-text hover:text-[#111111] hover:shadow-[0_16px_38px_rgba(243,239,230,0.12)] active:translate-y-0 active:scale-[0.98]",
  gold:
    "border border-transparent bg-hub-gold text-[#241b06] hover:-translate-y-0.5 hover:bg-hub-goldLight hover:shadow-gold active:translate-y-0 active:scale-[0.98]"
};

export function Button({ children, variant = "outline", className = "", ...props }: ButtonProps) {
  const classes = `group/button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-1 ${styles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    const isInternalRoute = href.startsWith("/") && !href.startsWith("//");

    if (!isInternalRoute) {
      return (
        <a href={href} className={classes} {...linkProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as Omit<NativeButtonProps, keyof BaseProps>;

  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
