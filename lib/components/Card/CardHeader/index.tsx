import { FC } from "react";
import { cn } from "../../../utils/cn";
import Flex from "../../Flex";

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  borderBottom?: boolean;
}

const CardHeader: FC<CardHeaderProps> = ({
  children,
  className,
  borderBottom,
}) => {
  return (
    <Flex
      items="center"
      justify="between"
      className={cn("p-4", { "border-b-2": borderBottom }, className)}
    >
      {children}
    </Flex>
  );
};

export default CardHeader;
