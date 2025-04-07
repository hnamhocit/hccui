import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes, memo, useId } from "react";
import { cn } from "../../utils/cn";
import {
  generateBorderVariants,
  generateLightVariants,
  generateFlatVariants,
} from "../../utils/variants";

const compoundVariants = [
  ...generateBorderVariants(),
  ...generateLightVariants(),
  ...generateFlatVariants(),
];

const input = cva("inline-block outline-none transition-colors", {
  variants: {
    size: {
      sm: "py-1 px-2",
      md: "py-2 px-4",
      lg: "py-3 px-6",
    },
    variant: {
      default: "text-white",
      light: "!bg-transparent",
      border: "border-2",
      flat: "",
    },
    color: {
      default: "bg-default",
      primary: "bg-primary",
      secondary: "bg-secondary",
      warn: "bg-warn",
      danger: "bg-danger",
      success: "bg-success",
    },
    isRounded: {
      true: "rounded-full",
      false: "rounded-md",
    },
  },
  compoundVariants,
  defaultVariants: {
    color: "default",
    size: "md",
    variant: "default",
    isRounded: false,
  },
});

interface InputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "color">,
    VariantProps<typeof input> {
  label?: string;
  errorMessage?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  label,
  errorMessage,
  size,
  variant,
  color,
  isRounded,
  placeholder,
  ...props
}) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}

      <input
        {...props}
        id={id}
        placeholder={placeholder}
        className={cn(
          props.className,
          input({ size, variant, color, isRounded }),
        )}
      />

      {errorMessage && (
        <div className="text-red-500 text-xs font-semibold">{errorMessage}</div>
      )}
    </div>
  );
};

export default memo(Input);
