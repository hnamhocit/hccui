import { cva, VariantProps } from "class-variance-authority";
import { FC, memo } from "react";
import { colors } from "../../constants/colors";
import { motion, HTMLMotionProps } from "framer-motion";

const link = cva("inline-block transition-all", {
  variants: {
    color: {
      default: colors.default.text,
      primary: colors.primary.text,
      secondary: colors.secondary.text,
      warn: colors.warn.text,
      danger: colors.danger.text,
      success: colors.success.text,
    },
    isUnderlined: {
      true: "underline",
      false: "no-underline",
    },
  },
  defaultVariants: {
    color: "default",
    isUnderlined: false,
  },
});

interface LinkProps
  extends Omit<HTMLMotionProps<"a">, "color">,
    VariantProps<typeof link> {
  href: string;
}

const Link: FC<LinkProps> = memo(
  ({ color, isUnderlined, className, children, href, ...props }) => {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05, opacity: 0.7 }}
        whileTap={{ scale: 0.95, opacity: 0.7 }}
        className={link({ color, isUnderlined, className })}
        {...props}
      >
        {children}
      </motion.a>
    );
  },
);

export default Link;
