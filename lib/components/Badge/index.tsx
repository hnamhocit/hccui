import { cva, VariantProps } from "class-variance-authority";
import { FC, memo, ReactNode } from "react";
import { cn } from "../../utils/cn";
import { colors } from "../../constants/colors";

const badge = cva(
	"absolute flex items-center shadow justify-center z-10 text-center rounded-2xl text-white",
	{
		variants: {
			position: {
				"top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
				"top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
				"bottom-left":
					"bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
				"bottom-right":
					"bottom-0 right-0 translate-x-1/2 translate-y-1/2",
				"top-center":
					"top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
				"bottom-center":
					"bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
				"right-center":
					"right-0 top-1/2 -translate-y-1/2 -translate-x-1/2",
				"left-center":
					"left-0 top-1/2 -translate-y-1/2 translate-x-1/2",
			},
			size: {
				small: "text-xs w-4 h-4",
				medium: "text-sm w-6 h-6",
				large: "text-base w-8 h-8",
			},
			color: {
				default: colors.default.bg,
				primary: colors.primary.bg,
				secondary: colors.secondary.bg,
				success: colors.success.bg,
				warning: colors.warn.bg,
				danger: colors.danger.bg,
			},
		},
		defaultVariants: {
			size: "medium",
			color: "default",
			position: "top-right",
		},
	},
);

interface BadgeProps extends VariantProps<typeof badge> {
	children: ReactNode;
	content: ReactNode;
	className?: string;
}

const Badge: FC<BadgeProps> = ({
	children,
	content,
	size,
	color,
	className,
	position,
}) => {
	return (
		<div className="relative w-fit h-fit">
			{children}

			<div className={cn(badge({ size, color, position }), className)}>
				{content}
			</div>
		</div>
	);
};

export default memo(Badge);
