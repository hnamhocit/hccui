import { FC } from "react";
import { cn } from "../../utils/cn";
import { colors } from "../../constants/colors";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  isBlurred?: boolean;
}

const Card: FC<CardProps> = ({ children, className, isBlurred }) => {
  return (
    <div
      className={cn(
        "rounded-2xl shadow text-white",
        isBlurred && "backdrop-blur-3xl !bg-default/10",
        colors.default.bg,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
