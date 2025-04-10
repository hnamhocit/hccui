import { cva, VariantProps } from "class-variance-authority";
import React, { Dispatch, FC, memo, SetStateAction } from "react";
import { cn } from "../../utils/cn";
import { colors } from "../../constants/colors";

const _switch = cva("p-1 rounded-full bg-default", {
	variants: {
		color: {
			default: colors.default.bg,
			primary: colors.primary.bg,
			secondary: colors.secondary.bg,
			warn: colors.warn.bg,
			success: colors.success.bg,
			danger: colors.danger.bg,
		},
	},
	defaultVariants: {
		color: "default",
	},
});

interface SwitchProps extends VariantProps<typeof _switch> {
	children?: React.ReactNode;
	className?: string;
	checked: boolean;
	onChecked: Dispatch<SetStateAction<boolean>>;
}

const Switch: FC<SwitchProps> = ({
	children,
	className,
	checked,
	onChecked,
	color,
}) => {
	return (
		<button
			onClick={() => onChecked((prev) => !prev)}
			className={cn(_switch({ color }), "w-14 relative", className)}
		>
			<div
				className={cn(
					"p-1 flex items-center justify-center rounded-full bg-white w-6 transition",
					checked && "translate-x-full",
				)}
			>
				{children}
			</div>
		</button>
	);
};

export default memo(Switch);
