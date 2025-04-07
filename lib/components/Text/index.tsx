import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes, memo } from "react";
import { colors } from "../../constants/colors";

const text = cva("div", {
  variants: {
    role: {
      headline: "font-bold text-5xl",
      heading: "font-bold text-3xl",
      subheading: "font-bold text-xl",
      paragraph: "",
      caption: "text-sm",
    },
    color: {
      default: colors.default.text,
      primary: colors.primary.text,
      secondary: colors.secondary.text,
      warn: colors.warn.text,
      danger: colors.danger.text,
      success: colors.success.text,
    },
    style: {
      normal: "",
      bold: "font-bold",
      black: "font-black",
      italic: "italic",
    },
  },
  defaultVariants: {
    role: "paragraph",
    color: "default",
    style: "normal",
  },
});

interface TextProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color" | "role" | "style">,
    VariantProps<typeof text> {}

const Text: FC<TextProps> = memo(
  ({ role, color, className, style, ...props }) => {
    return (
      <div className={text({ role, color, style, className })} {...props} />
    );
  },
);

export default Text;
