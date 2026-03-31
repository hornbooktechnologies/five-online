import { cn } from "@/lib/utils/cn";

/**
 * Input — base text input with label + error state support.
 * Use with FormField molecule for full label/error wrapping.
 */
export default function Input({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  className = "",
  ...props
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={cn(
        "w-full rounded-xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400",
        "bg-white transition-colors outline-none",
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
