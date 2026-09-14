import { Children, isValidElement, type ReactNode } from "react";
import { SITE_PHONE_HREF } from "@/lib/site";

type ThmButtonProps = {
  href?: string;
  type?: "button" | "submit";
  children: ReactNode;
  className?: string;
  hoverVariant?: "dark" | "white";
  variant?: "primary" | "secondary";
  target?: string;
  rel?: string;
  disabled?: boolean;
  onClick?: () => void;
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

function isContactHref(href?: string) {
  if (!href) return false;
  const path = href.split("?")[0].replace(/\/$/, "") || "/";
  return path === "/contact-us";
}

function collectText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(collectText).join(" ");
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return collectText(node.props.children);
  }
  return "";
}

function keepIcons(node: ReactNode): ReactNode[] {
  const icons: ReactNode[] = [];
  Children.forEach(node, (child) => {
    if (!isValidElement(child)) return;
    if (typeof child.type === "string") return;
    icons.push(child);
  });
  return icons;
}

function toCallLabel(raw: string) {
  const text = raw.replace(/\s+/g, " ").trim().toLowerCase();
  if (!text) return "Call Now";
  if (text.includes("fixed")) return "Call for a Fixed Quote";
  if (text.includes("free quote")) return "Call for a Free Quote";
  if (text.includes("quote")) return "Call for a Quote";
  if (text.includes("vetted") || text.includes("our team")) return "Call Our Team";
  if (text.includes("contact us") || text.includes("send message")) return "Call Us";
  if (text.includes("contact")) return "Call Now";
  if (text.includes("book")) return "Call to Book";
  return "Call Now";
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
  disabled,
  onClick,
}: ThmButtonProps) {
  const classes = buttonClassName({ className, hoverVariant, variant });

  if (href && isContactHref(href)) {
    const callLabel = toCallLabel(collectText(children));

    return (
      <>
        <a href={href} className={`${classes} thmBtnDesktopContact`}>
          {children}
          <HoverSpans />
        </a>
        <a href={SITE_PHONE_HREF} className={`${classes} thmBtnMobileCall`}>
          {keepIcons(children)}
          {callLabel}
          <HoverSpans />
        </a>
      </>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
        <HoverSpans />
      </a>
    );
  }

  return (
    <button
      type={type ?? "button"}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      <HoverSpans />
    </button>
  );
}
