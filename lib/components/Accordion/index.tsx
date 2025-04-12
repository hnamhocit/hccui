import { FC, memo, ReactNode, useState } from "react";
import { cn } from "../../utils/cn";
import { FaPlus } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { cva, VariantProps } from "class-variance-authority";
import { colors } from "../../constants/colors";

const accordion = cva(
	"flex w-full items-center mb-1 justify-between p-2 text-white rounded-md shadow",
	{
		variants: {
			color: {
				default: colors.default.bg,
				primary: colors.primary.bg,
				secondary: colors.secondary.bg,
				warn: colors.warn.bg,
				danger: colors.danger.bg,
				success: colors.success.bg,
			},
		},
		defaultVariants: {
			color: "default",
		},
	},
);

interface AccordionProps extends VariantProps<typeof accordion> {
	label: ReactNode;
	children: ReactNode;
	className?: string;
}

const Accordion: FC<AccordionProps> = ({
	label,
	children,
	color,
	className,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => setIsOpen(!isOpen);

	return (
		<div>
			<motion.button
				whileTap={{ opacity: 0.9 }}
				className={accordion({ color })}
				onClick={toggleIsOpen}
			>
				{label}

				<FaPlus
					className={cn("transition-all", {
						"rotate-45": isOpen,
					})}
				/>
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0 }}
						animate={{ height: "auto" }}
						exit={{ height: 0 }}
						className={cn("overflow-hidden", className)}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default memo(Accordion);
