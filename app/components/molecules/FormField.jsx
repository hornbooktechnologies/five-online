import Input from "@/app/components/ui/Input";
import Textarea from "@/app/components/ui/Textarea";
import { cn } from "@/lib/utils/cn";

/**
 * FormField — Label + Input/Textarea + optional error message.
 * Wraps Input or Textarea with accessibility-linked label.
 *
 * @param {"input"|"textarea"} as
 */
export default function FormField({
  as: Tag = "input",
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  rows,
  className = "",
  inputClassName = "",
}) {
  const Comp = Tag === "textarea" ? Textarea : Input;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <Comp
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={!!error}
        rows={rows}
        className={inputClassName}
      />
      {error && (
        <p className="text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}
