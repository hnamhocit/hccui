import { FC, memo } from "react";
import Image, { _ImageProps } from "../Image";
import { cn } from "../../utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { colors } from "../../constants/colors";

const avatar = cva("rounded-full object-cover", {
	variants: {
		size: {
			sm: "w-10 h-10",
			md: "w-12 h-12",
			lg: "w-16 h-16",
		},
		color: {
			default: colors.default.border,
			primary: colors.primary.border,
			secondary: colors.secondary.border,
			danger: colors.danger.border,
			warn: colors.warn.border,
			success: colors.success.border,
		},
	},
	defaultVariants: {
		size: "md",
	},
});

interface AvatarProps
	extends Omit<_ImageProps, keyof VariantProps<typeof avatar>>,
		VariantProps<typeof avatar> {
	isBordered?: boolean;
}

const Avatar: FC<AvatarProps> = ({
	size,
	src,
	alt,
	className,
	isZoom,
	color,
	isBordered,
}) => {
	return (
		<Image
			src={src}
			alt={alt}
			className={cn("object-cover", className)}
			classNames={{
				container: cn(
					avatar({ size, color }),
					isBordered && "border-2",
					"rounded-full",
					className,
				),
			}}
			isZoom={isZoom}
		/>
	);
};

export default memo(Avatar);
