import { FC, memo } from "react";
import Button from "../../Button";
import { FaTimes } from "react-icons/fa";
import { cn } from "../../../utils/cn";

interface ModalHeaderProps {
	children: React.ReactNode;
	className?: string;
}

const ModalHeader: FC<ModalHeaderProps> = ({ children, className }) => {
	return (
		<div className={cn("flex p-4 items-center justify-between", className)}>
			{children}

			<Button color="danger" variant="light">
				<FaTimes />
			</Button>
		</div>
	);
};

export default memo(ModalHeader);
