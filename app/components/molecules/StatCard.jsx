import { cn } from "@/lib/utils/cn";

/**
 * StatCard — metric value + up-arrow indicator + label.
 * Used in Case Study pages and cards.
 *
 * @param {boolean} positive - green up arrow (true) or red down (false)
 */
export default function StatCard({ value, label, positive = true, className = "" }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center rounded-2xl p-5 sm:p-6",
        "bg-gray-50 border border-gray-100",
        className
      )}
    >
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-2xl sm:text-3xl font-bold text-gray-900">{value}</span>
        <svg
          className={cn(
            "w-5 h-5 shrink-0",
            positive ? "text-green-500" : "text-red-500"
          )}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          {positive ? (
            <path d="M13 7.83V20h-2V7.83L5.64 13.2 4.22 11.78 12 4l7.78 7.78-1.42 1.42L13 7.83z" />
          ) : (
            <path d="M11 16.17V4h2v12.17l5.36-5.37 1.42 1.42L12 20l-7.78-7.78 1.42-1.42L11 16.17z" />
          )}
        </svg>
      </div>
      <p className="text-xs sm:text-sm text-gray-500 leading-snug">{label}</p>
    </div>
  );
}
