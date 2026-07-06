import type { ReactNode } from "react";

type ThmButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  hoverVariant?: "dark" | "white";
  variant?: "primary" | "secondary";
};

export default function ThmButton({
  href,
  children,
  className = "",
  hoverVariant = "dark",
  variant = "primary",
}: ThmButtonProps) {
  return (
    <a
      href={href}
      className={[
        "thmBtn",
        variant === "secondary" ? "thmBtnSecondary" : "",
        hoverVariant === "white" ? "thmBtnHoverWhite" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
      <span className="hoverBtn hoverBx" />
      <span className="hoverBtn hoverBx2" />
      <span className="hoverBtn hoverBx3" />
      <span className="hoverBtn hoverBx4" />
    </a>
  );
}
