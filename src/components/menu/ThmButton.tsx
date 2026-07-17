import type { ReactNode } from "react";

type ThmButtonProps = {
  href?: string;
  type?: "button" | "submit";
  children: ReactNode;
  className?: string;
  hoverVariant?: "dark" | "white";
  variant?: "primary" | "secondary";
  target?: string;
  rel?: string;
};

function buttonClassName({
  className = "",
  hoverVariant = "dark",
  variant = "primary",
}: Pick<ThmButtonProps, "className" | "hoverVariant" | "variant">) {
  return [
    "thmBtn",
    variant === "secondary" ? "thmBtnSecondary" : "",
    hoverVariant === "white" ? "thmBtnHoverWhite" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

function HoverSpans() {
  return (
    <>
      <span className="hoverBtn hoverBx" />
      <span className="hoverBtn hoverBx2" />
      <span className="hoverBtn hoverBx3" />
      <span className="hoverBtn hoverBx4" />
    </>
  );
}

export default function ThmButton({
  href,
  type,
  children,
  className = "",
  hoverVariant = "dark",
  variant = "primary",
  target,
  rel,
}: ThmButtonProps) {
  const classes = buttonClassName({ className, hoverVariant, variant });

  if (type === "button" || type === "submit") {
    return (
      <button type={type} className={classes}>
        {children}
        <HoverSpans />
      </button>
    );
  }

  return (
    <a href={href} className={classes} target={target} rel={rel}>
      {children}
      <HoverSpans />
    </a>
  );
}
