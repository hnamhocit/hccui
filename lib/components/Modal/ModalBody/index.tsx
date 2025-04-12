import { FC, ReactNode } from "react";
import { cn } from "../../../utils/cn";

interface ModalBodyProps {
	children: ReactNode;
	className?: string;
}

const ModalBody: FC<ModalBodyProps> = ({ children, className }) => {
	return <div className={cn("p-4 space-y-4", className)}>{children}</div>;
};

export default ModalBody;
