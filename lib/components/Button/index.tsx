import { cva, VariantProps } from "class-variance-authority";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import React, { FC, memo, ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "../../utils/cn";
import {
	generateBorderVariants,
	generateFlatVariants,
	generateLightVariants,
} from "../../utils/variants";
import { SpinnerLoading } from "../Loading";

const compoundVariants = [
	...generateBorderVariants(),
	...generateLightVariants(),
	...generateFlatVariants(),
];

const button = cva(
	"flex items-center justify-center gap-3 cursor-pointer transition-colors relative overflow-hidden",
	{
		variants: {
			variant: {
				default: "text-white",
				light: "!bg-transparent",
				border: "border-2 !bg-transparent",
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
			size: {
				sm: "py-1 px-2",
				md: "py-2 px-4",
				lg: "py-3 px-6",
			},
			isRounded: {
				true: "rounded-full",
				false: "rounded-md",
			},
			isDisabled: {
				true: "opacity-70 cursor-not-allowed",
				false: "",
			},
		},
		compoundVariants,
		defaultVariants: {
			color: "default",
			size: "md",
			variant: "default",
			isDisabled: false,
		},
	},
);

interface ButtonProps
	extends Omit<HTMLMotionProps<"button">, keyof VariantProps<typeof button>>,
		VariantProps<typeof button> {
	isIconOnly?: boolean;
	isLoading?: boolean;
	isFullwidth?: boolean;
}

const Button: FC<ButtonProps> = ({
	variant,
	color,
	size,
	isRounded = false,
	isIconOnly = false,
	className,
	isDisabled,
	isLoading,
	children,
	isFullwidth,
	...props
}) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [ripples, setRipples] = useState<
		Array<{ key: number; x: number; y: number }>
	>([]);

	const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (!buttonRef.current) return;

		const rect = buttonRef.current.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		setRipples((prev) => [...prev, { key: Date.now(), x, y }]);
	};

	useEffect(() => {
		if (ripples.length > 0) {
			const timeout = setTimeout(() => {
				setRipples((prev) => prev.slice(1)); // Remove the oldest ripple after animation
			}, 600); // Match this duration with the animation duration below

			return () => clearTimeout(timeout);
		}
	}, [ripples]);

	const isIconOnlyClassName = isIconOnly
		? size === "lg"
			? "!p-3"
			: size === "md"
				? "!p-2"
				: "!p-1"
		: "";

	return (
		<motion.button
			ref={buttonRef}
			whileHover={{ opacity: 0.7 }}
			whileTap={{ scale: 0.9 }}
			className={cn(
				button({
					color,
					size,
					variant,
					isDisabled: isLoading || isDisabled,
					isRounded: isIconOnly || isRounded,
					className: `${className} ${isIconOnlyClassName}`,
				}),
				isFullwidth && "w-full flex-1",
			)}
			onMouseDown={handleMouseDown}
			{...props}
		>
			{isLoading && (
				<SpinnerLoading
					width={20}
					padding={4}
					color={
						variant === "border" || variant === "light"
							? undefined
							: "#fff"
					}
				/>
			)}
			{children as ReactNode}
			{/* Render ripples */}
			<AnimatePresence>
				{ripples.map(({ key, x, y }) => (
					<motion.span
						key={key}
						className="absolute bg-white/50 rounded-full transform translate-x-[-50%] translate-y-[-50%]"
						initial={{ width: 0, height: 0, opacity: 1 }}
						animate={{ width: 200, height: 200, opacity: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.6, ease: "linear" }}
						style={{
							top: y,
							left: x,
						}}
					/>
				))}
			</AnimatePresence>
		</motion.button>
	);
};

export default memo(Button);
