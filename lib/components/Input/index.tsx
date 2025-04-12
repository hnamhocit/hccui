import { cva, VariantProps } from "class-variance-authority";
import {
	FC,
	InputHTMLAttributes,
	memo,
	ReactNode,
	useId,
	useState,
} from "react";

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

const input = cva("flex items-center gap-3 transition-all", {
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
			default: "bg-default border-default-flat",
			primary: "bg-primary border-primary-flat",
			secondary: "bg-secondary border-secondary-flat",
			warn: "bg-warn border-warn-flat",
			danger: "bg-danger border-danger-flat",
			success: "bg-success border-success-flat",
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
	extends Omit<
			InputHTMLAttributes<HTMLInputElement>,
			keyof VariantProps<typeof input>
		>,
		VariantProps<typeof input> {
	label?: string;
	errorMessage?: string;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
}

const Input: FC<InputProps> = ({
	label,
	errorMessage,
	size,
	variant,
	color,
	isRounded,
	startIcon,
	endIcon,
	...props
}) => {
	const id = useId();
	const [isFocus, setIsFocus] = useState(false);

	return (
		<div className="flex flex-col gap-1">
			{label && (
				<label htmlFor={id} className="text-sm font-medium select-none">
					{label}
				</label>
			)}

			<div
				className={cn(
					input({ size, variant, color, isRounded }),
					isFocus && "border-2",
					props.className,
				)}
			>
				{startIcon && <div className="shrink-0">{startIcon}</div>}

				<input
					{...props}
					id={id}
					className="block flex-1 outline-none bg-transparent"
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
				/>

				{endIcon && <div className="shrink-0">{endIcon}</div>}
			</div>

			{errorMessage && (
				<div className="text-red-500 text-xs font-semibold">
					{errorMessage}
				</div>
			)}
		</div>
	);
};

export default memo(Input);
