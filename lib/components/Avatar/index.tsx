import { FC, memo } from "react";
import Image, { _ImageProps } from "../Image";
import { cn } from "../../utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const avatar = cva("rounded-full object-cover", {
  variants: {
    size: {
      sm: "w-10 h-10",
      md: "w-12 h-12",
      lg: "w-16 h-16",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface AvatarProps extends VariantProps<typeof avatar>, _ImageProps {}

const Avatar: FC<AvatarProps> = ({ size, src, alt, className, isZoom }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn(avatar({ size }), className)}
      classNames={{ container: "rounded-full" }}
      isZoom={isZoom}
    />
  );
};

export default memo(Avatar);
