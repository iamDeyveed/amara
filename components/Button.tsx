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
    "border border-hub-text bg-transparent text-hub-text hover:bg-hub-text hover:text-[#111111]",
  gold:
    "border border-transparent bg-hub-gold text-[#241b06] hover:bg-hub-goldLight hover:shadow-gold"
};

export function Button({ children, variant = "outline", className = "", ...props }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition duration-200 ${styles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;

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
