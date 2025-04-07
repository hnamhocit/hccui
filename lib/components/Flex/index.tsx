import { memo } from "react";
import { cn } from "../../utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const flex = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      col: "flex-col",
    },
    items: {
      center: "items-center",
      start: "items-start",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      center: "justify-center",
      start: "justify-start",
      end: "justify-end",
      stretch: "justify-stretch",
      between: "justify-between",
      around: "justify-around",
    },
    gap: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      8: "gap-8",
      10: "gap-10",
      12: "gap-12",
      16: "gap-16",
    },
  },
});

interface FlexProps extends VariantProps<typeof flex> {
  children: React.ReactNode;
  className?: string;
}

const Flex = ({
  children,
  direction,
  items,
  justify,
  gap,
  className,
}: FlexProps) => {
  return (
    <div className={cn(flex({ direction, items, justify, gap }), className)}>
      {children}
    </div>
  );
};

export default memo(Flex);
