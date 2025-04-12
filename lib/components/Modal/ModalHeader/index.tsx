import { FC, memo } from "react";
import Button from "../../Button";
import { FaTimes } from "react-icons/fa";
import { cn } from "../../../utils/cn";

interface ModalHeaderProps {
	children: React.ReactNode;
	className?: string;
	onOpenChange?: () => void;
}

const ModalHeader: FC<ModalHeaderProps> = ({
	children,
	className,
	onOpenChange,
}) => {
	return (
		<div
			className={cn(
				"flex p-4 items-center text-2xl font-semibold justify-between",
				className,
			)}
		>
			{children}

			{onOpenChange && (
				<Button color="danger" variant="light" onClick={onOpenChange}>
					<FaTimes size={20} />
				</Button>
			)}
		</div>
	);
};

export default memo(ModalHeader);
