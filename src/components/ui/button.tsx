import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { IconName } from "@/lib/icons";
import { Icon } from "@/components/ui/icon";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,transform,box-shadow] duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-paper shadow-[0_8px_30px_-12px_var(--color-primary)] hover:-translate-y-0.5 hover:bg-primary-soft",
        secondary:
          "border border-line bg-surface text-fg backdrop-blur hover:-translate-y-0.5 hover:bg-surface-strong",
        /* For use on accent gradients, where primary would disappear. */
        inverse: "bg-paper text-ink hover:-translate-y-0.5 hover:bg-paper/90",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

interface BaseProps extends VariantProps<typeof buttonVariants> {
  icon?: IconName;
  loading?: boolean;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = BaseProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;

type NativeButtonProps = BaseProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
  >;

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({
  variant,
  size,
  icon,
  loading,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  const iconNode = loading ? (
    <Icon name="loader" size={16} className="animate-spin" />
  ) : icon ? (
    <Icon
      name={icon}
      size={16}
      className="transition-transform duration-300 group-hover:translate-x-0.5"
    />
  ) : null;

  if (rest.href !== undefined) {
    return (
      <Link className={classes} {...rest}>
        {children}
        {iconNode}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...rest}
      disabled={loading || rest.disabled}
      aria-busy={loading || undefined}
    >
      {children}
      {iconNode}
    </button>
  );
}
