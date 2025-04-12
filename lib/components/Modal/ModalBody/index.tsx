import { FC, ReactNode } from "react";
import { cn } from "../../../utils/cn";

interface ModalBodyProps {
	children: ReactNode;
	className?: string;
}

const ModalBody: FC<ModalBodyProps> = ({ children, className }) => {
	return (
		<div
			className={cn(
				"p-4 space-y-4 max-h-80 min-h-40 overflow-y-hidden",
				className,
			)}
		>
			{children}
		</div>
	);
};

export default ModalBody;
