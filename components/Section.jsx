export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`}>
      {(title || subtitle) && (
        <header className="mb-8">
          {subtitle && <p className="text-sm uppercase tracking-widest text-gray-500">{subtitle}</p>}
          {title && <h2 className="text-3xl sm:text-4xl font-bold mt-1">{title}</h2>}
        </header>
      )}
      {children}
    </section>
  );
}
