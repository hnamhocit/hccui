import { FC } from "react";
import { cn } from "../../../utils/cn";

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
  borderTop?: boolean;
}

const CardFooter: FC<CardFooterProps> = ({
  children,
  className,
  borderTop,
}) => {
  return (
    <div className={cn("p-4", borderTop && "border-t-2", className)}>
      {children}
    </div>
  );
};

export default CardFooter;
