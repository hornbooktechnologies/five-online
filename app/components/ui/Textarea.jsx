import { cn } from "@/lib/utils/cn";

/**
 * Textarea — multi-line text input, same styling system as Input.
 */
export default function Textarea({
  id,
  name,
  placeholder,
  value,
  onChange,
  rows = 5,
  disabled = false,
  error = false,
  className = "",
  ...props
}) {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      disabled={disabled}
      className={cn(
        "w-full rounded-xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400",
        "bg-white resize-y transition-colors outline-none",
        "focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500",
        error
          ? "border-red-400 focus:ring-red-400/40 focus:border-red-400"
          : "border-gray-300 hover:border-gray-400",
        disabled && "opacity-50 cursor-not-allowed bg-gray-50",
        className
      )}
      {...props}
    />
  );
}
