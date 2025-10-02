export default function Button({ children, asChild = false, href, type = "button", onClick, variant = "primary" }) {
  const base = "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = variant === "primary"
    ? "bg-gray-900 text-white hover:bg-black focus:ring-gray-900"
    : variant === "ghost"
    ? "text-gray-900 hover:bg-gray-100"
    : "bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50";
  if (asChild) return <span className={`${base} ${styles}`}>{children}</span>;
  if (href) return <a href={href} className={`${base} ${styles}`}>{children}</a>;
  return <button type={type} onClick={onClick} className={`${base} ${styles}`}>{children}</button>;
}
