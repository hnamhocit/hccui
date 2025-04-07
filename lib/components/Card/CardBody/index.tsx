import { FC } from "react";
import { cn } from "../../../utils/cn";

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

const CardBody: FC<CardBodyProps> = ({ children, className }) => {
  return <div className={cn("p-4", className)}>{children}</div>;
};

export default CardBody;
