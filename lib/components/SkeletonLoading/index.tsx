import { cn } from "../../utils/cn";

interface SkeletonLoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const SkeletonLoading = ({ className, children }: SkeletonLoadingProps) => {
  return (
    <div
      className={cn(
        "bg-gray-200 flex items-center text-sm justify-center text-center rounded-md animate-pulse",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SkeletonLoading;
