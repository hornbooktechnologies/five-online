// Figma canvas: 1440px. Content area: ~1200px with ~120px horizontal padding each side.
export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-[90px] py-[110px] ${className}`}
    >
      {children}
    </div>
  );
}
