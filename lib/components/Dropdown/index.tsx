import { cva, VariantProps } from "class-variance-authority";
import { AnimatePresence, motion } from "motion/react";
import { FC, memo, ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "../../utils/cn";

const content = cva(
	"absolute p-2 bg-white border border-gray-200 z-10 rounded-2xl shadow max-w-80 min-w-40 min-h-40 max-h-80 overflow-y-scroll",
	{
		variants: {
			position: {
				"top-left": "bottom-full left-0",
				"top-right": "bottom-full right-0",
				"bottom-left": "top-full left-0",
				"bottom-right": "top-full right-0",
				"top-center": "bottom-full left-1/2 -translate-x-1/2",
				"right-center": "top-1/2 -translate-x-1/2 left-full",
				"left-center": "top-1/2 -translate-y-1/2 right-full",
				"bottom-center": "top-full -translate-x-1/2 left-1/2",
			},
		},
		defaultVariants: {
			position: "bottom-right",
		},
	},
);

interface DropdownProps extends VariantProps<typeof content> {
	children: ReactNode;
	trigger: ReactNode;
	className?: string;
}

const Dropdown: FC<DropdownProps> = ({
	children,
	trigger,
	className,
	position,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const toggleIsOpen = () => setIsOpen((prev) => !prev);

	useEffect(() => {
		function handleClickOutside(ev: MouseEvent) {
			if (ref.current && !ref.current.contains(ev.target as Node)) {
				toggleIsOpen();
			}
		}
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return (
		<div className="relative w-fit" ref={ref}>
			<div className="cursor-pointer" onClick={toggleIsOpen}>
				{trigger}
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						animate={{ opacity: 1, translateY: 8 }}
						exit={{ opacity: 0, translateY: -8 }}
						className={cn(content({ position }), className)}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default memo(Dropdown);
