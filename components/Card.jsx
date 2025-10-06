export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl shadow-sm ring-1  ring-brand/30 bg-white overflow-hidden hover:shadow-md transition ${className}`}
    >
      {children}
    </div>
  );
}
