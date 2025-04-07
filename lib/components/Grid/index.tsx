import { cva, VariantProps } from "class-variance-authority";
import { FC, memo, HTMLAttributes } from "react";

const grid = cva("grid", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      7: "grid-cols-7",
      8: "grid-cols-8",
      9: "grid-cols-9",
      10: "grid-cols-10",
      11: "grid-cols-11",
      12: "grid-cols-12",
      none: "grid-cols-none",
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
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
      stretch: "justify-stretch", // Corrected typo from strech
    },
    alignItems: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justifyItems: {
      start: "justify-items-start",
      center: "justify-items-center",
      end: "justify-items-end",
      stretch: "justify-items-stretch",
    },
  },
  defaultVariants: {},
});

interface GridProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof grid> {
  children: React.ReactNode;
}

const Grid: FC<GridProps> = ({
  children,
  className,
  cols,
  gap,
  justify,
  alignItems,
  justifyItems,
  ...props // Pass remaining div attributes
}) => {
  return (
    <div
      className={grid({
        cols,
        gap,
        justify,
        alignItems,
        justifyItems,
        className,
      })} // Apply cva generated classes
      {...props} // Spread the rest of the props
    >
      {children}
    </div>
  );
};

export default memo(Grid);
